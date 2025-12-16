// pages/api/ask.js
// This API route receives a question and returns a fake AI answer.
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { question } = req.body;
    // For demo, just echo the question
    res.status(200).json({ answer: `Sorry, I am just a demo. You asked: "${question}"` });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
