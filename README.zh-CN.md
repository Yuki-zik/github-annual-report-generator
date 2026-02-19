<div align="center">

[English](README.md) | [简体中文](README.zh-CN.md)

</div>

# GitHub Annual Report Generator (GitHub 年度报告生成器)

一个自动生成个人 GitHub 年度报告的工具，具备 365 天滚动统计、AI 智能摘要和精美可视化功能。

<p align="center">
  <img src="assets/github-annual-report.png" alt="GitHub Annual Report Example" width="800">
</p>

## 功能特性

- 📊 **滚动统计**：默认跟踪最近 365 天的活动，完美展现近期动态。
- 🤖 **AI 摘要**：使用 OpenAI 分析您的活动并生成个性化年度回顾（带有自动回退规则）。
- 🖼️ **高质量资产**：生成视网膜级高清 PNG 和 GitHub 兼容 SVG 报告。
- ⚡ **完全自动化**：通过 GitHub Actions 每周自动运行，保持个人资料常新。

## 快速开始

### 1. 创建仓库
点击 **[使用此模板](https://github.com/new?template_name=github-annual-report-generator&template_owner=Yuki-zik)** 基于此模板创建一个新仓库。

### 2. 配置 Secrets
前往仓库的 `Settings > Secrets and variables > Actions` 并添加以下 Secrets：

| Secret 名称 | 是否必须 | 描述 |
|---|---|---|
| `GH_STATS_TOKEN` | **是** | GitHub 个人访问令牌 (PAT)。权限范围：`read:user`, `repo`, `read:org`。 |
| `OPENAI_API_KEY` | 否 | OpenAI API Key。用于生成 AI 摘要。 |
| `OPENAI_BASE_URL` | 否 | OpenAI 兼容 API 的自定义 Base URL (默认：`https://api.openai.com/v1`)。 |
| `OPENAI_MODEL` | 否 | 自定义模型名称 (默认：`gpt-4o-mini`)。 |

### 3. 运行工作流
1. 进入 **Actions** 标签页。
2. 选择 **yearly report** 工作流。
3. 点击 **Run workflow** 按钮（或等待每周定时运行）。

### 4. 展示在个人主页
工作流运行成功后，会将 `assets/` 目录提交到您的仓库。您可以将报告嵌入到您的个人资料 `README.md` 中：

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

- **计划任务**：编辑 `.github/workflows/yearly-report.yml` 修改 Cron 计划表达式。
- **布局样式**：修改 `scripts/year-report/design-spec.mjs` 和 `report-html.mjs` 调整样式。

## 更多详情
请参阅 [PROJECT_GUIDE.md](PROJECT_GUIDE.md) 获取更详细的项目补充说明（开发与运维指南）。

## 致谢

- 设计灵感来源于 Green-Wall: https://github.com/Codennnn/Green-Wall
