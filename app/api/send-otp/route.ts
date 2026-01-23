import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
console.log(email)
  if (!email) {
    return NextResponse.json(
      { message: "Email required" },
      { status: 400 }
    );
  }

  //otp sending request here

  // mock success
  return NextResponse.json({ success: true },{status:200});
}
