import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { prompt } from '../service/openai/prompt';
 
type ResponseData = {
    message: string
}

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});
 
export async function POST(request: Request) {
    const { base64 } = await request.json()
    const response = await openai.chat.completions.create({
        model: 'gpt-4-vision-preview',
        messages: [
          {
            role: 'system',
            content: prompt
          },
          {
            role: 'user',
            content:[
              { 
                type: 'image_url',
                image_url: {
                  url: base64
                }
              }
            ]
          },
        ],
        temperature: 1,
        max_tokens: 800,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stream: true
    });
    const stream = OpenAIStream(response)
 
  return new StreamingTextResponse(stream)
}