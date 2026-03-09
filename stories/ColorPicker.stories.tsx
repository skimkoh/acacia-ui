import type { Meta, StoryObj } from "@storybook/react";
import ColorPicker from "../src/components/ui/ColorPicker/ColorPicker";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: ColorPicker,
	parameters: {
		docs: {
			description: {
				component:
					"ColorPicker wraps [Ant Design ColorPicker](https://ant.design/components/color-picker/) and supports all the same props.",
			},
		},
	},
	title: "Components/ColorPicker",
	tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>;

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const BasicUsage: Story = {
	args: {
		defaultValue: "#1677ff",
	},
};

export const WithText: Story = {
	args: {
		defaultValue: "#1677ff",
		showText: true,
		allowClear: true,
	},
};

export const GradientPicker: Story = {
	args: {
		defaultValue: [
			{
				color: "rgb(16, 142, 233)",
				percent: 0,
			},
			{
				color: "rgb(135, 208, 104)",
				percent: 100,
			},
		],
		showText: true,
		allowClear: true,
		mode: ["single", "gradient"],
	},
};

export const DisabledColorPicker: Story = {
	args: {
		defaultValue: "#1677ff",
		disabled: true,
		showText: true,
	},
};
