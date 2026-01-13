## 项目规则（kysonui）

### 运行环境
- Node.js：使用仓库根目录 `.nvmrc` 指定的版本（当前为 v22.18.0）。
- 包管理器：pnpm 8.15.1（由根 `package.json#packageManager` 固定）。

### 本地开发（仓库根目录执行）
- 安装依赖：`pnpm install`
- 类型检查：`pnpm run typecheck`
- 启动组件演示：`pnpm run dev`
- 文档开发：`pnpm run docs:dev`
- 文档构建：`pnpm run docs:build`

### CI（GitHub Actions）约定
- Node 版本来源：`actions/setup-node` 使用 `node-version-file: .nvmrc`。
- pnpm 版本来源：`pnpm/action-setup@v4` 固定 8.15.1。
- 依赖安装：统一使用 `pnpm install --frozen-lockfile`，确保锁文件可复现。
- 部署密钥：使用 `secrets.OUI_TOKEN` 作为 `actions-gh-pages` 的 `github_token`。

### 提交与产物
- 锁文件：必须提交 `pnpm-lock.yaml`。
- 文档产物：不提交 `packages/docs/.vitepress/dist`，由 CI 构建并发布。
