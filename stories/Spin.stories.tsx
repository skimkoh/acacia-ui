import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Space from "../src/components/ui/Space/Space";
import Spin from "../src/components/ui/Spin/Spin";

const meta = {
	component: Spin,
	parameters: {
		docs: {
			description: {
				component:
					"Use Spin to indicate that a page or content block is loading. This component wraps [Ant Design Spin](https://ant.design/components/spin/) and supports its props.",
			},
		},
	},
	title: "Components/Spin",
	tags: ["autodocs"],
	argTypes: {
		delay: { control: { type: "number", min: 0 } },
		description: { control: "text" },
		percent: { control: "text" },
		size: { control: "select", options: ["small", "default", "large"] },
		spinning: { control: "boolean" },
	},
} satisfies Meta<typeof Spin>;

export default meta;

type Story = StoryObj<typeof Spin>;

export const BasicUsage: Story = {
	args: {
		spinning: true,
	},
};

export const Sizes: Story = {
	render: () => (
		<Space align="center" size="large">
			<Spin size="small" />
			<Spin size="default" />
			<Spin size="large" />
		</Space>
	),
};

export const EmbeddedContent: Story = {
	render: () => (
		<Spin spinning description="Loading project activity...">
			<div
				style={{
					background: "#f2f5f7",
					border: "1px solid #dce3e8",
					borderRadius: 6,
					minHeight: 160,
					padding: 24,
				}}
			>
				<h3 style={{ marginTop: 0 }}>Project activity</h3>
				<p>Recent updates and team activity appear here.</p>
			</div>
		</Spin>
	),
};

export const Delayed: Story = {
	args: {
		delay: 500,
		spinning: true,
		description: "Loading after a short delay...",
	},
};

export const Progress: Story = {
	render: () => (
		<Space align="center" size="large">
			<Spin percent={65} />
			<Spin percent="auto" />
		</Space>
	),
};

export const CustomIndicator: Story = {
	args: {
		indicator: <FontAwesomeIcon icon={faSpinner} spin />,
		spinning: true,
		description: "Loading...",
	},
};
