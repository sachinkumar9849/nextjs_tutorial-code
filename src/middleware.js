// middleware.js
import { NextResponse } from "next/server";

const middleware = ( request ) => {
  // Ensure that the request object and nextUrl are properly accessed
  if (request && request.nextUrl && request.nextUrl.pathname !== "/login") {
    // Redirect to /login if the requested URL is not /login
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    // If already on /login or request object is missing, allow the request to proceed
    return NextResponse.next(); 
  }
};

export const config = {
  matcher :["/about/:path*"]
}

export default middleware;
