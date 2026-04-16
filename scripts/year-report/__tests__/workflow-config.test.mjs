import { readFile } from "node:fs/promises"

import { describe, expect, test } from "vitest"

describe("yearly report workflow", () => {
    test("falls back to the repository-scoped GitHub token when GH_STATS_TOKEN is absent", async () => {
        const workflow = await readFile(new URL("../../../.github/workflows/yearly-report.yml", import.meta.url), "utf8")

        expect(workflow).toMatch(/GH_STATS_TOKEN:\s*\$\{\{\s*secrets\.GH_STATS_TOKEN\s*\|\|\s*github\.token\s*\}\}/)
    })

    test("installs the same Playwright version used by the package manifest", async () => {
        const [workflow, packageJson] = await Promise.all([
            readFile(new URL("../../../.github/workflows/yearly-report.yml", import.meta.url), "utf8"),
            readFile(new URL("../../../package.json", import.meta.url), "utf8"),
        ])

        const manifest = JSON.parse(packageJson)
        const playwrightVersion = manifest.devDependencies.playwright.replace(/^[^\d]*/, "")

        expect(workflow).toContain(`playwright@${playwrightVersion}`)
    })
})
