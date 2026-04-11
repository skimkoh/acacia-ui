import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Empty from "../src/components/ui/Empty/Empty";
import Space from "../src/components/ui/Space/Space";
import Button from "../src/components/ui/Button/Button";

const meta = {
	component: Empty,
	parameters: {
		docs: {
			description: {
				component:
					"This Empty  component wraps [Ant Design Empty](https://ant.design/components/empty/) and supports all the same props.",
			},
		},
	},
	title: "Components/Empty",
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof Empty>;

export const BasicUsage: Story = {};

export const ChooseImage: Story = {
	args: { image: Empty.PRESENTED_IMAGE_SIMPLE },
};

export const CustomizeEmpty: Story = {
	args: {
		description: (
			<Space orientation="vertical">
				No data available
				<Button type="primary" size="small">
					Go back home
				</Button>
			</Space>
		),
	},
};
