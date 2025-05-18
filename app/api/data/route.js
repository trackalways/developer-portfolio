import { NextResponse } from "next/server";

// Required for static site export
export const dynamic = "force-static";

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'hle!',
    data: {
      message: 'Message and email sent successfully!',
    }
  }, { status: 200 });
};