import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../src/components/ui/Slider/Slider";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Slider,
	parameters: {
		docs: {
			description: {
				component:
					"Slider wraps [Ant Design Slider](https://ant.design/components/slider/) and supports all the same props.",
			},
		},
	},
	title: "Components/Slider",
	tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

export const BasicSlider: Story = {
	args: {
		defaultValue: 30,
	},
};

export const RangeSlider: Story = {
	args: {
		range: true,
		defaultValue: [20, 50],
	},
};

export const RangeDisabled: Story = {
	args: {
		defaultValue: 30,
		disabled: true,
	},
};

export const RangeWithTooltipAndFormatter: Story = {
	args: {
		defaultValue: 30,
		tooltip: { open: true, formatter: (value) => `${value}%` },
	},
};
