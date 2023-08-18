'use client'
import { useState } from 'react';
import { useAi } from '@/store/AiStore';
export default function Page(){
    const store = useAi();
  const [businessName, setBusinessName] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

 debugger

  const generateBusinessName = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: prompt || 'A creative business name for a',
          max_tokens: 50,
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      setBusinessName(data.choices[0].text.trim());
    } catch (error) {
      console.error('Error generating business name:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="business-name-generator">
      <h2>AI-Powered Business Name Generator</h2>
      <p>Customize and generate creative business names:</p>
      <div className="configurations">
        <label htmlFor="prompt">Prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button onClick={generateBusinessName} disabled={loading}>
        Generate Name
      </button>
      {loading && <p>Generating...</p>}
      {businessName && <p className="generated-name">Generated Name: {businessName}</p>}
    </div>
  );
};


