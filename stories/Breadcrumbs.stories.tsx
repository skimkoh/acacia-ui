import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "../src/components/ui/Breadcrumb/Breadcrumb";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { Space } from "antd";
import { faCalendar, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const meta = {
	component: Breadcrumb,
	parameters: {
		docs: {
			description: {
				component:
					"This breadcrumb wraps [Ant Design Breadcrumb](https://ant.design/components/breadcrumb/) and supports all the same props.",
			},
		},
	},
	title: "Components/Breadcrumb",
	tags: ["autodocs"],
	argTypes: {
		items: { control: "object", defaultValue: [] },
		separator: { control: "text", defaultValue: "/" },
	},
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const BasicUsage: Story = {
	args: {
		items: [
			{
				title: "Home",
			},
			{
				title: "An Application",
			},
		],
		separator: "/",
	},
};

export const BasicWithLink: Story = {
	args: {
		items: [
			{
				title: "Home",
			},
			{
				title: "An Application",
			},
			{
				title: <a href="https://www.google.com">Application Center</a>,
			},
		],
		separator: "/",
	},
};

BasicWithLink.parameters = {
	docs: {
		description: {
			story: "Application Center is a link, instead of text.",
		},
	},
};

export const BasicWithDropdownMenu: Story = {
	args: {
		items: [
			{
				title: "Home",
			},
			{
				title: "An Application",
			},
			{
				title: "Application Center",
				menu: {
					items: [
						{
							key: 1,
							label: "Menu Item One",
						},
						{
							key: 2,
							label: "Menu Item Two",
						},
					],
				},
			},
		],
		separator: "/",
	},
};

BasicWithDropdownMenu.parameters = {
	docs: {
		description: {
			story:
				"Breadcrumbs with dropdown menus, meant for second-level navigation",
		},
	},
};

export const WithIcons = () => (
	<Breadcrumb
		items={[
			{
				title: <FontAwesomeIcon icon={faHome} />,
			},
			{
				title: (
					<Space>
						Calendar
						<FontAwesomeIcon icon={faCalendar} />
					</Space>
				),
			},
		]}
	/>
);

WithIcons.parameters = {
	docs: {
		description: {
			story:
				"Breadcrumbs with icons. Use Space to make the space between icon and text more even.",
		},
	},
};
