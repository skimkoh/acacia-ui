import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Input from "../src/components/ui/Input/Input";
import { Space } from "antd";
import Typography from "../src/components/ui/Typography/Typography";
const meta = {
	component: Input,
	parameters: {
		docs: {
			description: {
				component:
					"This input wraps [Ant Design Input](https://ant.design/components/input/) and supports all the same props.",
			},
		},
	},
	title: "Components/Input",
	tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const BasicUsage: Story = {
	args: {
		placeholder: "Placeholder Text..",
	},
};

export const AllVariants = () => (
	<Space orientation="vertical" style={{ width: "100%" }}>
		<Input placeholder="Outlined" />
		<Input placeholder="Filled" variant="filled" />
		<Input placeholder="Borderless" variant="borderless" />
		<Input placeholder="Underlined" variant="underlined" />
		<Input.Search placeholder="Filled" variant="filled" />
	</Space>
);

AllVariants.parameters = {
	docs: {
		description: {
			story:
				"This story shows all combinations of the Input component across Antd's variants.",
		},
	},
};

export const InputTextArea = () => (
	<Space orientation="vertical" style={{ width: "100%" }}>
		<Typography.Text> Text Area</Typography.Text>
		<Input.TextArea
			placeholder="Autosize height based on content lines"
			autoSize
		/>
		<Input.TextArea
			placeholder="Autosize height with minimum and maximum number of lines"
			autoSize={{ minRows: 2, maxRows: 6 }}
		/>
		<Typography.Text>Password</Typography.Text>
		<Input.Password placeholder="input password" />
		<Input.Password disabled placeholder="disabled input password" />
		<Typography.Text>OTP</Typography.Text>
		<Input.OTP length={5} />
		<Typography.Text>Search</Typography.Text>
		<Input.Search placeholder="Search..." />
	</Space>
);

InputTextArea.parameters = {
	docs: {
		description: {
			story:
				"`Input` has compounded components such as `Input.TextArea`, `Input.Password`, `Input.OTP` & `Input.Search`",
		},
	},
};
