import type { Meta, StoryObj } from "@storybook/react-vite";
import Notification from "../src/components/ui/Notification/Notification";
import Button from "../src/components/ui/Button/Button";

const meta = {
	title: "Components/Notification",
	parameters: {
		docs: {
			description: {
				component:
					"This notification wraps [Ant Design Notification](https://ant.design/components/notification/) and supports the same API.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicUsage: Story = {
	render: () => (
		<Button
			type="primary"
			onClick={() => {
				Notification.open({
					message: "Notification Title",
					description:
						"This is the content of the notification. This is a success notification.",
					duration: 3,
				});
			}}
		>
			Open Notification
		</Button>
	),
};

export const Types: Story = {
	render: () => (
		<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
			<Button
				type="primary"
				onClick={() =>
					Notification.success({
						message: "Success",
						description: "This is a success notification.",
					})
				}
			>
				Success
			</Button>
			<Button
				onClick={() =>
					Notification.info({
						message: "Info",
						description: "This is an info notification.",
					})
				}
			>
				Info
			</Button>
			<Button
				onClick={() =>
					Notification.warning({
						message: "Warning",
						description: "This is a warning notification.",
					})
				}
			>
				Warning
			</Button>
			<Button
				danger
				onClick={() =>
					Notification.error({
						message: "Error",
						description: "This is an error notification.",
					})
				}
			>
				Error
			</Button>
		</div>
	),
};

export const Placement: Story = {
	render: () => (
		<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
			<Button
				type="primary"
				onClick={() =>
					Notification.open({
						message: "Top Left",
						description: "This notification is placed at top left.",
						placement: "topLeft",
					})
				}
			>
				Top Left
			</Button>
			<Button
				onClick={() =>
					Notification.open({
						message: "Top Right",
						description: "This notification is placed at top right.",
						placement: "topRight",
					})
				}
			>
				Top Right
			</Button>
			<Button
				onClick={() =>
					Notification.open({
						message: "Bottom Left",
						description: "This notification is placed at bottom left.",
						placement: "bottomLeft",
					})
				}
			>
				Bottom Left
			</Button>
			<Button
				onClick={() =>
					Notification.open({
						message: "Bottom Right",
						description: "This notification is placed at bottom right.",
						placement: "bottomRight",
					})
				}
			>
				Bottom Right
			</Button>
		</div>
	),
};

export const Duration: Story = {
	render: () => (
		<Button
			type="primary"
			onClick={() => {
				Notification.open({
					message: "Custom Duration",
					description: "This notification will disappear in 10 seconds.",
					duration: 10,
				});
			}}
		>
			Open notification with 10s duration
		</Button>
	),
};

export const CustomIcon: Story = {
	render: () => (
		<Button
			type="primary"
			onClick={() => {
				Notification.open({
					message: "Custom Icon",
					description: "This notification has a custom icon.",
					icon: "🎉",
				});
			}}
		>
			Open Custom Icon Notification
		</Button>
	),
};

export const UpdateNotification: Story = {
	render: () => {
		const key = "update-notification";

		return (
			<Button
				type="primary"
				onClick={() => {
					Notification.open({
						key,
						message: "Loading...",
						description: "This notification is being updated.",
						duration: 0,
					});

					setTimeout(() => {
						Notification.open({
							key,
							message: "Loaded",
							description: "The notification has been updated.",
							duration: 3,
						});
					}, 1500);
				}}
			>
				Open and update notification
			</Button>
		);
	},
};
