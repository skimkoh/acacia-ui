import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space } from "antd";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Progress from "../src/components/ui/Progress/Progress";

const meta = {
	component: Progress,
	parameters: {
		docs: {
			description: {
				component:
					"Use Progress to show the current status of a long-running operation or communicate a completion percentage. This component wraps [Ant Design Progress](https://ant.design/components/progress/) and supports its props.",
			},
		},
	},
	title: "Components/Progress",
	tags: ["autodocs"],
	argTypes: {
		percent: { control: { type: "number", min: 0, max: 100 } },
		showInfo: { control: "boolean" },
		status: {
			control: "select",
			options: ["normal", "active", "success", "exception"],
		},
		type: { control: "select", options: ["line", "circle", "dashboard"] },
	},
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

export const BasicUsage: Story = {
	args: {
		percent: 30,
	},
};

export const LineStatuses: Story = {
	render: () => (
		<Space orientation="vertical" style={{ width: 360 }}>
			<Progress percent={35} />
			<Progress percent={60} status="active" />
			<Progress percent={100} status="success" />
			<Progress percent={70} status="exception" />
		</Space>
	),
};

export const CircleAndDashboard: Story = {
	render: () => (
		<Space align="center" size="large">
			<Progress type="circle" percent={75} />
			<Progress type="dashboard" percent={60} />
		</Space>
	),
};

export const Steps: Story = {
	args: {
		percent: 60,
		steps: 5,
	},
};

export const CircularSteps: Story = {
	args: {
		percent: 60,
		steps: 8,
		type: "circle",
	},
};

export const SuccessSegment: Story = {
	args: {
		percent: 70,
		success: { percent: 30 },
	},
};

export const Gradient: Story = {
	args: {
		percent: 75,
		strokeColor: {
			from: "#108ee9",
			to: "#87d068",
			direction: "to right",
		},
	},
};

export const Sizes: Story = {
	render: () => (
		<Space orientation="vertical" style={{ width: 360 }}>
			<Progress percent={50} size="small" />
			<Progress percent={50} size="medium" />
			<Space align="center" size="large">
				<Progress type="circle" percent={50} size={80} />
				<Progress type="circle" percent={50} size={120} />
			</Space>
		</Space>
	),
};
