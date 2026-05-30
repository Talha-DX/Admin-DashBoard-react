import React, { useState } from 'react';
import { Play, Download } from 'lucide-react';

const VideoGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setVideoReady(true);
    }, 3500);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Video Generator</h1>
      <p className="text-gray-600 mb-8">Create short videos from text descriptions</p>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-8">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          className="w-full border border-gray-300 rounded-2xl p-5"
          placeholder="A peaceful mountain landscape with flowing river at sunrise..."
        />

        <button
          onClick={handleGenerate}
          disabled={generating || !prompt}
          className="mt-6 w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-5 rounded-2xl text-lg font-medium"
        >
          {generating ? "Generating Video..." : "Generate Video"}
        </button>

        <div className="mt-10">
          {generating ? (
            <div className="aspect-video bg-black rounded-3xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="animate-pulse">🎥</div>
                <p>Creating your video... (This may take a few moments)</p>
              </div>
            </div>
          ) : videoReady ? (
            <div className="aspect-video bg-black rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="text-white text-center">
                <Play size={60} className="mx-auto mb-4 opacity-80" />
                <p className="text-xl">Video Ready</p>
                <button className="mt-6 bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
                  <Download size={20} /> Download Video
                </button>
              </div>
            </div>
          ) : (
            <div className="aspect-video border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
              Your generated video will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoGenerator;