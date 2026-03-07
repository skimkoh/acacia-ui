import type { Meta, StoryObj } from "@storybook/react";
import Rate from "../src/components/ui/Rate/Rate";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const meta = {
	component: Rate,
	parameters: {
		docs: {
			description: {
				component:
					"Rate wraps [Ant Design Rate](https://ant.design/components/rate/) and supports all the same props.",
			},
		},
	},
	title: "Components/Rate",
	tags: ["autodocs"],
} satisfies Meta<typeof Rate>;

export default meta;

type Story = StoryObj<typeof Rate>;

export const BasicUsage: Story = {};

export const BasicUsageWithHalfStars: Story = {
	args: {
		allowHalf: true,
		defaultValue: 2.5,
	},
};

export const DisabledRate: Story = {
	args: {
		defaultValue: 2,
		disabled: true,
	},
};

export const RateSizes: Story = {
	args: {
		size: "large",
	},
};

export const RateWithOtherCharacter: Story = {
	args: {
		character: <FontAwesomeIcon icon={faHeart} />,
	},
};
