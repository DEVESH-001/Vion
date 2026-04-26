import { PrismaClient } from "@prisma/client";

const db =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query", "warn", "info", "error"],
  });

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = db;
}

export default db;