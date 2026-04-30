# FD Portal（社内システムポータル）

株式会社フレックスデザインの社内システム統合ポータルサイト

## セキュリティ

### サーバーサイド認証

- パスワードはソースコードに含まれません
- 環境変数（Vercel）で管理
- Cookie ベースのセッション認証

### 2段階認証

1. **ポータル入口**：全社員用パスワード（`PORTAL_PASSWORD`）
2. **キャッシュフロー**：経営陣のみのパスワード（`CF_PASSWORD`）

## デプロイ

### Vercel にデプロイ

```bash
# Vercel CLI インストール（初回のみ）
npm i -g vercel

# デプロイ
vercel

# 本番環境
vercel --prod
```

### 環境変数の設定

Vercel ダッシュボード → Settings → Environment Variables

```
PORTAL_PASSWORD = （全社員用パスワード）
CF_PASSWORD = （経営陣のみのパスワード）
```

## ローカル開発

```bash
# .env ファイルを作成
cp .env.example .env

# Vercel Dev で起動
vercel dev
```

## 構成

```
FD Portal/
├── api/
│   ├── auth.js      # ポータル認証API
│   ├── cf-auth.js   # キャッシュフロー認証API
│   ├── verify.js    # セッション検証API
│   └── logout.js    # ログアウトAPI
├── public/
│   └── index.html   # ポータルサイト本体
├── vercel.json      # Vercel設定
├── .env.example     # 環境変数サンプル
└── README.md
```

## パスワード変更

Vercel ダッシュボードで環境変数を変更後、再デプロイ不要（即座に反映）

---

© 2022–2026 株式会社フレックスデザイン
