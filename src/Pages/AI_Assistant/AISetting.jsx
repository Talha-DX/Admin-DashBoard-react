import React, { useState } from 'react';

const AISettings = () => {
  const [settings, setSettings] = useState({
    model: 'grok-beta',
    temperature: 0.7,
    maxTokens: 2048,
    apiKey: '',
  });

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">AI Settings</h1>

      <div className="max-w-2xl bg-white rounded-3xl shadow-sm p-8">
        <h2 className="text-xl font-semibold mb-6">Model Configuration</h2>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium mb-2">Default AI Model</label>
            <select
              value={settings.model}
              onChange={(e) => setSettings({...settings, model: e.target.value})}
              className="w-full p-4 border border-gray-300 rounded-2xl"
            >
              <option value="grok-beta">Grok Beta (xAI)</option>
              <option value="gpt-4o">GPT-4o</option>
              <option value="claude-3">Claude 3.5 Sonnet</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Creativity (Temperature)</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.temperature}
              onChange={(e) => setSettings({...settings, temperature: parseFloat(e.target.value)})}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Precise</span>
              <span>Creative</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Max Tokens</label>
            <input
              type="number"
              value={settings.maxTokens}
              onChange={(e) => setSettings({...settings, maxTokens: parseInt(e.target.value)})}
              className="w-full p-4 border border-gray-300 rounded-2xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">API Key (Optional)</label>
            <input
              type="password"
              placeholder="Enter your API key"
              className="w-full p-4 border border-gray-300 rounded-2xl"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-10 w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 text-lg"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default AISettings;