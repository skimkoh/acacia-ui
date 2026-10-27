import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space } from "antd";
import { useState } from "react";
import Button from "../src/components/ui/Button/Button";
import Popover from "../src/components/ui/Popover/Popover";

const meta = {
	component: Popover,
	parameters: {
		docs: {
			description: {
				component:
					"This Popover wraps [Ant Design Popover](https://ant.design/components/popover/) and supports the same props.",
			},
		},
	},
	title: "Components/Popover",
	tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		title: "Popover title",
		content: <p style={{ margin: 0 }}>Popover content goes here.</p>,
		children: <Button>Hover or click me</Button>,
	},
};

export const TriggerTypes: Story = {
	render: () => (
		<Space>
			<Popover title="Hover" content="Opened by hovering." trigger="hover">
				<Button>Hover</Button>
			</Popover>
			<Popover title="Click" content="Opened by clicking." trigger="click">
				<Button>Click</Button>
			</Popover>
			<Popover
				title="Focus"
				content="Opened by keyboard focus."
				trigger="focus"
			>
				<Button>Focus</Button>
			</Popover>
		</Space>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Popover supports hover, click, and focus triggers. The default trigger is hover.",
			},
		},
	},
};

export const Placements: Story = {
	render: () => {
		const placements = [
			"top",
			"topLeft",
			"topRight",
			"bottom",
			"bottomLeft",
			"bottomRight",
			"left",
			"leftTop",
			"leftBottom",
			"right",
			"rightTop",
			"rightBottom",
		] as const;

		return (
			<div style={{ padding: 100 }}>
				<Space wrap>
					{placements.map((placement) => (
						<Popover
							key={placement}
							title={placement}
							content="Popover placement preview."
							placement={placement}
							trigger="click"
						>
							<Button>{placement}</Button>
						</Popover>
					))}
				</Space>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Choose among 12 placements. Popover automatically shifts or flips when needed to stay in the viewport.",
			},
		},
	},
};

export const ArrowOptions: Story = {
	render: () => (
		<Space>
			<Popover
				title="Default arrow"
				content="The arrow points toward the trigger."
				trigger="click"
			>
				<Button>Default</Button>
			</Popover>
			<Popover
				title="Arrow hidden"
				content="This popover has no arrow."
				arrow={false}
				trigger="click"
			>
				<Button>No arrow</Button>
			</Popover>
			<Popover
				title="Arrow centered"
				content="The arrow points at the center of the trigger."
				arrow={{ pointAtCenter: true }}
				trigger="click"
			>
				<Button>Point at center</Button>
			</Popover>
		</Space>
	),
};

export const ControlledVisibility: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<div>
				<Popover
					title="Controlled popover"
					content={
						<div>
							<p>Visibility is managed by the parent component.</p>
							<Button size="small" onClick={() => setOpen(false)}>
								Close
							</Button>
						</div>
					}
					trigger="click"
					open={open}
					onOpenChange={setOpen}
				>
					<Button type="primary">Toggle popover</Button>
				</Popover>
				<p aria-live="polite">Popover is {open ? "open" : "closed"}.</p>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Control visibility with `open` and `onOpenChange`, including closing it from content.",
			},
		},
	},
};

export const CustomContent: Story = {
	args: {
		title: <strong>Share this page</strong>,
		content: (
			<div style={{ minWidth: 200 }}>
				<p>Copy this link to share with your team.</p>
				<code>https://example.com/project</code>
			</div>
		),
		trigger: "click",
		children: <Button>Share</Button>,
	},
};
