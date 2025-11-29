import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Checkbox from "../src/components/ui/Checkbox/Checkbox";
const meta = {
	component: Checkbox,
	parameters: {
		docs: {
			description: {
				component:
					"This checkbox wraps [Ant Design Checkbox](https://ant.design/components/checkbox/) and supports all the same props.",
			},
		},
	},
	title: "Components/Checkbox",
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const BasicUsage: Story = {
	args: {
		children: "Checkbox",
	},
};

export const CheckboxDisabled: Story = {
	args: {
		children: "Disabled Checkbox",
		disabled: true,
	},
};

CheckboxDisabled.parameters = {
	docs: {
		description: {
			story:
				"Similarly, setting `disabled` as true will cause the checkbox to become disabled",
		},
	},
};

export const CheckboxGroup = () => (
	<Checkbox.Group
		options={["Apple", "Pear", "Orange"]}
		defaultValue={["Apple"]}
		onChange={(e) => console.log(e)}
	/>
);

CheckboxGroup.parameters = {
	docs: {
		description: {
			story:
				"Generate a group of checkboxes from an array, and wrapping the options in `Checkbox.Group` to control the items",
		},
	},
};
