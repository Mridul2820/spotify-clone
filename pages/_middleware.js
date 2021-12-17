import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    // Token will exist if user logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET })

    const { pathname } = req.nextUrl

    // Allow the request if the following is true...
    if(pathname.includes('/api/auth') || token){
        return NextResponse.next()
    }

    // Protected Routes
    if(!token && pathname !== '/login' ){
        return NextResponse.redirect('/login')
    }
}