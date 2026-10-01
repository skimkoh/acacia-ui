import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
	CalendarOutlined,
	CompassOutlined,
	DesktopOutlined,
	EnvironmentOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from "@ant-design/icons";
import Segmented from "../src/components/ui/Segmented/Segmented";
import Space from "../src/components/ui/Space/Space";
import Typography from "../src/components/ui/Typography/Typography";
import Avatar from "../src/components/ui/Avatar/Avatar";
import Button from "../src/components/ui/Button/Button";

const meta = {
	title: "Components/Segmented",
	component: Segmented,
	parameters: {
		docs: {
			description: {
				component:
					"This segmented control wraps [Ant Design Segmented](https://ant.design/components/segmented/) and supports all the same props.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Segmented>;

export default meta;

type Story = StoryObj<typeof Segmented>;

/**
 * Basic
 */
export const Basic: Story = {
	args: {
		options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
	},
};

/**
 * Vertical Direction
 */
export const Vertical: Story = {
	args: {
		orientation: "vertical",
		options: [
			{
				label: "List",
				value: "list",
				icon: <UnorderedListOutlined />,
			},
			{
				label: "Kanban",
				value: "kanban",
				icon: <UnorderedListOutlined />,
			},
			{
				label: "Calendar",
				value: "calendar",
				icon: <CalendarOutlined />,
			},
		],
	},
};

/**
 * Block Segmented
 */
export const Block: Story = {
	args: {
		block: true,
		options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
	},
	decorators: [
		(Story) => (
			<div style={{ width: 500 }}>
				<Story />
			</div>
		),
	],
};

/**
 * Round shape
 */
export const Round: Story = {
	args: {
		shape: "round",
		options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
	},
};

/**
 * Disabled
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		options: ["Daily", "Weekly", "Monthly", "Quarterly"],
		defaultValue: "Weekly",
	},
};

/**
 * Controlled mode
 */
export const Controlled: Story = {
	render: () => {
		const [value, setValue] = useState<string | number>("Daily");

		return (
			<Space orientation="vertical">
				<Segmented
					options={["Daily", "Weekly", "Monthly"]}
					value={value}
					onChange={setValue}
				/>

				<Typography.Text>
					Selected: <strong>{value}</strong>
				</Typography.Text>
			</Space>
		);
	},
};

/**
 * Custom Render
 */
export const CustomRender: Story = {
	args: {
		options: [
			{
				label: (
					<Space>
						<Avatar size="small" icon={<UserOutlined />} />
						User 1
					</Space>
				),
				value: "user1",
			},
			{
				label: (
					<Space>
						<Avatar size="small">K</Avatar>
						User 2
					</Space>
				),
				value: "user2",
			},
			{
				label: (
					<Space>
						<Avatar size="small">A</Avatar>
						User 3
					</Space>
				),
				value: "user3",
			},
		],
	},
};

/**
 * Dynamic
 */
export const Dynamic: Story = {
	render: () => {
		const [options, setOptions] = useState<string[]>([
			"Map",
			"Transit",
			"Satellite",
		]);

		const [value, setValue] = useState<string>("Map");

		const addOption = () => {
			const nextOption = `Option ${options.length + 1}`;

			setOptions((current) => [...current, nextOption]);
			setValue(nextOption);
		};

		return (
			<Space orientation="vertical">
				<Segmented
					options={options}
					value={value}
					onChange={(e) => setValue(e as string)}
				/>

				<Button type="primary" onClick={addOption}>
					Load more options
				</Button>
			</Space>
		);
	},
};

/**
 * Three sizes
 */
export const Sizes: Story = {
	render: () => (
		<Space orientation="vertical">
			<Segmented size="small" options={["small", "medium", "large"]} />

			<Segmented size="medium" options={["small", "medium", "large"]} />

			<Segmented size="large" options={["small", "medium", "large"]} />
		</Space>
	),
};

/**
 * With Icon
 */
export const WithIcon: Story = {
	args: {
		options: [
			{
				label: "Map",
				value: "map",
				icon: <EnvironmentOutlined />,
			},
			{
				label: "Transit",
				value: "transit",
				icon: <CompassOutlined />,
			},
			{
				label: "Satellite",
				value: "satellite",
				icon: <DesktopOutlined />,
			},
		],
	},
};

/**
 * With Icon only
 */
export const WithIconOnly: Story = {
	args: {
		options: [
			{
				value: "list",
				icon: <UnorderedListOutlined />,
			},
			{
				value: "kanban",
				icon: <UnorderedListOutlined />,
			},
			{
				value: "calendar",
				icon: <CalendarOutlined />,
			},
		],
	},
};

/**
 * With name
 */
export const WithName: Story = {
	args: {
		name: "view",
		options: [
			{
				label: "List",
				value: "list",
				icon: <UnorderedListOutlined />,
			},
			{
				label: "Kanban",
				value: "kanban",
				icon: <UnorderedListOutlined />,
			},
			{
				label: "Calendar",
				value: "calendar",
				icon: <CalendarOutlined />,
			},
		],
	},
};

/**
 * Custom semantic DOM styling
 */
export const CustomSemanticDomStyling: Story = {
	args: {
		options: ["Daily", "Weekly", "Monthly"],
		classNames: {
			root: "custom-segmented-root",
			item: "custom-segmented-item",
			label: "custom-segmented-label",
		},
		styles: {
			root: {
				padding: 4,
			},
			item: {
				minWidth: 100,
			},
			label: {
				fontWeight: 600,
			},
		},
	},
};
