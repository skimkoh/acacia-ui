import type { Meta, StoryObj } from "@storybook/react";
import Popconfirm from "../src/components/ui/Popconfirm/Popconfirm";
import Button from "../src/components/ui/Button/Button";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Popconfirm,
	parameters: {
		docs: {
			description: {
				component:
					"This popconfirm wraps [Ant Design Popconfirm](https://ant.design/components/popconfirm/) and supports all the same props.",
			},
		},
	},
	title: "Components/Popconfirm",
	tags: ["autodocs"],
} satisfies Meta<typeof Popconfirm>;

export default meta;

type Story = StoryObj<typeof Popconfirm>;

export const BasicUsage: Story = {
	args: {
		title: "Are you sure you want to delete this item?",
		okButtonProps: {
			danger: true,
		},
		children: (
			<Button type="primary" danger>
				Delete
			</Button>
		),
	},
};
