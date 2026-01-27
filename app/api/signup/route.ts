import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password } = body;

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const request = await fetch(`http://localhost:3000/api/send-otp`,{
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
  console.log(request)
    const response = await request.json()

    if(response.success){
      return NextResponse.json(
        { message: "OTP sent successfully" },
        { status: 200 }
      );      
    } 
    else{
      return NextResponse.json(
        { message: "Error sending OTP" },
        { status: 500 }
      );
    }


  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
