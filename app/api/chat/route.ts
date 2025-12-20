import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GROQ_API_KEY;
        console.log("Groq API Key exists:", !!apiKey);

        if (!apiKey) {
            console.error("Error: GROQ_API_KEY is missing");
            return NextResponse.json(
                { error: "Groq API key not configured. Please add GROQ_API_KEY to .env.local" },
                { status: 500 }
            );
        }

        const groq = new Groq({ apiKey });

        const body = await req.json();
        const { messages } = body;
        console.log("Received messages count:", messages?.length);

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: "Invalid message format" },
                { status: 400 }
            );
        }

        // Format messages for Groq (similar to OpenAI format)
        const formattedMessages = [
            {
                role: "system" as const,
                content: "Kamu adalah Asisten Neira, chatbot ramah untuk website KKN Neira Basudara di Banda Neira, Maluku. Jawab dengan bahasa Indonesia yang sopan dan informatif. Berikan informasi tentang KKN, Banda Neira, dan kegiatan komunitas."
            },
            ...messages.map((m: any) => ({
                role: m.role === 'user' ? 'user' as const : 'assistant' as const,
                content: m.content
            }))
        ];

        console.log("Sending to Groq...");

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: formattedMessages,
            temperature: 0.7,
            max_tokens: 1024,
        });

        const text = completion.choices[0]?.message?.content || "Maaf, tidak ada respons dari AI.";
        console.log("Received response from Groq");

        return NextResponse.json({ role: 'assistant', content: text });

    } catch (error: any) {
        console.error("Detailed Error in chat API:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
