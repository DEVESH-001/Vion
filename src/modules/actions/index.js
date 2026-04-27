// This file contains server actions that can be called from the client(used for inngest in )

"use server";

import { inngest } from "@/inngest/client";

export const triggerAiAgent = async (prompt) => {
  if (!prompt) {
    throw new Error("Prompt is required");
  }

  try {
    await inngest.send({
      name: "vion/ai-agent.created",
      data: {
        prompt,
      },
    });

    return { success: true, message: "AI agent triggered successfully" };
  } catch (error) {
    console.error("Failed to trigger AI agent:", error);
    throw new Error("Failed to trigger AI agent");
  }
};
