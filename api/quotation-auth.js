// 見積書/請求書管理システム認証API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const QUOTATION_PASSWORD = process.env.QUOTATION_PASSWORD || 'masahiro5175';

  if (password === QUOTATION_PASSWORD) {
    // 認証成功
    return res.status(200).json({ success: true, url: 'https://frex-design-quotation-invoice.vercel.app/' });
  } else {
    return res.status(401).json({ success: false, error: 'Invalid password' });
  }
}
