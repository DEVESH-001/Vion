import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { aiAgent } from "./function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [aiAgent],
});
