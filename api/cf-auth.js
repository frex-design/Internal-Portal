// キャッシュフロー認証API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const CF_PASSWORD = process.env.CF_PASSWORD || 'frex@cf';

  if (password === CF_PASSWORD) {
    // 認証成功
    return res.status(200).json({ success: true, url: 'https://frex-design.github.io/cashflow/' });
  } else {
    return res.status(401).json({ success: false, error: 'Invalid password' });
  }
}
