import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Input from "../src/components/ui/Input/Input";
import { Space } from "antd";
const meta = {
	component: Input,
	parameters: {
		docs: {
			description: {
				component:
					"This input wraps [Ant Design Input](https://ant.design/components/input/) and supports all the same props.",
			},
		},
	},
	title: "Components/Input",
	tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const BasicUsage: Story = {
	args: {
		placeholder: "Placeholder Text..",
	},
};

export const AllVariants = () => (
	<Space orientation="vertical">
		<Input placeholder="Outlined" />
		<Input placeholder="Filled" variant="filled" />
		<Input placeholder="Borderless" variant="borderless" />
		<Input placeholder="Underlined" variant="underlined" />
		<Input.Search placeholder="Filled" variant="filled" />
	</Space>
);

AllVariants.parameters = {
	docs: {
		description: {
			story:
				"This story shows all combinations of the Input component across Antd's variants.",
		},
	},
};
