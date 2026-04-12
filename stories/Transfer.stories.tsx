import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React, { useRef, useState } from "react";
import Transfer from "../src/components/ui/Transfer/Transfer";

const meta = {
	component: Transfer,
	parameters: {
		docs: {
			description: {
				component:
					"This transfer wraps [Ant Design Transfer](https://ant.design/components/transfer/) and supports all the same props.",
			},
		},
	},
	title: "Components/Transfer",
} satisfies Meta<typeof Transfer>;

export default meta;

type Story = StoryObj<typeof Transfer>;

interface RecordType {
	key: string;
	title: string;
	description: string;
}

export const BasicUsage: Story = {
	args: {
		dataSource: Array.from({ length: 20 }).map<RecordType>((_, i) => ({
			key: i.toString(),
			title: `content${i + 1}`,
			description: `description of content${i + 1}`,
		})),
		titles: ["Source", "Target"],
		render: (item) => item.title,
	},
};
