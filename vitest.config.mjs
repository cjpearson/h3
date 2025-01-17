import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    typecheck: { enabled: !process.argv.includes("bench") },
    coverage: {
      include: ["src/**/*.ts"],
    },
  },
});
