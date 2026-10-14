import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../src/components/ui/Button/Button";
import Result from "../src/components/ui/Result/Result";

const meta = {
	component: Result,
	parameters: {
		docs: {
			description: {
				component:
					"Use Result to present a clear outcome after an important operation or to explain a page-level error. This component wraps [Ant Design Result](https://ant.design/components/result/) and supports its props.",
			},
		},
	},
	title: "Components/Result",
	tags: ["autodocs"],
	argTypes: {
		status: {
			control: "select",
			options: [
				"success",
				"info",
				"warning",
				"error",
				"403",
				401,
				"404",
				"500",
			],
		},
		title: { control: "text" },
		subTitle: { control: "text" },
	},
} satisfies Meta<typeof Result>;

export default meta;

type Story = StoryObj<typeof Result>;

export const Success: Story = {
	args: {
		status: "success",
		title: "Your changes have been saved",
		subTitle: "The workspace is up to date.",
		extra: <Button type="primary">Continue</Button>,
	},
};

export const Information: Story = {
	args: {
		status: "info",
		title: "Request received",
		subTitle: "Your request is being processed.",
	},
};

export const Warning: Story = {
	args: {
		status: "warning",
		title: "Some items need attention",
		subTitle: "Review the details before continuing.",
		extra: <Button>Review details</Button>,
	},
};

export const ErrorResult: Story = {
	args: {
		status: "error",
		title: "Submission failed",
		subTitle: "Check the information and try again.",
		extra: <Button type="primary">Try again</Button>,
	},
};

export const Forbidden: Story = {
	args: {
		status: "403",
		title: "403",
		subTitle: "You are not authorized to access this page.",
		extra: <Button type="primary">Back to workspace</Button>,
	},
};

export const NotFound: Story = {
	args: {
		status: "404",
		title: "404",
		subTitle: "The page you visited does not exist.",
		extra: <Button type="primary">Back to workspace</Button>,
	},
};

export const ServerError: Story = {
	args: {
		status: "500",
		title: "500",
		subTitle: "Something went wrong on the server.",
		extra: <Button type="primary">Try again</Button>,
	},
};

export const Unauthorized401: Story = {
	args: {
		status: "401",
		title: "401",
		subTitle: "You need to sign in to access this resource.",
		extra: <Button type="primary">Sign in</Button>,
	},
};

export const CustomIcon: Story = {
	args: {
		icon: <FontAwesomeIcon icon={faRocket} />,
		title: "Ready for launch",
		subTitle: "Your project is configured and ready to go.",
		extra: <Button type="primary">Open project</Button>,
	},
};

export const WithContent: Story = {
	args: {
		status: "error",
		title: "Unable to complete the request",
		subTitle: "Resolve the issue below, then submit again.",
		children: (
			<div style={{ marginTop: 16 }}>
				<strong>Connection timed out</strong>
				<p>Check your network connection and retry the request.</p>
			</div>
		),
		extra: <Button type="primary">Retry</Button>,
	},
};
