// ポータル認証API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const PORTAL_PASSWORD = process.env.PORTAL_PASSWORD || 'frex2022';

  if (password === PORTAL_PASSWORD) {
    // 認証成功 - セッションCookieを設定
    res.setHeader('Set-Cookie', `portal_auth=authenticated; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`);
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, error: 'Invalid password' });
  }
}
