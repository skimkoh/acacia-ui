import { ArrowRightOutlined } from "@ant-design/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Splitter from "../src/components/ui/Splitter/Splitter";
import Typography from "../src/components/ui/Typography/Typography";

const meta = {
	title: "Components/Splitter",
	component: Splitter,
	parameters: {
		docs: {
			description: {
				component:
					"This Splitter wraps [Ant Design Splitter](https://ant.design/components/splitter/) and supports all the same props.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Splitter>;

export default meta;

type Story = StoryObj<typeof Splitter>;

const panelStyle = {
	padding: 16,
	overflow: "auto",
};

const PanelContent = ({
	children,
}: {
	children: React.ReactNode;
}) => (
	<div style={panelStyle}>
		<Typography.Text>{children}</Typography.Text>
	</div>
);

/**
 * Basic
 */
export const Basic: Story = {
	render: () => (
		<div style={{ height: 300 }}>
			<Splitter>
				<Splitter.Panel defaultSize="50%" min="20%">
					<PanelContent>First</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel min="20%">
					<PanelContent>Second</PanelContent>
				</Splitter.Panel>
			</Splitter>
		</div>
	),
};

/**
 * Control mode
 */
export const ControlMode: Story = {
	render: () => {
		const [sizes, setSizes] = useState<(number | string)[]>(["50%", "50%"]);

		return (
			<div style={{ height: 300 }}>
				<Splitter onResize={setSizes}>
					<Splitter.Panel size={sizes[0]} min="20%">
						<PanelContent>Left: {sizes[0]}</PanelContent>
					</Splitter.Panel>

					<Splitter.Panel size={sizes[1]} min="20%">
						<PanelContent>Right: {sizes[1]}</PanelContent>
					</Splitter.Panel>
				</Splitter>
			</div>
		);
	},
};

/**
 * Vertical
 */
export const Vertical: Story = {
	render: () => (
		<div style={{ height: 400 }}>
			<Splitter orientation="vertical">
				<Splitter.Panel defaultSize="50%" min="20%">
					<PanelContent>Top</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel min="20%">
					<PanelContent>Bottom</PanelContent>
				</Splitter.Panel>
			</Splitter>
		</div>
	),
};

/**
 * Collapsible
 */
export const Collapsible: Story = {
	render: () => (
		<div style={{ height: 300 }}>
			<Splitter>
				<Splitter.Panel defaultSize="30%" min="20%" collapsible>
					<PanelContent>First</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel>
					<PanelContent>Second</PanelContent>
				</Splitter.Panel>
			</Splitter>
		</div>
	),
};

/**
 * Control collapsible icons
 */
export const ControlCollapsibleIcons: Story = {
	render: () => (
		<div style={{ height: 300 }}>
			<Splitter
				collapsible={{
					showCollapsibleIcon: true,
				}}
			>
				<Splitter.Panel defaultSize="30%" min="20%" collapsible>
					<PanelContent>First</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel>
					<PanelContent>Second</PanelContent>
				</Splitter.Panel>
			</Splitter>
		</div>
	),
};

/**
 * Multiple panels
 */
export const MultiplePanels: Story = {
	render: () => (
		<div style={{ height: 300 }}>
			<Splitter>
				<Splitter.Panel defaultSize="30%" min="20%">
					<PanelContent>Panel 1</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel defaultSize="40%" min="20%">
					<PanelContent>Panel 2</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel min="20%">
					<PanelContent>Panel 3</PanelContent>
				</Splitter.Panel>
			</Splitter>
		</div>
	),
};

/**
 * Complex combination
 */
export const ComplexCombination: Story = {
	render: () => (
		<div style={{ height: 400 }}>
			<Splitter>
				<Splitter.Panel defaultSize="25%" min="20%" collapsible>
					<PanelContent>Left</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel>
					<Splitter orientation="vertical">
						<Splitter.Panel defaultSize="50%" min="20%">
							<PanelContent>Top</PanelContent>
						</Splitter.Panel>

						<Splitter.Panel min="20%">
							<PanelContent>Bottom</PanelContent>
						</Splitter.Panel>
					</Splitter>
				</Splitter.Panel>

				<Splitter.Panel defaultSize="25%" resizable={false}>
					<PanelContent>Right</PanelContent>
				</Splitter.Panel>
			</Splitter>
		</div>
	),
};

/**
 * Lazy
 */
export const Lazy: Story = {
	render: () => (
		<div style={{ height: 300 }}>
			<Splitter lazy>
				<Splitter.Panel defaultSize="50%">
					<PanelContent>First</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel>
					<PanelContent>
						Resize the splitter and release the mouse.
					</PanelContent>
				</Splitter.Panel>
			</Splitter>
		</div>
	),
};


/**
 * Custom semantic DOM styling
 */
export const CustomSemanticDOMStyling: Story = {
	render: () => (
		<div style={{ height: 300 }}>
			<Splitter
				styles={{
					root: {
						border: "1px solid #d9d9d9",
					},
					panel: {
						padding: 8,
					},
					dragger: {
						background: "#f0f0f0",
					},
				}}
			>
				<Splitter.Panel defaultSize="50%">
					<PanelContent>First</PanelContent>
				</Splitter.Panel>

				<Splitter.Panel>
					<PanelContent>Second</PanelContent>
				</Splitter.Panel>
			</Splitter>
		</div>
	),
};
