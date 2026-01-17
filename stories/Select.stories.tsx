import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Select from "../src/components/ui/Select/Select";

const meta = {
	component: Select,
	parameters: {
		docs: {
			description: {
				component:
					"This select wraps [Ant Design Select](https://ant.design/components/select/) and supports all the same props.",
			},
		},
	},
	title: "Components/Select",
	tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Basic = () => (
	<Select
		defaultValue="jack"
		style={{ width: 200 }}
		options={[
			{ value: "jack", label: "Jack" },
			{ value: "lucy", label: "Lucy" },
			{ value: "Yiminghe", label: "yiminghe" },
			{ value: "disabled", label: "Disabled", disabled: true },
		]}
	/>
);

export const SelectTagMode: Story = {
	args: {
		mode: "tags",
		style: { width: 200 },
		options: [
			{ value: "jack", label: "Jack" },
			{ value: "lucy", label: "Lucy" },
			{ value: "Yiminghe", label: "yiminghe" },
			{ value: "disabled", label: "Disabled", disabled: true },
		],
	},
};
