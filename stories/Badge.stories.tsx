import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../src/components/ui/Badge/Badge";
import Space from "../src/components/ui/Space/Space";
import Avatar from "../src/components/ui/Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Badge,
	parameters: {
		docs: {
			description: {
				component:
					"This badge wraps [Ant Design Badge](https://ant.design/components/badge/) and supports all the same props.",
			},
		},
	},
	title: "Components/Badge",
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const BasicUsage: Story = {
	args: {
		count: 12,
	},
};

export const AllVariants = () => (
	<Space orientation="vertical">
		<Space orientation="horizontal">
			<Badge count={5}>
				<Avatar shape="square" size="large" />
			</Badge>
			<Badge count={0} showZero>
				<Avatar shape="square" size="large" />
			</Badge>
			<Badge count={99} overflowCount={10}>
				<Avatar shape="square" size="large" />
			</Badge>
		</Space>
		<Space orientation="horizontal">
			<Badge dot>
				<FontAwesomeIcon icon={faInbox} style={{ fontSize: 16 }} />
			</Badge>
		</Space>
	</Space>
);

AllVariants.parameters = {
	docs: {
		description: {
			story:
				"This story shows all combinations of the Badge component with different props, such as `dot` and `overflowCount` to change the notification style.",
		},
	},
};
