import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Radio from "../src/components/ui/Radio/Radio";
import Space from "../src/components/ui/Space/Space";
import { Typography } from "antd";
const meta = {
	component: Radio,
	parameters: {
		docs: {
			description: {
				component:
					"This radio wraps [Ant Design Radio](https://ant.design/components/radio/) and supports all the same props.",
			},
		},
	},
	title: "Components/Radio",
	tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const BasicUsage: Story = {
	args: {
		children: "Radio",
	},
};

export const RadioGroup = () => (
	<Radio.Group
		vertical
		options={[
			{ value: 1, label: "Option A" },
			{ value: 2, label: "Option B" },
			{ value: 3, label: "Option C" },
		]}
	/>
);

RadioGroup.parameters = {
	docs: {
		description: {
			story:
				"Radio options can be placed in a `Radio.Group` to faciliate control",
		},
	},
};

export const RadioGroupButton = () => (
	<Space orientation="vertical">
		<Typography.Text>Solid Radio Group</Typography.Text>
		<Radio.Group defaultValue="a" buttonStyle="solid">
			<Radio.Button value="a">Hangzhou</Radio.Button>
			<Radio.Button value="b">Shanghai</Radio.Button>
			<Radio.Button value="c">Beijing</Radio.Button>
			<Radio.Button value="d">Chengdu</Radio.Button>
		</Radio.Group>
		<Typography.Text>Outlined Radio Group</Typography.Text>
		<Radio.Group defaultValue="a" buttonStyle="outline">
			<Radio.Button value="a">Hangzhou</Radio.Button>
			<Radio.Button value="b">Shanghai</Radio.Button>
			<Radio.Button value="c">Beijing</Radio.Button>
			<Radio.Button value="d">Chengdu</Radio.Button>
		</Radio.Group>
	</Space>
);
