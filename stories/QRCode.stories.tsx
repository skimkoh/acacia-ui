import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space } from "antd";
import { useState } from "react";
import Button from "../src/components/ui/Button/Button";
import QRCode from "../src/components/ui/QRCode/QRCode";

const meta = {
	component: QRCode,
	parameters: {
		docs: {
			description: {
				component:
					"This QRCode wraps [Ant Design QRCode](https://ant.design/components/qr-code/) and supports all the same props.",
			},
		},
	},
	title: "Components/QRCode",
	tags: ["autodocs"],
} satisfies Meta<typeof QRCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
	args: {
		value: "https://ant.design/",
	},
};

export const RenderTypes: Story = {
	render: () => (
		<Space size="large" align="start">
			<div>
				<p>Canvas</p>
				<QRCode value="https://ant.design/" type="canvas" />
			</div>
			<div>
				<p>SVG</p>
				<QRCode value="https://ant.design/" type="svg" />
			</div>
		</Space>
	),
	parameters: {
		docs: {
			description: {
				story: "Render the QR code as either a canvas or an SVG.",
			},
		},
	},
};

export const CustomSize: Story = {
	args: {
		value: "https://ant.design/",
		size: 240,
		bordered: false,
	},
	parameters: {
		docs: {
			description: {
				story: "Adjust the QR code size and optionally remove its border.",
			},
		},
	},
};

export const CustomColor: Story = {
	args: {
		value: "https://ant.design/",
		color: "#1677ff",
		bgColor: "#e6f4ff",
		errorLevel: "H",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Customize foreground and background colors. Higher error correction levels can help when the code is styled.",
			},
		},
	},
};

export const WithIcon: Story = {
	args: {
		value: "https://ant.design/",
		icon: `data:image/svg+xml,${encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#1677ff"/><path d="M10 20h20M20 10v20" stroke="white" stroke-width="4"/></svg>',
		)}`,
		iconSize: 32,
		errorLevel: "H",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Add an icon in the center of the QR code. Use a higher error correction level to improve scan reliability.",
			},
		},
	},
};

export const StatusAndRefresh: Story = {
	render: () => {
		const [refreshCount, setRefreshCount] = useState(0);

		return (
			<div>
				<QRCode
					value={`https://ant.design/?refresh=${refreshCount}`}
					status="expired"
					onRefresh={() => setRefreshCount((count) => count + 1)}
				/>
				<p>Refreshes: {refreshCount}</p>
				<Button onClick={() => setRefreshCount((count) => count + 1)}>
					Generate a new code
				</Button>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Display a non-active QR code status and provide a refresh action to generate a new value.",
			},
		},
	},
};
