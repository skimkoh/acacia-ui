import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Menu from "../src/components/ui/Menu/Menu";
const meta = {
	component: Menu,
	parameters: {
		docs: {
			description: {
				component:
					"This menu wraps [Ant Design Menu](https://ant.design/components/menu/) and supports all the same props.",
			},
		},
	},
	title: "Components/Menu",
	tags: ["autodocs"],
	args: {
		showRightBorder: true,
	},
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof Menu>;

export const BasicUsage: Story = {
	args: {
		style: { width: 400 },
		items: [
			{
				label: "Navigation One",
				key: "1",
			},
			{
				label: "Navigation Two",
				key: "2",
				disabled: true,
			},
			{
				label: "Navigation Three - Submenu",
				key: "3",
				children: [
					{
						type: "group",
						label: "Item 1",
						children: [
							{ label: "Option 1", key: "setting:1" },
							{ label: "Option 2", key: "setting:2" },
						],
					},
					{
						type: "group",
						label: "Item 2",
						children: [
							{ label: "Option 3", key: "setting:3" },
							{ label: "Option 4", key: "setting:4" },
						],
					},
				],
			},
			{
				key: "4",
				label: (
					<a
						href="https://www.google.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Navigation Four - Link
					</a>
				),
			},
		],
	},
};

export const BasicUsageHorizontal: Story = {
	args: {
		mode: "horizontal",
		items: [
			{
				label: "Navigation One",
				key: "1",
			},
			{
				label: "Navigation Two",
				key: "2",
				disabled: true,
			},
			{
				label: "Navigation Three - Submenu",
				key: "3",
				children: [
					{
						type: "group",
						label: "Item 1",
						children: [
							{ label: "Option 1", key: "setting:1" },
							{ label: "Option 2", key: "setting:2" },
						],
					},
					{
						type: "group",
						label: "Item 2",
						children: [
							{ label: "Option 3", key: "setting:3" },
							{ label: "Option 4", key: "setting:4" },
						],
					},
				],
			},
			{
				key: "4",
				label: (
					<a
						href="https://www.google.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Navigation Four - Link
					</a>
				),
			},
		],
	},
};

export const MenuSubMenu: Story = {
	args: {
		mode: "horizontal",
		items: [
			{
				label: "Submenu with groups",
				key: "3",
				children: [
					{
						type: "group",
						label: "Item 1",
						children: [
							{ label: "Option 1", key: "setting:1" },
							{ label: "Option 2", key: "setting:2" },
						],
					},
					{
						type: "group",
						label: "Item 2",
						children: [
							{ label: "Option 3", key: "setting:3" },
							{ label: "Option 4", key: "setting:4" },
						],
					},
				],
			},
			{
				label: "Submenu with items",
				key: "1",
				children: [
					{ label: "Option 1", key: "setting:1" },
					{ label: "Option 2", key: "setting:2" },
					{ label: "Option 3", key: "setting:3" },
				],
			},
		],
	},
};
