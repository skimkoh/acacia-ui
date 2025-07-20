import type { Meta, StoryObj } from "@storybook/react";
import Button from "../src/components/ui/Button/Button";
import { Space } from "antd";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Button,
	parameters: {
		docs: {
			description: {
				component:
					"This button wraps [Ant Design Button](https://ant.design/components/button/) and supports all the same props.",
			},
		},
	},
	title: "Components/Button",
	tags: ["autodocs"],
	argTypes: {
		children: { control: "text", defaultValue: "Click me" },
		disabled: { control: "boolean", defaultValue: false },
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Button",
		type: "default",
		disabled: false,
	},
};

export const AllVariants = () => (
	<Space>
		<Button type="primary">Primary</Button>
		<Button>Default</Button>
		<Button type="link">Link</Button>
		<Button type="text">Text</Button>
		<Button type="dashed">Dashed</Button>
	</Space>
);

AllVariants.parameters = {
	docs: {
		description: {
			story:
				"This story shows all combinations of the Button component across Antd's variants.",
		},
	},
};
