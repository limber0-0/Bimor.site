import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useAPIKey } from '../context/APIKeyContext';
import { generateProgram } from '../utils/openai';
import type { OpenAIResponse } from '../types';

interface PromptInputProps {
  onGenerate: (response: OpenAIResponse) => void;
  setError: (error: string | null) => void;
}

export function PromptInput({ onGenerate, setError }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { apiKey } = useAPIKey();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      setError('Please enter your OpenAI API key first');
      return;
    }
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await generateProgram(apiKey, prompt);
      const data = await response.json();
      const result = JSON.parse(data.choices[0].message.content);
      onGenerate(result);
      setPrompt('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate program. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the program you want to generate..."
          className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32 shadow-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-3 bottom-3 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-colors shadow-sm"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </button>
      </div>
    </form>
  );
}