import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Tree from "../src/components/ui/Tree/Tree";

const meta = {
	component: Tree,
	parameters: {
		docs: {
			description: {
				component:
					"This tree wraps [Ant Design Tree](https://ant.design/components/tree/) and supports all the same props.",
			},
		},
	},
	title: "Components/Tree",
} satisfies Meta<typeof Tree>;

export default meta;

type Story = StoryObj<typeof Tree>;
type DirectoryTreeStory = StoryObj<typeof Tree.DirectoryTree>;

export const BasicUsage: Story = {
	args: {
		checkable: true,
		defaultExpandedKeys: ["0-0-0", "0-0-1"],
		defaultSelectedKeys: ["0-0-1"],
		defaultCheckedKeys: ["0-0-0", "0-0-1"],

		treeData: [
			{
				title: "parent 1",
				key: "0-0",
				children: [
					{
						title: "parent 1-0",
						key: "0-0-0",
						disabled: true,
						children: [
							{
								title: "leaf",
								key: "0-0-0-0",
								disableCheckbox: true,
							},
							{
								title: "leaf",
								key: "0-0-0-1",
							},
						],
					},
					{
						title: "parent 1-1",
						key: "0-0-1",
						children: [
							{
								title: <span style={{ color: "#1677ff" }}>sss</span>,
								key: "0-0-1-0",
							},
						],
					},
				],
			},
		],
	},
};

export const BlockNode: Story = {
	args: {
		checkable: true,
		defaultSelectedKeys: ["0-1"],
		defaultExpandAll: true,
		blockNode: true,
		treeData: [
			{
				title: "parent",
				key: "0",
				children: [
					{
						title: "child 1",
						key: "0-0",
						disabled: true,
					},
					{
						title: "child 2",
						key: "0-1",
						disableCheckbox: true,
					},
				],
			},
		],
	},
};

export const DirectoryTree: DirectoryTreeStory = {
	render: (args) => <Tree.DirectoryTree {...args} />,
	args: {
		multiple: true,
		draggable: true,
		defaultExpandAll: true,
		treeData: [
			{
				title: "parent 0",
				key: "0-0",
				children: [
					{ title: "leaf 0-0", key: "0-0-0", isLeaf: true },
					{ title: "leaf 0-1", key: "0-0-1", isLeaf: true },
				],
			},
			{
				title: "parent 1",
				key: "0-1",
				children: [
					{ title: "leaf 1-0", key: "0-1-0", isLeaf: true },
					{ title: "leaf 1-1", key: "0-1-1", isLeaf: true },
				],
			},
		],
	},
};
