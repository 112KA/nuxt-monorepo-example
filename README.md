# nuxt-monorepo-example

## Usage

### Docker開発環境構築
例) [Dev Container on WSL2で開発環境構築](https://zenn.dev/ykdev/articles/14a108290e24f9)

### .npmrcの設定
1. .npmrc.orgを.npmrcにrename
2. .npmrcの`%%PERSONAL_ACCESS_TOKEN%%`を自身のGitHub personal access tokenに置換

### setupコマンド実行
```bash
// package install
$ pnpm i

// 初回build
$ pnpm build

// 変更監視
$ pnpm watch
```