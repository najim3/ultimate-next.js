import { prisma } from "@/utils/prisma";

// POST request

export async function POST(req) {
  const data = await req.json();
  console.log("data: ", data);
}
