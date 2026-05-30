import React, { useState } from 'react';
import { Sparkles, Download } from 'lucide-react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setImageUrl("https://picsum.photos/id/1015/800/600"); // Mock image
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Image Generator</h1>
      <p className="text-gray-600 mb-8">Create stunning images from text prompts</p>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="A futuristic city skyline at sunset with flying cars..."
          />

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl hover:brightness-105 transition flex items-center justify-center gap-2 text-lg"
          >
            <Sparkles size={24} />
            Generate Image
          </button>

          <div className="mt-8">
            {loading ? (
              <div className="h-[500px] bg-gray-100 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full mx-auto"></div>
                  <p className="mt-4 text-gray-500">Generating your image...</p>
                </div>
              </div>
            ) : imageUrl ? (
              <div className="relative rounded-3xl overflow-hidden">
                <img src={imageUrl} alt="Generated" className="w-full rounded-3xl" />
                <button className="absolute bottom-6 right-6 bg-white px-6 py-3 rounded-2xl shadow flex items-center gap-2 hover:bg-gray-100">
                  <Download size={20} /> Download
                </button>
              </div>
            ) : (
              <div className="h-[500px] border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
                Generated image will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;