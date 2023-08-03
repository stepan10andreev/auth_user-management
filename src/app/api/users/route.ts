import { NextResponse, NextRequest } from 'next/server'
import { USERS } from '../../../../data/users'
import { headers } from 'next/headers'

export async function GET(request: NextRequest) {
  // // if request: Request (global type) only this variant
  // const { searchParams } = new URL(request.url)

  const searchParams = request.nextUrl.searchParams
  const key = searchParams.get('key')

  if (!key || key !== process.env.API_ROUTES_SECRET) {
    return NextResponse.json({ message: 'You are not authenticated to call to this API' })
  }

  return NextResponse.json(USERS)
}
