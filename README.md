# Voice Journal - 音声入力AI日記アプリ

## 宣言

- このリポジトリは、shadcn/ui, TailwindCSS, NestJS, FastAPIについて学ぶために、なるべく手作業で実装します。
- AIによるコーディング支援は、このREADME作成と、コードレビューのみに限定します。

## コンセプト

音声で日記を録音すると、AIが自動で文字起こし・感情分析・要約を行い、感情の推移をダッシュボードで可視化するWebアプリケーション。

---

## アーキテクチャ

```
┌─────────────────────────────────────────────────┐
│  Frontend: React + shadcn/ui + TailwindCSS      │
│  - 音声録音UI                                    │
│  - 日記一覧・詳細表示                             │
│  - 感情ダッシュボード（Recharts）                  │
│  - Apollo Client（GraphQL通信）                   │
└──────────────────┬──────────────────────────────┘
                   │ GraphQL
                   ▼
┌─────────────────────────────────────────────────┐
│  Backend: NestJS (TypeScript)                   │
│  - GraphQL API（@nestjs/graphql + Apollo Server）│
│  - ユーザー認証（JWT）                            │
│  - 日記CRUD                                      │
│  - FastAPIへのリクエスト中継                       │
│  - PostgreSQL（TypeORM）                         │
└──────────────────┬──────────────────────────────┘
                   │ REST (内部通信)
                   ▼
┌─────────────────────────────────────────────────┐
│  ML Service: FastAPI (Python)                   │
│  - 音声文字起こし（OpenAI Whisper）               │
│  - 感情分析（transformers / カスタムモデル）       │
│  - テキスト要約（LLM API）                        │
└─────────────────────────────────────────────────┘
```

---

## 主要機能

### MVP（Phase 1〜3で完成）

- 音声録音 → 文字起こし → 日記として保存
- 日記の一覧表示・詳細表示・編集・削除
- AI感情分析（ポジティブ / ネガティブ / ニュートラル + スコア）
- AIテキスト要約（長い日記を3行に）
- 感情推移ダッシュボード（折れ線グラフ）

### 追加機能（余裕があれば）

- タグ・カテゴリ自動分類
- 月次/週次レポート自動生成
- 日記の検索（全文検索）
- PWA対応（モバイルでも使いやすく）

---

## 技術スタック詳細

| レイヤー   | 技術                          | 学習ポイント                                   |
| ---------- | ----------------------------- | ---------------------------------------------- |
| Frontend   | React, shadcn/ui, TailwindCSS | コンポーネント設計、UIライブラリ活用           |
| Frontend   | Apollo Client                 | GraphQLクエリ/ミューテーション、キャッシュ戦略 |
| Frontend   | Recharts                      | データ可視化                                   |
| Backend    | NestJS                        | モジュール設計、DI、デコレータ、Guard          |
| Backend    | @nestjs/graphql               | Schema-first vs Code-first、Resolver設計       |
| Backend    | TypeORM + PostgreSQL          | エンティティ設計、マイグレーション             |
| Backend    | Passport + JWT                | 認証・認可                                     |
| ML Service | FastAPI                       | 非同期API、型ヒント、自動ドキュメント          |
| ML Service | OpenAI Whisper                | 音声文字起こしパイプライン                     |
| ML Service | transformers / LLM API        | 感情分析・要約                                 |
| Infra      | Docker Compose                | ローカル開発環境の統一                         |

---

## 開発フェーズ（段階的に技術を習得）

### Phase 1: NestJS基礎 + GraphQL（1〜2週間）

**目標**: NestJSの基本構造とGraphQL APIの構築を習得

- NestJSプロジェクトのセットアップ
- GraphQLモジュール導入（Code-first approach）
- 日記のCRUD API作成（Query / Mutation / Resolver）
- TypeORM + PostgreSQL接続、Entityの定義
- Docker Composeでローカル環境構築（NestJS + PostgreSQL）

**この段階でのGitHub成果物**:

- 動作するGraphQL APIサーバー
- 日記のCRUD操作がGraphQL Playgroundで確認可能

---

### Phase 2: React フロントエンド（1〜2週間）

**目標**: shadcn/ui + TailwindCSSでUI構築、Apollo ClientでGraphQL通信

- React + Vite プロジェクトセットアップ
- shadcn/ui + TailwindCSS でUIコンポーネント構築
- Apollo Client導入、GraphQLクエリ/ミューテーション実装
- 日記一覧画面、日記作成画面、日記詳細画面
- テキスト入力で日記を作成できる状態まで

**この段階でのGitHub成果物**:

- フロントエンドとバックエンドが繋がった日記アプリ（テキスト版）

---

### Phase 3: FastAPI + AI機能（2〜3週間）

**目標**: FastAPIで音声処理・AI分析サービスを構築

- FastAPIプロジェクトのセットアップ
- Whisperによる音声文字起こしエンドポイント
- 感情分析エンドポイント（transformers or LLM API）
- テキスト要約エンドポイント
- NestJSからFastAPIへの通信実装（HttpModule）
- フロントエンドに音声録音機能を追加（MediaRecorder API）
- Docker ComposeにFastAPIサービスを追加

**この段階でのGitHub成果物**:

- 音声入力 → 文字起こし → 感情分析 → 保存の一連のフローが動作

---

### Phase 4: ダッシュボード + 仕上げ（1〜2週間）

**目標**: データ可視化、認証、コード品質の仕上げ

- Rechartsで感情推移グラフ（日別/週別/月別）
- JWT認証の実装（NestJS Passport）
- エラーハンドリングの統一
- READMEの整備（アーキテクチャ図、セットアップ手順、技術選定理由）
- テストの追加（NestJS: Jest、FastAPI: pytest）

**この段階でのGitHub成果物**:

- 完成したVoice Journalアプリ
- 充実したREADMEとドキュメント

---

## GitHubリポジトリ構成

```
voice-journal/
├── README.md              # プロジェクト概要、アーキテクチャ図、技術選定理由
├── docker-compose.yml     # ローカル開発環境
├── frontend/              # React + shadcn/ui + TailwindCSS
│   ├── src/
│   │   ├── components/    # UIコンポーネント
│   │   ├── graphql/       # クエリ・ミューテーション定義
│   │   ├── pages/         # 画面
│   │   └── hooks/         # カスタムフック
│   └── package.json
├── backend/               # NestJS
│   ├── src/
│   │   ├── journal/       # 日記モジュール
│   │   ├── auth/          # 認証モジュール
│   │   └── ml-client/     # FastAPI通信モジュール
│   └── package.json
├── ml-service/            # FastAPI
│   ├── app/
│   │   ├── routers/       # エンドポイント
│   │   ├── services/      # ビジネスロジック
│   │   └── models/        # Pydanticモデル
│   └── requirements.txt
└── docs/                  # 設計ドキュメント、ADR
    ├── architecture.md
    └── adr/               # Architecture Decision Records
```

---

## 転職面接でのアピールポイント

1. **技術選定の意図を語れる**: 「なぜGraphQLか」「なぜサービスを分離したか」をトレードオフ含めて説明可能
2. **音声認識PoCの実務経験との接続**: 業務で得た知見を個人開発で深化させたストーリー
3. **マイクロサービス設計の実践**: NestJS ↔ FastAPIのサービス間通信設計は実務直結
4. **フルスタック力の証明**: フロントからML基盤まで一人で構築できる実力の証明
5. **段階的な開発アプローチ**: GitのコミットログとPR履歴で「設計→実装→改善」のプロセスが可視化される
