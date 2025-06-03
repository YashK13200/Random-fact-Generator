import React, { useState } from 'react';
import FactButton from './components/FactButton';
import FactDisplay from './components/FactDisplay';
import { fetchRandomFact } from './services/api';

function App() {
  const [fact, setFact] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetFact = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchRandomFact();
      setFact(data.fact);
    } catch (err) {
      setError('Failed to fetch a fact. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Random Fact Generator</h1>
        <p className="text-gray-600">Discover interesting facts with just a click!</p>
      </div>
      
      <FactDisplay fact={fact} isLoading={isLoading} />
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <div className="mt-8">
        <FactButton onClick={handleGetFact} isLoading={isLoading} />
      </div>
      
      <footer className="mt-auto pt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Fact Generator
      </footer>
    </div>
  );
}

export default App;