import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "../src/components/ui/Pagination/Pagination";
import Space from "../src/components/ui/Space/Space";
import { Typography } from "antd";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Pagination,
	parameters: {
		docs: {
			description: {
				component:
					"This pagination wraps [Ant Design Pagination](https://ant.design/components/pagination/) and supports all the same props.",
			},
		},
	},
	title: "Components/Pagination",
	tags: ["autodocs"],
	args: {
		selectedStyle: "solid",
	},
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const BasicUsage: Story = {
	args: {
		defaultCurrent: 1,
		total: 50,
	},
};

export const SelectedOutlinedStyle: Story = {
	args: {
		defaultCurrent: 1,
		total: 50,
		selectedStyle: "outline",
	},
};

SelectedOutlinedStyle.parameters = {
	docs: {
		description: {
			story:
				"Prop `selectedStyle` is exposed in Acacia to allow developers to choose different styles for the selected page",
		},
	},
};

export const MorePages: Story = {
	args: {
		defaultCurrent: 6,
		total: 500,
	},
};

export const AllVariants = () => (
	<Space orientation="vertical">
		<Typography.Text>Disabled</Typography.Text>
		<Pagination defaultCurrent={3} total={500} disabled />
		<Typography.Text>Mini Size</Typography.Text>
		<Pagination size="small" total={500} />
		<Typography.Text>Simple Mode</Typography.Text>
		<Pagination simple size="small" defaultCurrent={2} total={50} />
	</Space>
);
