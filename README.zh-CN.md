<div align="center">

[English](README.md) | [简体中文](README.zh-CN.md)

</div>

# GitHub Annual Report Generator (GitHub 年度报告生成器)

一个本地生成个人 GitHub 年度报告的工具，具备 365 天滚动统计、AI 智能摘要和精美可视化功能。

<p align="center">
  <img src="assets/github-annual-report.png" alt="GitHub Annual Report Example" width="800">
</p>

## 功能特性

- 📊 **滚动统计**：默认跟踪最近 365 天的活动，完美展现近期动态。
- 🤖 **AI 摘要**：使用 OpenAI 分析您的活动并生成个性化年度回顾（带有自动回退规则）。
- 🖼️ **高质量资产**：生成视网膜级高清 PNG 和 GitHub 兼容 SVG 报告。
- 🧰 **本地优先**：仓库不内置 GitHub Actions 工作流，更适合作为开源分享模板。

## 快速开始

### 1. 克隆或使用模板
克隆本仓库，或点击 **[使用此模板](https://github.com/new?template_name=github-annual-report-generator&template_owner=Yuki-zik)** 创建自己的副本。

### 2. 配置环境变量
在 `.env` 文件或终端中设置以下环境变量：

| 变量名 | 是否必须 | 描述 |
|---|---|---|
| `GH_STATS_TOKEN` | 是 | GitHub 个人访问令牌 (PAT)。建议权限范围：`read:user`, `repo`, `read:org`。 |
| `GH_USERNAME` | 是 | 要生成报告的 GitHub 用户名。 |
| `OPENAI_API_KEY` | 否 | OpenAI API Key。用于生成 AI 摘要。 |
| `OPENAI_BASE_URL` | 否 | OpenAI 兼容 API 的自定义 Base URL (默认：`https://api.openai.com/v1`)。 |
| `OPENAI_MODEL` | 否 | 自定义模型名称 (默认：`gpt-4o-mini`)。 |

### 3. 生成资产

```bash
npm install
node scripts/year-report/generate-report.mjs
```

### 4. 展示在个人主页
生成完成后，可以将 `assets/` 中的报告嵌入到您的个人资料 `README.md` 中：

```markdown
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/github-annual-report.svg">
  <img alt="github-annual-report" src="./assets/github-annual-report.svg">
</picture>
```

查看 [examples/PROFILE_README.md](examples/PROFILE_README.md) 获取完整示例。

## 本地开发

1. 克隆仓库。
2. 安装依赖：`npm install`。
3. 在 `.env` 文件或终端中设置环境变量（`GH_STATS_TOKEN`, `GH_USERNAME`）。
4. 运行报告生成：
   ```bash
   node scripts/year-report/generate-report.mjs --dry-run
   ```
5. 运行测试：
   ```bash
   npm run test:all
   ```

## 自定义

- **布局样式**：修改 `scripts/year-report/design-spec.mjs` 和 `report-html.mjs` 调整样式。

## 更多详情
请参阅 [PROJECT_GUIDE.md](PROJECT_GUIDE.md) 获取更详细的项目补充说明（开发与运维指南）。

## 致谢

- 设计灵感来源于 Green-Wall: https://github.com/Codennnn/Green-Wall
