import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "Email required" },
      { status: 400 }
    );
  }

  // mock success
  return NextResponse.json({ success: true });
}
