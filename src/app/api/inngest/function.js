import { inngest } from "@/inngest/client";
import { createAgent, gemini } from "@inngest/agent-kit";

export const aiAgent = inngest.createFunction(
  { id: "ai-agent", triggers: { event: "vion/ai-agent.created" } },
  async ({ event }) => {
    const agent = createAgent({
      name: "ai-agent",
      description:
        "A simple AI agent that can answer questions and help with tasks",
      system: "You are a helpful AI assistant.",
      model: gemini({
        model: "gemini-2.5-flash",
        apiKey: process.env.GEMINI_API_KEY,
      }),
    });

    // agent.run() internally uses step.ai.infer — call it directly at the
    // top level, never inside step.run(), to avoid nested step errors.
    const output = await agent.run(event.data.prompt);
    const lastMessage = output.output?.at(-1);

    return { response: lastMessage?.content ?? "" };
  },
);
