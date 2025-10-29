# Cloudflare Static Resume SPEC

## 目的
- VisualCV依存を排し、メンテ可能な静的レジュメサイトを Cloudflare で安価に提供する。
- モダンで政策的にも中立なスタック（Next.js を避ける）で、将来の拡張余地を確保する。

## スコープと前提
- 単一ページのレジュメ/ポートフォリオを想定。将来的に多言語化や導線追加を行える設計にする。
- 独自ドメインを Cloudflare Registrar もしくは既存レジストラから委譲する前提。
- ローカル環境は macOS / Bun ベース。

## 推奨アーキテクチャ
### 技術スタック
- **Astro + Islands Architecture**: ビルド時に静的 HTML を生成しつつ、必要箇所のみ Svelte/React/Vue 等を動的注入可能。Next.js を避けつつ最新のメタフレームワークとして採用。
- **UnoCSS + Tailwind プリセット**: クラスユーティリティを柔軟に組み合わせ、アトミックなスタイル管理を行う。
- **Content Collections (Astro)**: レジュメ情報を `src/content/resume.mdx` に構造化。YAML Frontmatter でプロフィールや経歴を管理し、再利用性を高める。
- **Cloudflare Pages**: Git push 連動で自動ビルド・デプロイ。無料枠で十分なトラフィックを賄える。

### リポジトリ構成 (例)
```
.
├── astro.config.mjs
├── package.json
├── bun.lockb
├── public/           # favicon、OGP画像、PDF版レジュメ
├── src/
│   ├── components/   # ヒーロー/タイムライン等のIsland
│   ├── content/      # resume.mdx, works/*.md
│   ├── layouts/      # LayoutResume.astro
│   └── pages/
│       └── index.astro
└── tests/
    └── visual/       # Playwright screenshot regression
```

### ビルド & デプロイフロー
1. `bun install` で依存解決。
2. `bun run dev` でローカルプレビュー (Astro Dev Server)。
3. `bun run build` により静的アセット生成。
4. main ブランチへ push → Cloudflare Pages が `bun install && bun run build` を実行し自動公開。Pages のビルド環境で `BUN_VERSION=1.1.x` を設定し Bun ランタイムを有効化。
5. プレビュー環境: Pull Request ごとに自動 URL 発行。

### 運用・設定
- **DNS**: `resume.<domain>` を Cloudflare Pages の cname に向ける。必要なら apex は `workers.dev` 経由ルーティング。
- **キャッシュ**: Cloudflare デフォルトキャッシュ (静的ファイル) を利用し、HTML は `Cache-Control: public, max-age=300` 程度で更新反映を確保。
- **フォーム対応**: 必要になった場合は Cloudflare Workers + KV/Email Routing で軽量実装。
- **CI**: GitHub Actions で `bun run lint`, `bun test` を実行し、Pages ビルド前に品質チェック。Bun 用の `oven-sh/setup-bun` アクションを使用。

## テスト戦略
- **ユニットテスト**: Vitest + Testing Library を使用し、コンポーネントの props/レンダリングの健全性を担保。
- **スナップショット/ビジュアル回帰**: Playwright で主要ブレークポイントのスクリーンショット比較を行い、Cloudflare Pages のプレビュー環境に差分をコメント投稿。
- **アクセシビリティ検証**: `bun run test:a11y` として Lighthouse CI/axe を組み込み、ARIA 属性やコントラストを継続的にチェック。

## 代替案比較
| サービス | 技術スタック例 | コスト感 | 利点 | 注意点 |
|----------|----------------|----------|------|--------|
| **Cloudflare Pages (推奨)** | Astro / SvelteKit (SSG) | 無料枠 500ビルド/月, 帯域無料 | Edge配信、PRプレビュー、Functions併用可 | ビルド時間が長い場合はキュー遅延 |
| **Netlify** | Eleventy / Astro | 無料枠 300ビルド/月 | 満足なフォーム/FaaS機能、柔軟なプラグイン | 同時ビルド制限、将来的な従量課金 |
| **GitHub Pages + Actions** | Astro 静的出力 | 無料 | GitHubのみで完結、履歴管理容易 | グローバルCDN性能はCloudflareほど高速ではない |
| **Vercel Static Hosting** | Astro / Fresh | Hobby無料 | 次世代機能 (Edge Config, OG image) | Next.js色が強く、政治的に避けたい要件と乖離 |
| **Cloudflare R2 + Worker** | 任意静的出力 | 格安ストレージ + リクエスト課金 | 完全S3互換、柔軟 | 管理がやや複雑、追加ロジック要 |


## リスクと対応方針
- **ビルド時間の最適化**: 画像最適化やMDX変換が重い場合、CIでのプリプロセスや `astro-icon` 等のキャッシュを導入。
- **多言語展開**: Astro の i18n 機能や Content Collections のローカライズサポートを検証し、言語別フォルダで運用。
- **デザイン差分**: Tailwind 設計の過剰化を避けるため、テーマトークンを `src/styles/tokens.css` に集約。

## 次ステップ
1. `bun create astro@latest` でテンプレート生成 (`minimal` + `TypeScript`)。
2. Content Collections のスキーマ定義を設計し、レジュメデータを MDX 化。
3. GitHub リポジトリを Cloudflare Pages と連携し、ビルドコマンドを `bun run build` に設定。
4. ドメインを Pages プロジェクトに接続し、HTTPS 有効化を確認。
