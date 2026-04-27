import { inngest } from "@/inngest/client";


export const helloworld = inngest.createFunction(
  { id: "helloworld", triggers: { event: "app/helloworld.created" } },
  async ({ event, step }) => {
    const result = await step.run("handle-task", async () => {
      return { processed: true, id: event.data.id };
    });

    await step.sleep("pause", "1s");

    return { message: `Hello ${event.data.id} World`, result };
  }
);