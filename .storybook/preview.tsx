import type { Preview } from "@storybook/react-webpack5";
import { ConfigProvider } from "../src/index";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const preview: Preview = {
	decorators: [
		(Story) => (
			<ConfigProvider>
				<Story />
			</ConfigProvider>
		),
	],
	tags: ["autodocs"], // Enables auto-generated docs globally
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			autodocs: "tag", // Activate autodocs
		},
	},
};

export default preview;
