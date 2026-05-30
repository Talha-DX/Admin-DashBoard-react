import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="text-[140px] font-bold text-blue-100 select-none">404</div>
        
        <h1 className="text-4xl font-bold text-gray-800 -mt-10 mb-3">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition font-medium"
          >
            <Home size={20} />
            Back to Dashboard
          </button>
          
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 border border-gray-300 px-8 py-4 rounded-2xl hover:bg-gray-50 transition"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          Error Code: 404 • Page Not Found
        </div>
      </div>
    </div>
  );
};

export default Error404;