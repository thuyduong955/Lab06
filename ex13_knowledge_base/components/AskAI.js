// components/AskAI.js
// This is a floating widget to ask the "AI" a question.
// It calls the /api/ask route and shows the answer.
import React, { useState } from 'react';

export default function AskAI() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleAsk(e) {
    e.preventDefault();
    setLoading(true);
    setAnswer('');
    // Call the API route
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 30,
      right: 30,
      width: 300,
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: 16,
      zIndex: 1000
    }}>
      <form onSubmit={handleAsk}>
        <label>Ask AI:</label>
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          style={{ width: '100%', margin: '8px 0' }}
        />
        <button type="submit" disabled={loading || !question}>
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      {answer && (
        <div style={{ marginTop: 10, color: '#333' }}><b>AI:</b> {answer}</div>
      )}
    </div>
  );
}
