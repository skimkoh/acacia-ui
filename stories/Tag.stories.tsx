import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Tag from "../src/components/ui/Tag/Tag";
import Space from "../src/components/ui/Space/Space";

const meta = {
	component: Tag,
	parameters: {
		docs: {
			description: {
				component:
					"This tag wraps [Ant Design Tag](https://ant.design/components/tag/) and supports all the same props.",
			},
		},
	},
	title: "Components/Tag",
	argTypes: {
		color: {
			type: "string",
		},
	},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

export const BasicUsage: Story = {
	args: {
		children: "Example Tag",
	},
};

export const TagWithNewColors = () => (
	<Space orientation="vertical">
		<Tag color="cobalt-blue" variant="solid">
			Example Tag
		</Tag>
		<Tag color="pastel-red" variant="solid">
			Example Tag
		</Tag>
	</Space>
);

TagWithNewColors.parameters = {
	docs: {
		description: {
			story:
				"Added new colors `cobalt-blue` & `pastel-red` to better reflect themed colors ",
		},
	},
};
