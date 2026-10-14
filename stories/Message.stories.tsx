import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../src/components/ui/Button/Button";
import Message from "../src/components/ui/Message/Message";

const meta = {
	title: "Components/Message",
	parameters: {
		docs: {
			description: {
				component:
					"Use Message for lightweight, temporary feedback such as success, warning, or error states. The stories use `useMessage` so messages inherit the surrounding React context, as recommended by [Ant Design](https://ant.design/components/message/).",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

const BasicMessageExample = () => {
	const [api, contextHolder] = Message.useMessage();

	return (
		<>
			{contextHolder}
			<Button type="primary" onClick={() => api.info("This is a message.")}>
				Show message
			</Button>
		</>
	);
};

const MessageTypesExample = () => {
	const [api, contextHolder] = Message.useMessage();

	return (
		<>
			{contextHolder}
			<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
				<Button
					type="primary"
					onClick={() => api.success("Saved successfully.")}
				>
					Success
				</Button>
				<Button onClick={() => api.info("New information is available.")}>
					Info
				</Button>
				<Button onClick={() => api.warning("Check the submitted details.")}>
					Warning
				</Button>
				<Button
					danger
					onClick={() => api.error("Unable to complete the request.")}
				>
					Error
				</Button>
			</div>
		</>
	);
};

const DurationExample = () => {
	const [api, contextHolder] = Message.useMessage();

	return (
		<>
			{contextHolder}
			<Button
				onClick={() => api.info("This message stays for 10 seconds.", 10)}
			>
				Show 10-second message
			</Button>
		</>
	);
};

const LoadingExample = () => {
	const [api, contextHolder] = Message.useMessage();

	return (
		<>
			{contextHolder}
			<Button
				onClick={() =>
					api
						.loading("Working...", 1.5)
						.then(() => api.success("The operation is complete."))
				}
			>
				Run operation
			</Button>
		</>
	);
};

const UpdateExample = () => {
	const [api, contextHolder] = Message.useMessage();
	const key = "message-update";

	return (
		<>
			{contextHolder}
			<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
				<Button
					onClick={() =>
						api.open({ key, content: "Processing...", duration: 0 })
					}
				>
					Start
				</Button>
				<Button
					onClick={() => api.open({ key, content: "Completed.", duration: 2 })}
				>
					Update
				</Button>
			</div>
		</>
	);
};

const StackExample = () => {
	const [api, contextHolder] = Message.useMessage({
		stack: { threshold: 3 },
	});

	return (
		<>
			{contextHolder}
			<Button onClick={() => api.info("A stacked message.")}>
				Add message
			</Button>
		</>
	);
};

export const BasicUsage: Story = {
	render: () => <BasicMessageExample />,
};

export const OtherTypes: Story = {
	render: () => <MessageTypesExample />,
};

export const CustomizeDuration: Story = {
	render: () => <DurationExample />,
};

export const LoadingWithThenable: Story = {
	render: () => <LoadingExample />,
};

export const UpdateByKey: Story = {
	render: () => <UpdateExample />,
};

export const StackedMessages: Story = {
	render: () => <StackExample />,
};
