import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../src/components/ui/Button/Button";
import Drawer from "../src/components/ui/Drawer/Drawer";
import Form from "../src/components/ui/Form/Form";
import Input from "../src/components/ui/Input/Input";
import Select from "../src/components/ui/Select/Select";
import Space from "../src/components/ui/Space/Space";

const meta = {
	title: "Components/Drawer",
	component: Drawer,
	parameters: {
		docs: {
			description: {
				component:
					"This Drawer wraps [Ant Design Drawer](https://ant.design/components/drawer/) and supports all the same props.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic
 */
export const Basic: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Drawer
				</Button>

				<Drawer title="Basic Drawer" open={open} onClose={() => setOpen(false)}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
			</>
		);
	},
};

/**
 * Custom Placement
 */
export const CustomPlacement: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [placement, setPlacement] = useState<
			"top" | "right" | "bottom" | "left"
		>("right");

		const showDrawer = (nextPlacement: "top" | "right" | "bottom" | "left") => {
			setPlacement(nextPlacement);
			setOpen(true);
		};

		return (
			<>
				<Space>
					<Button onClick={() => showDrawer("top")}>Top</Button>
					<Button onClick={() => showDrawer("right")}>Right</Button>
					<Button onClick={() => showDrawer("bottom")}>Bottom</Button>
					<Button onClick={() => showDrawer("left")}>Left</Button>
				</Space>

				<Drawer
					title="Custom Placement"
					placement={placement}
					open={open}
					onClose={() => setOpen(false)}
				>
					<p>Drawer placement: {placement}</p>
				</Drawer>
			</>
		);
	},
};

/**
 * Resizable
 */
export const Resizable: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Resizable Drawer
				</Button>

				<Drawer
					title="Resizable Drawer"
					open={open}
					onClose={() => setOpen(false)}
					resizable
				>
					<p>Drag the edge of the drawer to resize it.</p>
				</Drawer>
			</>
		);
	},
};

/**
 * Loading
 */
export const Loading: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Drawer
				</Button>

				<Drawer
					title="Loading Drawer"
					open={open}
					loading
					onClose={() => setOpen(false)}
				/>
			</>
		);
	},
};

/**
 * Extra Actions
 */
export const ExtraActions: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Drawer
				</Button>

				<Drawer
					title="New Account"
					extra={
						<Space>
							<Button onClick={() => setOpen(false)}>Cancel</Button>
							<Button type="primary">Submit</Button>
						</Space>
					}
					open={open}
					onClose={() => setOpen(false)}
				>
					<Form layout="vertical">
						<Form.Item label="Name">
							<Input placeholder="Please enter your name" />
						</Form.Item>

						<Form.Item label="Role">
							<Select
								placeholder="Please select a role"
								options={[
									{ label: "Admin", value: "admin" },
									{ label: "User", value: "user" },
								]}
							/>
						</Form.Item>
					</Form>
				</Drawer>
			</>
		);
	},
};

/**
 * Render in current DOM
 */
export const RenderInCurrentDOM: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const containerRef = useRef<HTMLDivElement>(null);

		return (
			<div
				ref={containerRef}
				style={{
					position: "relative",
					height: 400,
					overflow: "hidden",
					border: "1px dashed #d9d9d9",
					padding: 24,
				}}
			>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Drawer
				</Button>

				<Drawer
					title="Render in current DOM"
					open={open}
					onClose={() => setOpen(false)}
					getContainer={false}
					rootStyle={{ position: "absolute" }}
				>
					<p>This Drawer is rendered inside the current DOM container.</p>
				</Drawer>
			</div>
		);
	},
};

/**
 * Submit form in drawer
 */
