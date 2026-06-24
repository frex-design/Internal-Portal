// 注文書管理システム認証API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const ORDER_PASSWORD = process.env.ORDER_PASSWORD || 'masahiro5175';

  if (password === ORDER_PASSWORD) {
    // 認証成功
    return res.status(200).json({ success: true, url: 'https://order-contract.vercel.app/admin/index.html' });
  } else {
    return res.status(401).json({ success: false, error: 'Invalid password' });
  }
}
