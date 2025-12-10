import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../src/components/ui/DatePicker/DatePicker";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { Space } from "antd";
const meta = {
	component: DatePicker,
	parameters: {
		docs: {
			description: {
				component:
					"This datepicker wraps [Ant Design DatePicker](https://ant.design/components/datepicker/) and supports all the same props.",
			},
		},
	},
	title: "Components/DatePicker",
	args: {},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const BasicUsage = () => (
	<Space orientation="vertical">
		<DatePicker />
		<DatePicker picker="week" />
		<DatePicker picker="month" />
		<DatePicker picker="quarter" />
		<DatePicker picker="year" />
	</Space>
);
