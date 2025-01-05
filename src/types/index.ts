export interface GeneratedProgram {
  prompt: string;
  code: string;
  preview?: string;
}

export interface OpenAIResponse {
  code: string;
  preview: string;
}

export interface APIKeyContextType {
  apiKey: string;
  setApiKey: (key: string) => void;
}