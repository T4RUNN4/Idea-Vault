import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const pathName = request.nextUrl.pathname;

  if (
    !session &&
    (pathName.startsWith("/add-ideas") ||
      pathName.startsWith("/my-ideas") ||
      pathName.startsWith("/my-interactions"))
  ) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (session && (pathName.startsWith("/login") || pathName.startsWith("/register"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/add-ideas",
    "/my-ideas",
    "/my-interactions",
    "/login",
    "/register",
  ],
};
