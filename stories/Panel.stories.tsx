import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Panel from "../src/components/ui/Panel/Panel";
import Typography from "../src/components/ui/Typography/Typography";
const meta = {
	component: Panel,

	title: "Components/Panel",
	tags: ["autodocs"],
	argTypes: {
		children: { type: "string" },
	},
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof Panel>;

export const BasicUsage: Story = {
	args: {
		children: <Typography.Text>test</Typography.Text>,
		position: "left",
	},
};

export const WithFooter: Story = {
	args: {
		children: <Typography.Text>test</Typography.Text>,
		position: "right",
		footer: <Typography.Text>With Footer</Typography.Text>,
	},
};
