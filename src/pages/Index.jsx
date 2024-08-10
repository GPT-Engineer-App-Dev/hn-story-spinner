import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HackerNewsApp from '../components/HackerNewsApp';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">HN</h1>
          <HackerNewsApp />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Index;