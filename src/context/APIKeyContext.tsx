import React, { createContext, useContext, useState } from 'react';
import { APIKeyContextType } from '../types';

const APIKeyContext = createContext<APIKeyContextType | undefined>(undefined);

export function APIKeyProvider({ children }: { children: React.ReactNode }) {
  const [apiKey, setApiKey] = useState('');

  return (
    <APIKeyContext.Provider value={{ apiKey, setApiKey }}>
      {children}
    </APIKeyContext.Provider>
  );
}

export function useAPIKey() {
  const context = useContext(APIKeyContext);
  if (context === undefined) {
    throw new Error('useAPIKey must be used within an APIKeyProvider');
  }
  return context;
}