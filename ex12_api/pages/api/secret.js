// pages/api/secret.js
// This API route returns a secret message if authorized.
// The middleware checks the x-api-key header before this runs.
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Only allow GET for demo
    res.status(200).json({ secret: 'Next.js is cool' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
