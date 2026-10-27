import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space } from "antd";
import { useState } from "react";
import Button from "../src/components/ui/Button/Button";
import Popconfirm from "../src/components/ui/Popconfirm/Popconfirm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const meta = {
	component: Popconfirm,
	parameters: {
		docs: {
			description: {
				component:
					"This popconfirm wraps [Ant Design Popconfirm](https://ant.design/components/popconfirm/) and supports all the same props.",
			},
		},
	},
	title: "Components/Popconfirm",
	tags: ["autodocs"],
} satisfies Meta<typeof Popconfirm>;

export default meta;

type Story = StoryObj<typeof Popconfirm>;

export const BasicUsage: Story = {
	args: {
		title: "Delete this item?",
		description: "This action cannot be undone.",
		okButtonProps: {
			danger: true,
		},
		children: (
			<Button type="primary" danger>
				Delete
			</Button>
		),
	},
};

export const CustomLabels: Story = {
	args: {
		title: "Discard your changes?",
		description: "Your unsaved changes will be lost.",
		okText: "Discard",
		cancelText: "Keep editing",
		children: <Button>Close editor</Button>,
	},
};

export const Placement: Story = {
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
						<Popconfirm
							key={placement}
							title="Confirm this action?"
							placement={placement}
						>
							<Button>{placement}</Button>
						</Popconfirm>
					))}
				</Space>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Choose from the 12 supported placements. Popconfirm adjusts its position when there is not enough viewport space.",
			},
		},
	},
};

export const ConditionalTrigger: Story = {
	render: () => {
		const [enabled, setEnabled] = useState(false);

		return (
			<Space>
				<Button onClick={() => setEnabled((current) => !current)}>
					{enabled ? "Disable" : "Enable"} confirmation
				</Button>
				<Popconfirm
					title="Proceed with this action?"
					description="The confirmation only opens when enabled."
					disabled={!enabled}
					onConfirm={() => setEnabled(false)}
				>
					<Button type="primary">Run action</Button>
				</Popconfirm>
			</Space>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `disabled` to conditionally prevent the confirmation from opening.",
			},
		},
	},
};

export const CustomIcon: Story = {
	args: {
		title: "Remove this item?",
		description: "This will permanently remove the item.",
		icon: <FontAwesomeIcon icon={faTrash} />,
		okButtonProps: { danger: true },
		children: (
			<Button type="primary" danger>
				Remove
			</Button>
		),
	},
};

export const ControlledVisibility: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [message, setMessage] = useState("No action selected.");

		return (
			<div>
				<Popconfirm
					title="Publish this update?"
					description="It will become visible to all users."
					open={open}
					onOpenChange={setOpen}
					onConfirm={() => {
						setMessage("Update published.");
						setOpen(false);
					}}
					onCancel={() => setMessage("Publishing cancelled.")}
				>
					<Button type="primary">Publish</Button>
				</Popconfirm>
				<p aria-live="polite">{message}</p>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Control the popup with `open` and `onOpenChange`, and close it in response to confirmation.",
			},
		},
	},
};

export const AsyncConfirm: Story = {
	render: () => {
		const [message, setMessage] = useState("No action selected.");

		return (
			<div>
				<Popconfirm
					title="Run the delayed action?"
					description="The confirmation closes after the action completes."
					okText="Run"
					onConfirm={() =>
						new Promise<void>((resolve) => {
							setMessage("Action in progress...");
							window.setTimeout(() => {
								setMessage("Action completed.");
								resolve();
							}, 1200);
						})
					}
				>
					<Button type="primary">Start action</Button>
				</Popconfirm>
				<p aria-live="polite">{message}</p>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Return a promise from `onConfirm` to wait for an asynchronous action before closing the confirmation.",
			},
		},
	},
};
