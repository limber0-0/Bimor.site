import React, { useState } from 'react';
import { Wand2, Sparkles } from 'lucide-react';
import { APIKeyProvider } from './context/APIKeyContext';
import { APIKeyInput } from './components/APIKeyInput';
import { PromptInput } from './components/PromptInput';
import { CodeDisplay } from './components/CodeDisplay';
import type { OpenAIResponse } from './types';

function App() {
  const [generatedProgram, setGeneratedProgram] = useState<OpenAIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <APIKeyProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Wand2 className="h-10 w-10 text-blue-500" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                AI Program Generator
              </h1>
              <Sparkles className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-gray-600 text-lg">
              Transform your ideas into production-ready code instantly
            </p>
          </header>

          <div className="space-y-8 flex flex-col items-center">
            <APIKeyInput />
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg max-w-2xl w-full">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <PromptInput onGenerate={setGeneratedProgram} setError={setError} />

            {generatedProgram && (
              <CodeDisplay 
                code={generatedProgram.code} 
                preview={generatedProgram.preview} 
              />
            )}
          </div>
        </div>
      </div>
    </APIKeyProvider>
  );
}

export default App;