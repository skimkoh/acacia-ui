import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "antd";
import { useState } from "react";
import Button from "../src/components/ui/Button/Button";
import Watermark from "../src/components/ui/Watermark/Watermark";

const Panel = ({ children }: { children: React.ReactNode }) => (
	<div
		style={{
			position: "relative",
			minHeight: 300,
			padding: 24,
			border: "1px solid #d9d9d9",
			borderRadius: 8,
			background: "var(--ant-color-bg-container)",
		}}
	>
		{children}
		<h3>Confidential project information</h3>
		<p>
			This sample content demonstrates how a watermark appears behind content.
		</p>
		<p>
			Watermarks can identify document ownership or discourage unauthorized
			sharing.
		</p>
	</div>
);

const meta = {
	component: Watermark,
	parameters: {
		docs: {
			description: {
				component:
					"This Watermark wraps [Ant Design Watermark](https://ant.design/components/watermark/) and supports all the same props.",
			},
		},
	},
	title: "Components/Watermark",
	tags: ["autodocs"],
} satisfies Meta<typeof Watermark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: () => (
		<Watermark content="Acacia UI">
			<Panel />
		</Watermark>
	),
};

export const MultipleLines: Story = {
	render: () => (
		<Watermark content={["Acacia UI", "Internal Use Only"]}>
			<Panel />
		</Watermark>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Provide multiple strings or WatermarkText entries to render multiple lines.",
			},
		},
	},
};

export const ImageWatermark: Story = {
	render: () => (
		<Watermark
			image={`data:image/svg+xml,${encodeURIComponent(
				'<svg xmlns="http://www.w3.org/2000/svg" width="160" height="48" viewBox="0 0 160 48"><text x="4" y="34" fill="#1677ff" fill-opacity=".28" font-family="Arial" font-size="24" font-weight="700">ACACIA</text></svg>',
			)}`}
			content="Acacia UI"
			width={160}
			height={48}
		>
			<Panel />
		</Watermark>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Use an image watermark with text content as a fallback if the image cannot load.",
			},
		},
	},
};

export const CustomConfiguration: Story = {
	render: () => (
		<Watermark
			content={[
				{
					text: "Acacia UI",
					font: {
						color: "rgba(22, 119, 255, 0.2)",
						fontSize: 18,
						fontWeight: 700,
					},
				},
				{
					text: "2026",
					font: { color: "rgba(22, 119, 255, 0.2)", fontSize: 14 },
				},
			]}
			rotate={-18}
			gap={[180, 100]}
			offset={[24, 24]}
			font={{ color: "rgba(0, 0, 0, 0.15)", fontSize: 16 }}
		>
			<Panel />
		</Watermark>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Customize rotation, spacing, offset, and per-line typography with WatermarkText entries.",
			},
		},
	},
};

export const InModal: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open watermarked modal
				</Button>
				<Modal
					title="Watermarked content"
					open={open}
					onCancel={() => setOpen(false)}
					footer={null}
				>
					<Watermark content="Acacia UI">
						<div style={{ minHeight: 220, padding: 24 }}>
							<h3>Modal content</h3>
							<p>The watermark can be inherited by popup content.</p>
						</div>
					</Watermark>
				</Modal>
			</>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Watermark content can also wrap content rendered inside a modal or drawer.",
			},
		},
	},
};
