import type { StorybookConfig } from "@storybook/react-webpack5";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
	stories: ["../stories/*.mdx", "../stories/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-onboarding",
		{
			name: "@storybook/addon-docs",
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
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
