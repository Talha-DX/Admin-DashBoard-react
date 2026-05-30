import React from 'react';
import { Clock, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Error503 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="text-[120px] font-bold text-amber-100 select-none">503</div>
        
        <h1 className="text-4xl font-bold text-gray-800 -mt-8 mb-3">Service Unavailable</h1>
        <p className="text-gray-600 text-lg mb-8">
          The server is temporarily unable to handle your request.<br />
          Please try again in a few moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-2xl hover:bg-amber-700 transition font-medium"
          >
            <Clock size={20} />
            Refresh Page
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 border border-gray-300 px-8 py-4 rounded-2xl hover:bg-gray-50 transition"
          >
            <Home size={20} />
            Return Home
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          Error Code: 503 • Service Temporarily Unavailable
        </div>
      </div>
    </div>
  );
};

export default Error503;