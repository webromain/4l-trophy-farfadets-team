import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

/* Les tests portent sur la logique et les données, pas sur le rendu : pas de DOM
   simulé. L'alias `@/` est le même que dans tsconfig.json. */
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
