const SYSTEM_PROMPT = `You are an expert programmer. When given a request, you must:
1. Create production-ready, well-structured code
2. Return ONLY a JSON response with two fields:
   - code: The complete implementation code
   - preview: A brief preview/description of what the code does
3. NO explanations or other text - ONLY the JSON response
4. Use modern best practices and patterns
5. Include proper error handling
6. Make code modular and reusable`;

export async function generateProgram(apiKey: string, userPrompt: string): Promise<Response> {
  const optimizedPrompt = userPrompt.toLowerCase().replace(/\s+/g, '_');

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: optimizedPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to generate program');
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error('Failed to connect to OpenAI API');
  }
}