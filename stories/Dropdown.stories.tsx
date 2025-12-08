import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../src/components/ui/Dropdown/Dropdown";
import Button from "../src/components/ui/Button/Button";
import Space from "../src/components/ui/Space/Space";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { Typography } from "antd";

const meta = {
	component: Dropdown,
	parameters: {
		docs: {
			description: {
				component:
					"This dropdown wraps [Ant Design Dropdown](https://ant.design/components/dropdown/) and supports all the same props.",
			},
		},
	},
	title: "Components/Dropdown",
	tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const BasicUsage: Story = {
	args: {
		menu: {
			items: [
				{
					key: "1",
					label: "1st menu item",
				},
				{
					key: "2",
					label: "2nd menu item",
					disabled: true,
				},
				{
					key: "3",
					label: "danger item",
					danger: true,
				},
			],
		},
		children: <Typography.Link>Hover Me</Typography.Link>,
	},
};

export const BasicDropdownInButton = () => (
	<Space orientation="vertical">
		<Dropdown
			menu={{
				items: [
					{
						key: "1",
						label: "1st menu item",
					},
					{
						key: "2",
						label: "2nd menu item",
						disabled: true,
					},
					{
						key: "3",
						label: "danger item",
						danger: true,
					},
				],
			}}
			placement="bottomLeft"
			arrow
		>
			<Button>bottomLeft</Button>
		</Dropdown>
	</Space>
);
