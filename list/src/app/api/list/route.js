import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// POST request

export async function POST(req) {
  const data = await req.json();
  try {
    const newList = await prisma.list.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });

    if (newList) {
      return NextResponse.json({
        success: true,
        message: "data created successfully",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error,
    });
  }
}

// POST request

export async function GET(params) {
  try {
    const allList = await prisma.list.findMany({
      select: {
        title: true,
        id: true,
        description: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (allList) {
      return NextResponse.json({
        success: true,
        data: allList,
      });
    } else {
      NextResponse.json({ success: false, message: "An error occured" });
    }
  } catch (error) {
    NextResponse.json({ success: false, message: "An error occured" });
  }
}
