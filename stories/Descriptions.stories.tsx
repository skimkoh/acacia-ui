import type { Meta, StoryObj } from "@storybook/react";
import Descriptions from "../src/components/ui/Descriptions/Descriptions";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Descriptions,
	parameters: {
		docs: {
			description: {
				component:
					"This description wraps [Ant Design Descriptions](https://ant.design/components/description/) and supports all the same props.",
			},
		},
	},
	title: "Components/Descriptions",
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Descriptions>;

export default meta;

type Story = StoryObj<typeof Descriptions>;

export const BasicUsage: Story = {
	args: {
		title: "User Info",
		items: [
			{
				key: "1",
				label: "UserName",
				children: "UserName",
			},
			{
				key: "2",
				label: "Telephone",
				children: "Telephone",
			},
			{
				key: "3",
				label: "Live",
				children: "Live",
			},
			{
				key: "4",
				label: "Remark",
				children: "Remark",
			},
			{
				key: "5",
				label: "Address",
				children: "Address",
			},
		],
	},
};
