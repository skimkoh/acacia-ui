import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
	stories: ["../stories/*.mdx", "../stories/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-onboarding",
		"@storybook/addon-docs",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},

	typescript: {
		reactDocgen: "react-docgen-typescript", // better TS support
	},
};
export default config;
