import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "@/lib/resume";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 }
      );
    }

    // Parse request body
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    // List of models to try in order (primary -> backup)
    const models = [
      "stepfun/step-3.5-flash:free",           // Primary model
      "arcee-ai/trinity-large-preview:free",             // Backup model 1
      "upstage/solar-pro-3:free", // Backup model 2
      "upstage/solar-pro-3:free", // Backup model 2
      "openrouter/auto", // Backup model 2
    ];

    let lastError = null;

    // Try each model in order until one works
    for (const model of models) {
      try {
        console.log(`🔄 Trying model: ${model}`);
        
        const response = await fetch(OPENROUTER_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            "X-Title": "John Neil Morales Portfolio",
          },
          body: JSON.stringify({
            model: model,
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: message,
              },
            ],
            temperature: 0.3,
            max_tokens: 400,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error(`❌ Model ${model} failed:`, errorData);
          lastError = errorData;
          continue; // Try next model
        }

        const data = await response.json();
        const aiResponse = data.choices?.[0]?.message?.content;

        if (!aiResponse) {
          console.error(`❌ Model ${model} returned no content`);
          lastError = { error: "No response from AI" };
          continue; // Try next model
        }

        // Success! Return the response
        console.log(`✅ Success with model: ${model}`);
        console.log(aiResponse);
        
        return NextResponse.json({ response: aiResponse });

      } catch (error) {
        console.error(`❌ Model ${model} threw error:`, error);
        lastError = error;
        continue; // Try next model
      }
    }

    // All models failed
    console.error("❌ All models failed. Last error:", lastError);
    return NextResponse.json(
      { error: "All AI models are currently unavailable. Please try again later." },
      { status: 503 }
    );
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
