import {
	CheckOutlined,
	ClockCircleOutlined,
	SolutionOutlined,
	UserOutlined,
} from "@ant-design/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Steps } from "antd";
import { useState } from "react";

const meta = {
	title: "Components/Steps",
	component: Steps,
	parameters: {
		docs: {
			description: {
				component:
					"This Steps wraps [Ant Design Steps](https://ant.design/components/steps/) and supports all the same props.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Steps>;

export default meta;

type Story = StoryObj<typeof meta>;

const basicItems = [
	{
		title: "Finished",
		content: "This is a content.",
	},
	{
		title: "In Progress",
		content: "This is a content.",
	},
	{
		title: "Waiting",
		content: "This is a content.",
	},
];

const items = [
	{
		title: "Step 1",
		content: "This is Step 1",
	},
	{
		title: "Step 2",
		content: "This is Step 2",
	},
	{
		title: "Step 3",
		content: "This is Step 3",
	},
];

/**
 * Basic
 */
export const Basic: Story = {
	args: {
		current: 1,
		items: basicItems,
	},
};

/**
 * Error status
 */
export const ErrorStatus: Story = {
	args: {
		current: 1,
		status: "error",
		items: basicItems,
	},
};

/**
 * Vertical
 */
export const Vertical: Story = {
	args: {
		current: 1,
		orientation: "vertical",
		items: basicItems,
	},
};

/**
 * Clickable
 */
export const Clickable: Story = {
	render: () => {
		const [current, setCurrent] = useState(0);

		return <Steps current={current} onChange={setCurrent} items={items} />;
	},
};

/**
 * Panel Steps
 */
export const Panel: Story = {
	render: () => {
		const [current, setCurrent] = useState(0);

		return (
			<Steps
				type="panel"
				current={current}
				onChange={setCurrent}
				items={[
					{
						title: "Step 1",
						content: "This is Step 1",
					},
					{
						title: "Step 2",
						content: "This is Step 2",
					},
					{
						title: "Step 3",
						content: "This is Step 3",
					},
				]}
			/>
		);
	},
};

/**
 * With icon
 */
export const WithIcon: Story = {
	args: {
		current: 1,
		items: [
			{
				title: "Login",
				icon: <UserOutlined />,
			},
			{
				title: "Verification",
				icon: <SolutionOutlined />,
			},
			{
				title: "Pay",
				icon: <ClockCircleOutlined />,
			},
			{
				title: "Done",
				icon: <CheckOutlined />,
			},
		],
	},
};

/**
 * Title Placement
 */
export const TitlePlacement: Story = {
	args: {
		current: 1,
		titlePlacement: "vertical",
		items: basicItems,
	},
};

/**
 * Progress
 */
export const Progress: Story = {
	args: {
		current: 1,
		percent: 60,
		items: basicItems,
	},
};

/**
 * Title Placement and Progress
 */
export const TitlePlacementAndProgress: Story = {
	args: {
		current: 1,
		titlePlacement: "vertical",
		percent: 60,
		items: basicItems,
	},
};

/**
 * Max Count
 */
export const MaxCount: Story = {
	args: {
		current: 3,
		maxCount: 5,
		items: [
			{ title: "Step 1" },
			{ title: "Step 2" },
			{ title: "Step 3" },
			{ title: "Step 4" },
			{ title: "Step 5" },
			{ title: "Step 6" },
			{ title: "Step 7" },
		],
	},
};

/**
 * Dot Style
 */
export const DotStyle: Story = {
	args: {
		type: "dot",
		current: 1,
		items: basicItems,
	},
};

/**
 * Navigation Steps
 */
export const Navigation: Story = {
	render: () => {
		const [current, setCurrent] = useState(0);

		return (
			<Steps
				type="navigation"
				current={current}
				onChange={setCurrent}
				items={[
					{
						title: "Login",
					},
					{
						title: "Verification",
					},
					{
						title: "Pay",
					},
					{
						title: "Done",
					},
				]}
			/>
		);
	},
};

/**
 * Inline Steps
 */
export const Inline: Story = {
	args: {
		type: "inline",
		current: 1,
		items: [
			{
				title: "Step 1",
				content: "This is a content.",
			},
			{
				title: "Step 2",
				content: "This is a content.",
			},
			{
				title: "Step 3",
				content: "This is a content.",
			},
		],
	},
};

/**
 * Inline Style Combination
 */
export const InlineStyleCombination: Story = {
	args: {
		type: "inline",
		current: 1,
		items: [
			{
				title: "Step 1",
				content: "This is a content.",
			},
			{
				title: "Step 2",
				content: "This is a content.",
			},
			{
				title: "Step 3",
				content: "This is a content.",
			},
			{
				title: "Step 4",
				content: "This is a content.",
			},
		],
	},
};

/**
 * Small
 */
export const Small: Story = {
	args: {
		size: "small",
		current: 1,
		items: basicItems,
	},
};

/**
 * Outlined Variant
 */
export const Outlined: Story = {
	args: {
		variant: "outlined",
		current: 1,
		items: basicItems,
	},
};

/**
 * Custom semantic DOM styling
 */
export const CustomSemanticDOMStyling: Story = {
	args: {
		current: 1,
		items: basicItems,
		styles: {
			item: {
				paddingInline: 16,
			},
		},
	},
};
