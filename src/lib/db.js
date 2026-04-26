// This is a singleton pattern to prevent multiple instances of PrismaClient(means: only one instance of PrismaClient will be created)

import { PrismaClient } from "@/generated";

const db =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query", "warn", "info", "error"],
  });

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = db;
}

export default db;
