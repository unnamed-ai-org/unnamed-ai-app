import { vertex } from '@ai-sdk/google-vertex';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: vertex('gemini-2.0-flash-001'),
    messages,
  });

  return result.toDataStreamResponse();
}