export const SubmitForm: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [form] = Form.useForm();

		const handleSubmit = async () => {
			try {
				await form.validateFields();
				setOpen(false);
				form.resetFields();
			} catch {
				// Validation failed.
			}
		};

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Form
				</Button>

				<Drawer
					title="Create User"
					open={open}
					onClose={() => setOpen(false)}
					footer={
						<Space>
							<Button onClick={() => setOpen(false)}>Cancel</Button>
							<Button type="primary" onClick={handleSubmit}>
								Submit
							</Button>
						</Space>
					}
				>
					<Form form={form} layout="vertical">
						<Form.Item
							name="name"
							label="Name"
							rules={[
								{
									required: true,
									message: "Please enter your name",
								},
							]}
						>
							<Input placeholder="Name" />
						</Form.Item>

						<Form.Item
							name="email"
							label="Email"
							rules={[
								{
									required: true,
									message: "Please enter your email",
								},
								{
									type: "email",
									message: "Please enter a valid email",
								},
							]}
						>
							<Input placeholder="Email" />
						</Form.Item>
					</Form>
				</Drawer>
			</>
		);
	},
};

/**
 * Preview drawer
 */
export const Preview: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Preview
				</Button>

				<Drawer title="Preview" open={open} onClose={() => setOpen(false)}>
					<h3>John Doe</h3>
					<p>
						This is an example of using Drawer to preview details without
						leaving the current page.
					</p>

					<p>
						<strong>Email:</strong> john@example.com
					</p>

					<p>
						<strong>Role:</strong> Administrator
					</p>
				</Drawer>
			</>
		);
	},
};

/**
 * Multi-level drawer
 */
export const MultiLevel: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [childOpen, setChildOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Drawer
				</Button>

				<Drawer title="Level 1" open={open} onClose={() => setOpen(false)}>
					<Button onClick={() => setChildOpen(true)}>Open Level 2</Button>

					<Drawer
						title="Level 2"
						open={childOpen}
						onClose={() => setChildOpen(false)}
					>
						<p>This is a nested drawer.</p>
					</Drawer>
				</Drawer>
			</>
		);
	},
};

/**
 * Preset size
 */
export const PresetSize: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [size, setSize] = useState<"default" | "large">("default");

		return (
			<>
				<Space>
					<Button
						onClick={() => {
							setSize("default");
							setOpen(true);
						}}
					>
						Default Size (378px)
					</Button>

					<Button
						onClick={() => {
							setSize("large");
							setOpen(true);
						}}
					>
						Large Size (736px)
					</Button>
				</Space>

				<Drawer
					title="Preset Size"
					size={size}
					open={open}
					onClose={() => setOpen(false)}
				>
					<p>Current size: {size}</p>
				</Drawer>
			</>
		);
	},
};

/**
 * Mask
 */
export const Mask: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<Space>
				<Button onClick={() => setOpen(true)}>Normal Mask</Button>

				<Drawer title="Normal Mask" open={open} onClose={() => setOpen(false)}>
					<p>Normal mask.</p>
				</Drawer>

				<Button onClick={() => setOpen(true)}>Blur Mask</Button>

				<Drawer
					title="Blur Mask"
					open={open}
					mask={{
						blur: true,
					}}
					onClose={() => setOpen(false)}
				>
					<p>Blurred mask.</p>
				</Drawer>
			</Space>
		);
	},
};

/**
 * Closable placement
 */
export const ClosablePlacement: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Drawer
				</Button>

				<Drawer
					title="Closable Placement"
					open={open}
					onClose={() => setOpen(false)}
					closable={{
						placement: "end",
					}}
				>
					<p>The close button is positioned at the end of the header.</p>
				</Drawer>
			</>
		);
	},
};

/**
 * Custom semantic DOM styling
 */
export const CustomSemanticDOMStyling: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button type="primary" onClick={() => setOpen(true)}>
					Open Styled Drawer
				</Button>

				<Drawer
					title="Custom Styling"
					open={open}
					onClose={() => setOpen(false)}
					styles={{
						header: {
							background: "#f5f5f5",
						},
						body: {
							background: "#fafafa",
						},
						footer: {
							background: "#f5f5f5",
						},
					}}
				>
					<p>Drawer semantic DOM elements can be styled individually.</p>
				</Drawer>
			</>
		);
	},
};
