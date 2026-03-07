import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Statistic from "../src/components/ui/Statistic/Statistic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const meta = {
	component: Statistic,
	parameters: {
		docs: {
			description: {
				component:
					"This statistic wraps [Ant Design Statistic](https://ant.design/components/statistic/) and supports all the same props.",
			},
		},
	},
	title: "Components/Statistic",
} satisfies Meta<typeof Statistic>;

export default meta;

type Story = StoryObj<typeof Statistic>;
type StatisticStory = StoryObj<typeof Statistic.Timer>;

export const BasicUsage: Story = {
	args: {
		title: "Active Users",
		value: 112893,
	},
};

export const WithPrefixOrSuffix: Story = {
	args: {
		title: "Dollars",
		value: 112893,
		prefix: <FontAwesomeIcon icon={faMoneyBill} />,
		suffix: " USD",
	},
};

export const Timer: StatisticStory = {
	render: (args) => <Statistic.Timer {...args} />,
	args: {
		type: "countup",
		title: "Countup",
		value: Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
	},
};
