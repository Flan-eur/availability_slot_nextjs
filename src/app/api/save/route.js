import { NextResponse } from "next/server";
import redis from "@/app/lib/redis"; // Ensure redis is only used on the server

export async function POST(req) {
    try {
        const { user_id, availability } = await req.json();

        await redis.set(user_id, JSON.stringify(availability));
        return NextResponse.json({ message: `Saved key: ${user_id}` }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const key = searchParams.get("key");
        if (!key) {
            return NextResponse.json({ error: "Key is required" }, { status: 400 });
        }

        const value = await redis.get(key);

        return NextResponse.json({ key, value }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
