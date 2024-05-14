// /pages/api/save-email.ts
import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface EmailData {
    email: string;
}

export async function POST(req: Request) {
    const data: EmailData = await req.json();

    if (!data.email || !isValidEmail(data.email)) {
        return NextResponse.json({ error: 'Missing or invalid email field' }, { status: 400 });
    }

    try {

        await sql `INSERT INTO subscribers (email) VALUES (${data.email})`

        return NextResponse.json({ message: 'Email saved successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error saving email:', error);
        return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
    }
}

function isValidEmail(email: string) {
    return EMAIL_REGEX.test(email);
}