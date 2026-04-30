// セッション検証API
export default async function handler(req, res) {
  const cookies = req.headers.cookie || '';
  const hasAuth = cookies.includes('portal_auth=authenticated');

  if (hasAuth) {
    return res.status(200).json({ authenticated: true });
  } else {
    return res.status(401).json({ authenticated: false });
  }
}
