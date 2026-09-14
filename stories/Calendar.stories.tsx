import type { Meta, StoryObj } from "@storybook/react-vite";
import Calendar from "../src/components/ui/Calendar/Calendar";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { theme } from "antd";

const meta = {
	component: Calendar,
	parameters: {
		docs: {
			description: {
				component:
					"This calendar wraps [Ant Design Calendar](https://ant.design/components/calendar/) and supports all the same props.",
			},
		},
	},
	title: "Components/Calendar",
	tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof Calendar>;

export const BasicUsage: Story = {};

export const Card: Story = {
	args: {
		fullscreen: false,
	},
	render: (args) => {
		const { token } = theme.useToken();

		return (
			<div
				style={{
					width: 300,
					border: `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`,
					borderRadius: token.borderRadiusLG,
				}}
			>
				<Calendar {...args} />
			</div>
		);
	},
};
