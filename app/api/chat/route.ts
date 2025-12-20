import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        console.log("API Key exists:", !!apiKey); // Debug log

        if (!apiKey) {
            console.error("Error: GEMINI_API_KEY is missing");
            return NextResponse.json(
                { error: "API key not configured" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const body = await req.json();
        const { messages } = body;
        console.log("Received messages count:", messages?.length); // Debug log

        // Convert chat history to Gemini format if needed, 
        // but for simple one-off or context-aware chat, we can just send the last prompt 
        // or construct a history. For this iteration, let's keep it simple:
        // We'll feed the history appropriately. 
        // Gemini expects parts: [{text: "..."}] for user/model roles.

        // Basic validation
        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: "Invalid message format" },
                { status: 400 }
            );
        }

        const lastMessage = messages[messages.length - 1];
        let history = messages.slice(0, -1).map((m: any) => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }],
        }));

        // Gemini requires the first message in history to be from 'user'.
        // If the first message is from 'model' (e.g. initial greeting), remove it.
        if (history.length > 0 && history[0].role === 'model') {
            history = history.slice(1);
        }

        console.log("Starting chat with history length:", history.length); // Debug log

        const chat = model.startChat({
            history: history,
        });

        console.log("Sending message to Gemini...");
        const result = await chat.sendMessage(lastMessage.content);
        const response = await result.response;
        const text = response.text();
        console.log("Received response from Gemini");

        return NextResponse.json({ role: 'assistant', content: text });

    } catch (error: any) {
        console.error("Detailed Error in chat API:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
