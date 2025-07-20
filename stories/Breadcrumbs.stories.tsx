import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "../src/components/ui/Breadcrumb/Breadcrumb";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Breadcrumb,
	parameters: {
		docs: {
			description: {
				component:
					"This breadcrumb wraps [Ant Design Breadcrumb](https://ant.design/components/breadcrumb/) and supports all the same props.",
			},
		},
	},
	title: "Components/Breadcrumb",
	tags: ["autodocs"],
	argTypes: {
		items: { control: "object", defaultValue: [] },
		separator: { control: "text", defaultValue: "/" },
	},
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Primary: Story = {
	args: {
		items: [
			{
				title: "Home",
			},
			{
				title: "An Application",
			},
		],
		separator: "/",
	},
};
