// src/middleware.js
import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/auth";

export async function middleware(req) {
    const session = await getSession();
    const isLoginPage = req.nextUrl.pathname === "/login";

    if (!session && !isLoginPage) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (session && isLoginPage) {
        return NextResponse.redirect(new URL("/", req.url)); // Redirect logged-in users away from login
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|static|public).*)"], // Apply to all pages except Next.js internals
};