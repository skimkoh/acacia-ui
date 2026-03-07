import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "../src/components/ui/Skeleton/Skeleton";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Skeleton,
	parameters: {
		docs: {
			description: {
				component:
					"Skeleton wraps [Ant Design Skeleton](https://ant.design/components/skeleton/) and supports all the same props.",
			},
		},
	},
	title: "Components/Skeleton",
	tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

type InputStory = StoryObj<typeof Skeleton.Input>;

export const BasicUsage: Story = {};

export const ComplexCombination: Story = {
	args: {
		avatar: true,
		paragraph: {
			rows: 4,
		},
	},
};

export const ActiveSkeleton: Story = {
	args: {
		active: true,
	},
};

export const BlockInputSkeleton: InputStory = {
	render: (args) => <Skeleton.Input {...args} />,
	args: {
		block: true,
	},
};
