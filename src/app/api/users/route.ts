import connectToDb from '@/dbConfig/dbConfig'
import { NextRequest, NextResponse } from 'next/server'



connectToDb()

export async function GET(request: NextRequest) {
    try {

        return NextResponse.json({ message: 'User Data fetched successfully', status: true }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 404 })
    }
}

export async function POST(request: NextRequest) {
    try {

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 404 })
    }
}

