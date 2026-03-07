// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import { name } from "./package.json";

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true, // generates a single types entry point
		}),
	],

	build: {
		lib: {
			entry: resolve(__dirname, "src/index.tsx"), // your entryPath equivalent
			name,
			formats: ["es", "umd"],
			fileName: (format) => `index.${format}.js`,
		},

		rollupOptions: {
			external: ["react", "react-dom", "antd", "antd-style"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"prop-types": "PropTypes",
					antd: "antd",
					"antd-style": "antd-style",
				},
				// inline all assets (fonts, images) — equivalent to asset/inline
				assetFileNames: "assets/[name][extname]",
			},
		},

		// inline fonts/images as base64, same as webpack asset/inline
		assetsInlineLimit: 100_000_000,
	},

	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
	},
});
