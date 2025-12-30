import type { Meta, StoryObj } from "@storybook/react";
import { Space } from "antd";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Typography from "../src/components/ui/Typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-regular-svg-icons";

const meta = {
	component: Typography,
	parameters: {
		docs: {
			description: {
				component:
					"This button wraps [Ant Design Typography](https://ant.design/components/typography/) and supports all the same props.",
			},
		},
	},
	title: "Components/Typography",
	tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const TypographyTitleLevels = () => (
	<Space orientation="vertical">
		<Typography.Title>Typography Title (Level 1)</Typography.Title>
		<Typography.Title level={2}>Typography Title (Level 2)</Typography.Title>
		<Typography.Title level={3}>Typography Title (Level 3)</Typography.Title>
		<Typography.Title level={4}>Typography Title (Level 4)</Typography.Title>
		<Typography.Title level={5}>Typography Title (Level 5)</Typography.Title>
	</Space>
);

export const TypographyTitleWithIcons = () => (
	<Space orientation="vertical">
		<Typography.Title level={3} icon={<FontAwesomeIcon icon={faHome} />}>
			Typography Title
		</Typography.Title>
	</Space>
);

export const AllVariants = () => (
	<Space orientation="vertical">
		<Typography.Title>Typography Title</Typography.Title>
		<Typography.Text>Typography Text</Typography.Text>
		<Typography.Caption>Typography Caption</Typography.Caption>
		<Typography.Overline>Typography Overline</Typography.Overline>
		<Typography.Emphasis>Typography Emphasis</Typography.Emphasis>
		<Typography.Paragraph>Typography Paragraph</Typography.Paragraph>
		<Typography.Link>Typography Link</Typography.Link>
	</Space>
);

export const TypographyTextVariants = () => (
	<Space orientation="vertical">
		<Typography.Text>Typography Text (Normal)</Typography.Text>
		<Typography.Text type="danger">Typography Text (Danger)</Typography.Text>
		<Typography.Text type="secondary">
			Typography Text (Secondary)
		</Typography.Text>
		<Typography.Text type="success">Typography Text (Success)</Typography.Text>
		<Typography.Text type="warning">Typography Text (Warning)</Typography.Text>
	</Space>
);
