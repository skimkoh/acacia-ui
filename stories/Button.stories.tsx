import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/ui/Button/Button";

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
