import type { Meta, StoryObj } from "@storybook/react-webpack5";
import VerticalPageHeader from "../src/components/layout/VerticalLayout/VerticalPageHeader";
import Button from "../src/components/ui/Button/Button";
const meta = {
	title: "Vertical Layout/Vertical Page Header",
	component: VerticalPageHeader,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Vertical page header is a layout component that is made up of many individual components. When used without the Vertical Layout, it creates a simple header meant for minimalistic UI.",
			},
		},
	},
	args: {
		pageTitle: "Example Page Title",
		pageSubtitle: "Subtitle",
	},
} satisfies Meta<typeof VerticalPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
	args: {
		pageTitle: "Example page title",
		pageSubtitle: "Example page subtitle",
		breadcrumbs: {
			items: [
				{
					title: "Home",
				},
				{
					title: "An Application",
				},
			],
		},
	},
};

export const HeaderWithTabs: Story = {
	args: {
		pageTitle: "Example page title",
		pageSubtitle: "Example page subtitle",
		breadcrumbs: {
			items: [
				{
					title: "Home",
				},
				{
					title: "An Application",
				},
			],
		},
		tabs: {
			items: [
				{
					key: "1",
					label: "Tab 1",
				},
				{
					key: "2",
					label: "Tab 2",
				},
				{
					key: "3",
					label: "Tab 3",
				},
			],
		},
	},
};

export const HeaderWithRightSideItems: Story = {
	args: {
		pageTitle: "Example page title",
		pageSubtitle: "Example page subtitle",
		breadcrumbs: {
			items: [
				{
					title: "Home",
				},
				{
					title: "An Application",
				},
			],
		},
		rightSideItems: <Button type="primary">Action Button</Button>,
	},
};
