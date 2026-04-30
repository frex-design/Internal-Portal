// ログアウトAPI
export default async function handler(req, res) {
  // Cookieを削除
  res.setHeader('Set-Cookie', `portal_auth=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`);
  return res.status(200).json({ success: true });
}
