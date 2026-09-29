import type { Meta, StoryObj } from "@storybook/react-vite";
import Alert from "../src/components/ui/Alert/Alert";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Alert,
	parameters: {
		docs: {
			description: {
				component:
					"This alert wraps [Ant Design Alert](https://ant.design/components/alert/) and supports all the same props.",
			},
		},
	},
	title: "Components/Alert",
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const BasicUsage: Story = {
	args: {
		title: "Success Text",
		type: "success",
	},
};

export const Types: Story = {
	render: () => (
		<>
			<Alert title="Success Text" type="success" />
			<br />
			<Alert title="Info Text" type="info" />
			<br />
			<Alert title="Warning Text" type="warning" />
			<br />
			<Alert title="Error Text" type="error" />
		</>
	),
	parameters: {
		docs: {
			source: {
				code: `\
                    <Alert title="Success Text" type="success" />
                    <Alert title="Info Text" type="info" />
                    <Alert title="Warning Text" type="warning" />
                    <Alert title="Error Text" type="error" />`,
			},
		},
	},
};

export const WithDescription: Story = {
	render: () => (
		<>
			<Alert
				title="Success Text"
				description="Success Description Success Description Success Description"
				type="success"
			/>
			<br />
			<Alert
				title="Info Text"
				description="Info Description Info Description Info Description Info Description"
				type="info"
			/>
			<br />
			<Alert
				title="Warning Text"
				description="Warning Description Warning Description Warning Description Warning Description"
				type="warning"
			/>
			<br />
			<Alert
				title="Error Text"
				description="Error Description Error Description Error Description Error Description"
				type="error"
			/>
		</>
	),
	parameters: {
		docs: {
			source: {
				code: `<>
  <Alert
    title="Success Text"
    description="Success Description Success Description Success Description"
    type="success"
  />
  <br />
  <Alert
    title="Info Text"
    description="Info Description Info Description Info Description Info Description"
    type="info"
  />
  <br />
  <Alert
    title="Warning Text"
    description="Warning Description Warning Description Warning Description Warning Description"
    type="warning"
  />
  <br />
  <Alert
    title="Error Text"
    description="Error Description Error Description Error Description Error Description"
    type="error"
  />
</>`,
			},
		},
	},
};
