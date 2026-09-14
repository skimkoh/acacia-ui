import type { Meta, StoryObj } from "@storybook/react";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import InputNumber from "../src/components/ui/InputNumber/InputNumber";
import Space from "../src/components/ui/Space/Space";
import Flex from "../src/components/ui/Flex/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const meta = {
	component: InputNumber,
	parameters: {
		docs: {
			description: {
				component:
					"This input number wraps [Ant Design InputNumber](https://ant.design/components/input-number/) and supports all the same props.",
			},
		},
	},
	title: "Components/InputNumber",
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof InputNumber>;

export default meta;

type Story = StoryObj<typeof InputNumber>;

export const BasicUsage: Story = {
	args: {
		min: 0,
		max: 100,
		defaultValue: 3,
	},
};

export const Disabled: Story = {
	args: {
		min: 0,
		max: 100,
		defaultValue: 3,
		disabled: true,
	},
};

export const Sizes = () => {
	return (
		<Space wrap>
			<InputNumber size="large" min={1} max={100000} defaultValue={3} />
			<InputNumber min={1} max={100000} defaultValue={3} />
			<InputNumber size="small" min={1} max={100000} defaultValue={3} />
		</Space>
	);
};

export const Variants = () => {
	return (
		<Flex vertical gap={12}>
			<InputNumber placeholder="Outlined" style={{ width: 200 }} />
			<InputNumber
				placeholder="Filled"
				variant="filled"
				style={{ width: 200 }}
			/>
			<InputNumber
				placeholder="Borderless"
				variant="borderless"
				style={{ width: 200 }}
			/>
			<InputNumber
				placeholder="Underlined"
				variant="underlined"
				style={{ width: 200 }}
			/>
		</Flex>
	);
};

export const FormatterAndParser = () => {
	return (
		<Space>
			<InputNumber
				defaultValue={1000}
				formatter={(value) => {
					const [start, end] = `${value}`.split(".") || [];
					const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					return `$ ${end ? `${v}.${end}` : `${v}`}`;
				}}
				parser={(value) =>
					value?.replace(/\$\s?|(,*)/g, "") as unknown as number
				}
			/>
			<InputNumber
				defaultValue={100}
				min={0}
				max={100}
				formatter={(value) => `${value}%`}
				parser={(value) => value?.replace("%", "") as unknown as number}
			/>
		</Space>
	);
};

export const PrefixAndSuffix = () => {
	return (
		<Flex vertical gap={12}>
			<InputNumber prefix="￥" style={{ width: "100%" }} />

			<Space.Compact block>
				<Space.Addon>
					<FontAwesomeIcon icon={faUser} />
				</Space.Addon>
				<InputNumber prefix="￥" style={{ width: "100%" }} />
			</Space.Compact>

			<InputNumber prefix="￥" disabled style={{ width: "100%" }} />

			<InputNumber suffix="RMB" style={{ width: "100%" }} />
		</Flex>
	);
};
