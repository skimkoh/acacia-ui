import type { Meta, StoryObj } from "@storybook/react";
import Space from "../src/components/ui/Space/Space";
import Avatar from "../src/components/ui/Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Avatar,
	parameters: {
		docs: {
			description: {
				component:
					"This avatar wraps [Ant Design Avatar](https://ant.design/components/avatar/) and supports all the same props.",
			},
		},
	},
	title: "Components/Avatar",
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const BasicUsage = () => (
	<Space orientation="vertical">
		<Space orientation="horizontal">
			<Avatar size="large" icon={<FontAwesomeIcon icon={faUser} />} />
			<Avatar size="default" icon={<FontAwesomeIcon icon={faUser} />} />
			<Avatar size="small" icon={<FontAwesomeIcon icon={faUser} />} />
		</Space>
		<Space orientation="horizontal">
			<Avatar
				size="large"
				shape="square"
				icon={<FontAwesomeIcon icon={faUser} />}
			/>
			<Avatar
				size="default"
				shape="square"
				icon={<FontAwesomeIcon icon={faUser} />}
			/>
			<Avatar
				size="small"
				shape="square"
				icon={<FontAwesomeIcon icon={faUser} />}
			/>
		</Space>
	</Space>
);

export const WithUserID = () => (
	<Avatar userId="JOHNLEE" icon={<FontAwesomeIcon icon={faUser} />} />
);
