import type { Meta, StoryObj } from "@storybook/react";
import Cascader from "../src/components/ui/Cascader/Cascader";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Cascader,
	parameters: {
		docs: {
			description: {
				component:
					"Cascader wraps [Ant Design Cascader](https://ant.design/components/cascader/) and supports all the same props.",
			},
		},
	},
	title: "Components/Cascader",
	tags: ["autodocs"],
} satisfies Meta<typeof Cascader>;

export default meta;

type Story = StoryObj<typeof Cascader>;

export const BasicUsage: Story = {
	args: {
		placeholder: "Please select",
		options: [
			{
				value: "zhejiang",
				label: "Zhejiang",
				children: [
					{
						value: "hangzhou",
						label: "Hangzhou",
					},
				],
			},
		],
	},
};

export const BasicWithDefaultValue: Story = {
	args: {
		placeholder: "Please select",
		defaultValue: ["zhejiang", "hangzhou"],
		options: [
			{
				value: "zhejiang",
				label: "Zhejiang",
				children: [
					{
						value: "hangzhou",
						label: "Hangzhou",
					},
				],
			},
		],
	},
};
