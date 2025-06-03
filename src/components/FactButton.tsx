import React from 'react';
import { RefreshCw } from 'lucide-react';

interface FactButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const FactButton: React.FC<FactButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="group relative px-6 py-3 rounded-full bg-blue-500 text-white font-medium transition-all duration-300 
      hover:bg-blue-600 active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
      aria-label="Get Random Fact"
    >
      <span className={`flex items-center justify-center gap-2 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
        <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
        Get Random Fact
      </span>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
    </button>
  );
};

export default FactButton;