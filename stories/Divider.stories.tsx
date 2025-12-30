import type { Meta, StoryObj } from "@storybook/react";
import Divider from "../src/components/ui/Divider/Divider";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Typography from "../src/components/ui/Typography/Typography";

const meta = {
	component: Divider,
	parameters: {
		docs: {
			description: {
				component:
					"This divider wraps [Ant Design Divider](https://ant.design/components/divider/) and supports all the same props.",
			},
		},
	},
	title: "Components/Divider",
	tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const BasicUsage = () => (
	<>
		<Typography.Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
			merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
			quo modo.
		</Typography.Text>
		<Divider />
		<Typography.Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
			merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
			quo modo.
		</Typography.Text>

		<Divider dashed />
		<Typography.Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
			merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
			quo modo.
		</Typography.Text>
	</>
);
