import React from 'react';
import { RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Error500 = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
          <span className="text-6xl">⚠️</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Server Error</h1>
        <p className="text-gray-600 text-lg mb-8">
          Something went wrong on our end. Our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleRetry}
            className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700 transition font-medium"
          >
            <RefreshCw size={20} />
            Retry
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 border border-gray-300 px-8 py-4 rounded-2xl hover:bg-gray-50 transition"
          >
            <Home size={20} />
            Go to Dashboard
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          Error Code: 500 • Internal Server Error
        </div>
      </div>
    </div>
  );
};

export default Error500;