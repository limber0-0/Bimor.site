import React from 'react';
import { Code2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeDisplayProps {
  code: string;
  preview: string;
}

export function CodeDisplay({ code, preview }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-100">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-blue-800">
          <Code2 className="h-6 w-6 text-blue-500" />
          Preview
        </h3>
        <p className="text-gray-700 leading-relaxed">{preview}</p>
      </div>
      
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
          <span className="text-gray-400 text-sm font-medium">Generated Code</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-gray-100 text-sm">{code}</code>
        </pre>
      </div>
    </div>
  );
}