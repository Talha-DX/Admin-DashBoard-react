import React, { useState } from 'react';
import { Send, Copy, RefreshCw } from 'lucide-react';

const TextGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setLoading(true);
    setTimeout(() => {
      setGeneratedText(`Here's a well-written response for your prompt:\n\n${prompt}\n\nThis is a sample AI-generated text. In a real application, this would come from an API like Grok, GPT, or Claude.`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Text Generator</h1>
      <p className="text-gray-600 mb-8">Generate high-quality text content using AI</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Enter Your Prompt</h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows="12"
            className="w-full border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a professional email for a meeting request..."
          ></textarea>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-4 w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            {loading ? <RefreshCw className="animate-spin" size={20} /> : <Send size={20} />}
            Generate Text
          </button>
        </div>

        {/* Output */}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Generated Output</h2>
            {generatedText && (
              <button className="text-blue-600 hover:text-blue-700">
                <Copy size={20} />
              </button>
            )}
          </div>
          <div className="min-h-[380px] bg-gray-50 rounded-2xl p-6 whitespace-pre-line text-gray-700">
            {generatedText || "Your generated text will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextGenerator;