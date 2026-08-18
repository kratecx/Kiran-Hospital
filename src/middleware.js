import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  // Check if the request is for the admin route
  if (url.pathname.startsWith("/admin")) {
    const adminAuth = request.cookies.get("admin_auth");
    const isAuthenticated = adminAuth && adminAuth.value === process.env.ADMIN_SECRET_KEY;

    // If already logged in, redirect away from the login page or base /admin to /admin/manage
    if (isAuthenticated) {
      if (url.pathname === "/admin/login" || url.pathname === "/admin") {
        return NextResponse.redirect(new URL("/admin/manage", request.url));
      }
    } else {
      // If NOT logged in, allow access ONLY to the login page; protect everything else
      if (url.pathname === "/admin/login") {
        return NextResponse.next();
      }

      // Redirect unauthenticated requests to login
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};