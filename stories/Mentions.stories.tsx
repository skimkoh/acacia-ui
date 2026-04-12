import type { Meta, StoryObj } from "@storybook/react";
import Mentions from "../src/components/ui/Mentions/Mentions";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Mentions,
	parameters: {
		docs: {
			description: {
				component:
					"This mentions wraps [Ant Design Mentions](https://ant.design/components/mentions/) and supports all the same props.",
			},
		},
	},
	title: "Components/Mentions",
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Mentions>;

export default meta;

type Story = StoryObj<typeof Mentions>;

export const BasicUsage: Story = {
	args: {
		style: { width: "100%" },
		placeholder: "Please enter @ to mention someone",
		options: [
			{
				value: "afc163",
				label: "afc163",
			},
			{
				value: "zombieJ",
				label: "zombieJ",
			},
			{
				value: "yesmeck",
				label: "yesmeck",
			},
		],
		defaultValue: "@afc163",
		autoSize: false,
	},
};
