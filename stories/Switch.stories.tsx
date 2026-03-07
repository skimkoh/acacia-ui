import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Switch from "../src/components/ui/Switch/Switch";

const meta = {
	component: Switch,
	parameters: {
		docs: {
			description: {
				component:
					"This switch wraps [Ant Design Switch](https://ant.design/components/switch/) and supports all the same props.",
			},
		},
	},
	title: "Components/Switch",
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const BasicUsage: Story = {
	args: {
		defaultChecked: true,
	},
};

export const BasicWithText: Story = {
	args: {
		checkedChildren: "Checked",
		unCheckedChildren: "Unchecked",
		defaultChecked: true,
	},
};

export const DisabledSwitch: Story = {
	args: {
		defaultChecked: true,
		disabled: true,
	},
};

export const Size: Story = {
	args: {
		size: "small",
	},
};
