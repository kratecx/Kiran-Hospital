import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { secretKey } = await request.json();

    if (secretKey === process.env.ADMIN_SECRET_KEY) {
      const response = NextResponse.json({ success: true, message: "Authenticated successfully" });
      
      // Set a secure cookie valid for this session/day
      response.cookies.set({
        name: "admin_auth",
        value: process.env.ADMIN_SECRET_KEY,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });

      return response;
    }

    return NextResponse.json({ success: false, message: "Invalid Secret Key" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}