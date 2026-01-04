import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import OptionSelect from "../src/components/ui/OptionSelect/OptionSelect";

const meta = {
	component: OptionSelect,
	parameters: {
		docs: {
			description: {
				component: "This is a custom component",
			},
		},
	},
	title: "Components/OptionSelect",
	tags: ["autodocs"],
} satisfies Meta<typeof OptionSelect>;

export default meta;

type Story = StoryObj<typeof OptionSelect>;

export const BasicUsage: Story = {
	args: {
		label: "OptionSelect",
		description: "This is an option select",
	},
};

export const OptionSelectDisabled: Story = {
	args: {
		label: "Disabled Checkbox",
		disabled: true,
	},
};

export const OptionSelectGroupHorizontal = () => (
	<OptionSelect.Group
		span={6}
		options={[
			{
				value: "one",
				label: "One",
				description: "this is a test adaisjdla asd sa",
			},
			{
				value: "two",
				label: "Two",
				description: "this is a test adaisjdla asd sa",
			},
			{
				value: "3",
				label: "Three",
				description: "this is a test adaisjdla asd saasasdsaa asdads asda",
			},
		]}
	/>
);

export const OptionSelectGroupVertical = () => (
	<OptionSelect.Group
		orientation="vertical"
		span={"300px"}
		options={[
			{ value: "one", label: "One" },
			{ value: "two", label: "Two" },
			{ value: "3", label: "Three" },
		]}
	/>
);
