import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		clearMocks: true,
		coverage: {
			all: true,
			exclude: ["dist"],
			include: ["src"],
			reporter: ["html", "lcov"],
		},
		exclude: ["dist", "node_modules"],
		globals: true,
		environment: "jsdom",
		setupFiles: ["console-fail-test/setup", "./setupTests.ts"],
	},
});
