
import { NextRequest, NextResponse } from 'next/server'
import { NextURL } from 'next/dist/server/web/next-url'
// import { json } from 'node:stream/consumers'
 
export async function GET(request:NextRequest,response:NextResponse) {
 
  const host = new NextURL(request.nextUrl).host
  const device = request.headers.get('user-agent')

  const data = { IP : host , Device : device }

  console.log(`Request from ${host} and device ${device}`)
  return NextResponse.json((data), { status: 200 })
}