import type { Meta, StoryObj } from "@storybook/react-vite";
import Timeline from "../src/components/ui/Timeline/Timeline";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const meta = {
	component: Timeline,
	parameters: {
		docs: {
			description: {
				component:
					"This timeline wraps [Ant Design Timeline](https://ant.design/components/timeline/) and supports all the same props.",
			},
		},
	},
	title: "Components/Timeline",
	tags: ["autodocs"],
} satisfies Meta<typeof Timeline>;

export default meta;

type Story = StoryObj<typeof Timeline>;

export const BasicUsage: Story = {
	args: {
		items: [
			{
				content: "Create a services site 2015-09-01",
			},
			{
				content: "Solve initial network problems 2015-09-01",
			},
			{
				content: "Technical testing 2015-09-01",
			},
			{
				content: "Network problems being solved 2015-09-01",
			},
		],
	},
};
export const Variant: Story = {
	args: {
		variant: "filled", // filled only works with primary
		items: [
			{
				content: "Create a services site 2015-09-01",
			},
			{
				content: "Solve initial network problems 2015-09-01",
			},
			{
				content: "Technical testing 2015-09-01",
			},
			{
				content: "Network problems being solved 2015-09-01",
			},
		],
	},
};

export const Colors: Story = {
	args: {
		items: [
			{
				color: "blue",
				content: "Create a services site 2015-09-01",
			},
			{
				color: "gray",
				content: "Solve initial network problems 2015-09-01",
			},
			{
				color: "green",
				content: "Technical testing 2015-09-01",
			},
			{
				color: "red",
				content: "Network problems being solved 2015-09-01",
			},
		],
	},
};

export const ReverseAndLoading: Story = {
	args: {
		reverse: true,
		items: [
			{
				content: "Create a services site 2015-09-01",
			},
			{
				content: "Solve initial network problems 2015-09-01",
			},
			{
				content: "Technical testing 2015-09-01",
			},
			{
				loading: true,
				content: "Network problems being solved 2015-09-01",
			},
		],
	},
};

export const Alternate: Story = {
	args: {
		mode: "alternate",
		items: [
			{
				content: "Create a services site 2015-09-01",
			},
			{
				content: "Solve initial network problems 2015-09-01",
			},
			{
				content: "Technical testing 2015-09-01",
			},
			{
				color: "red",
				content: "Network problems being solved 2015-09-01",
			},
		],
	},
};

export const Horizontal: Story = {
	args: {
		orientation: "horizontal",
		items: [
			{
				content: "Create a services site 2015-09-01",
			},
			{
				content: "Solve initial network problems 2015-09-01",
			},
			{
				content: "Technical testing 2015-09-01",
			},
			{
				content: "Network problems being solved 2015-09-01",
			},
		],
		mode: "start",
	},
};

export const WithTitle: Story = {
	args: {
		items: [
			{
				title: "2015-09-01",
				content: "Create a services site 2015-09-01",
			},
			{
				title: "2015-09-01 09:12:11",
				content: "Solve initial network problems",
			},
			{
				content: "Technical testing",
			},
			{
				title: "2015-09-01 09:12:11",
				content: "Network problems being solved",
			},
		],
		mode: "start",
	},
};
