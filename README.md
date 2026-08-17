# FD Portal（社内システムポータル）

株式会社フレックスデザインの社内システム統合ポータル。

> 📖 **システム概要・収録システム一覧・パスワード・運用注意の詳細は、Obsidianノート `FD products/FD Portal.md` を参照（唯一の正式ドキュメント）。**
> このREADMEはリポジトリ用の最小手順のみ。

---

## 本番

- URL: https://internal-portal-umber.vercel.app
- ホスティング: Vercel（project `internal-portal` / team `frex-designs-projects`）
- **git連携なし。手動 `vercel --prod` を打つまで本番は変わらない。**
- GitHub Pagesは使用しない（`/api` の認証が動かないため。過去に廃止済み）。

## デプロイ

```bash
# このフォルダで編集後
vercel --prod --scope frex-designs-projects
```

反映確認は必ずライブURLを開いて目視すること。

## 認証（2段階）

- パスワードはソースに含めず Vercel Environment Variables で管理（変更は再デプロイ不要で即反映）。
  - `PORTAL_PASSWORD`（全社員用・ポータル入口）
  - `CF_PASSWORD`（経営陣用・キャッシュフロー）
- Cookieベースのセッション認証（`api/` のサーバーレス関数）。

## 構成

```
FD Portal/
├── api/            # auth.js / cf-auth.js / order-auth.js / quotation-auth.js / verify.js / logout.js
├── index.html      # ポータル本体（カード直書き）
├── package.json
├── .env.example
└── README.md
```

## ローカル開発

```bash
cp .env.example .env
vercel dev
```

---

© 2022–2026 株式会社フレックスデザイン
