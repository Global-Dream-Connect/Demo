import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, otp } = body;

    if (!email || !otp) {
      return NextResponse.json(
        { message: "Missing email or OTP" },
        { status: 400 }
      );
    }

    // TEMP check (mock OTP)
    if (otp !== "555555") {
      return NextResponse.json(
        { message: "Invalid OTP" },
        { status: 401 }
      );
    }

    console.log("OTP verified for:", email);

    return NextResponse.json(
      { message: "Email verified" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
