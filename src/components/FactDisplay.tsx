import React from 'react';

interface FactDisplayProps {
  fact: string | null;
  isLoading: boolean;
}

const FactDisplay: React.FC<FactDisplayProps> = ({ fact, isLoading }) => {
  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6 transition-all duration-300 
      border border-gray-100 hover:shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Did You Know?</h2>
      <div className="min-h-24 flex items-center justify-center">
        {isLoading ? (
          <p className="text-gray-400 italic animate-pulse">Loading amazing fact...</p>
        ) : fact ? (
          <p className="text-gray-700 leading-relaxed animate-fadeIn">
            {fact}
          </p>
        ) : (
          <p className="text-gray-400 italic">Click the button to get a random fact!</p>
        )}
      </div>
    </div>
  );
};

export default FactDisplay;