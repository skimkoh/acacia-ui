import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "../src/components/ui/Tabs/Tabs";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Tabs,
	parameters: {
		docs: {
			description: {
				component:
					"Tabs wraps [Ant Design Tabs](https://ant.design/components/tabs/) and supports all the same props.",
			},
		},
	},
	title: "Components/Tabs",
	tags: ["autodocs"],
	argTypes: {
		type: { control: "select", defaultValue: "line" },
	},
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const BasicTabs: Story = {
	args: {
		items: [
			{
				key: "1",
				label: "Tab 1",
				children: "Content of Tab Pane 1",
			},
			{
				key: "2",
				label: "Tab 2",
				children: "Content of Tab Pane 2",
			},
			{
				key: "3",
				label: "Tab 3",
				children: "Content of Tab Pane 3",
			},
		],
	},
};

export const BasicTabsCardType: Story = {
	args: {
		items: [
			{
				key: "1",
				label: "Tab 1",
				children: "Content of Tab Pane 1",
			},
			{
				key: "2",
				label: "Tab 2",
				children: "Content of Tab Pane 2",
			},
			{
				key: "3",
				label: "Tab 3",
				children: "Content of Tab Pane 3",
			},
		],
		type: "card",
	},
};
