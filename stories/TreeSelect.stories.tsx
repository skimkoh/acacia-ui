import type { Meta, StoryObj } from "@storybook/react-vite";
import Space from "../src/components/ui/Space/Space";
import TreeSelect from "../src/components/ui/TreeSelect/TreeSelect";

const treeData = [
	{
		title: "Engineering",
		value: "engineering",
		children: [
			{ title: "Frontend", value: "frontend" },
			{ title: "Platform", value: "platform" },
		],
	},
	{
		title: "Design",
		value: "design",
		children: [
			{ title: "Product Design", value: "product-design" },
			{ title: "Research", value: "research" },
		],
	},
];

const meta = {
	component: TreeSelect,
	parameters: {
		docs: {
			description: {
				component:
					"Use TreeSelect when selectable values follow a hierarchy, such as an organization or folder structure. This component wraps [Ant Design TreeSelect](https://ant.design/components/tree-select/) and supports its props.",
			},
		},
	},
	title: "Components/TreeSelect",
	tags: ["autodocs"],
	argTypes: {
		disabled: { control: "boolean" },
		multiple: { control: "boolean" },
		placeholder: { control: "text" },
		size: { control: "select", options: ["small", "middle", "large"] },
	},
} satisfies Meta<typeof TreeSelect>;

export default meta;

type Story = StoryObj<typeof TreeSelect>;

export const BasicUsage: Story = {
	args: {
		placeholder: "Select a team",
		treeData,
		treeDefaultExpandAll: true,
		style: { width: "100%" },
	},
};

export const MultipleSelection: Story = {
	args: {
		multiple: true,
		placeholder: "Select teams",
		treeData,
		treeDefaultExpandAll: true,
		style: { width: "100%" },
	},
};

export const Checkable: Story = {
	args: {
		placeholder: "Select teams",
		treeCheckable: true,
		treeData,
		treeDefaultExpandAll: true,
		style: { width: "100%" },
	},
};

export const Searchable: Story = {
	args: {
		placeholder: "Search teams",
		showSearch: true,
		treeData,
		treeDefaultExpandAll: true,
		style: { width: "100%" },

		treeNodeFilterProp: "title",
	},
};

export const WithTreeLines: Story = {
	args: {
		placeholder: "Select a team",
		treeData,
		treeDefaultExpandAll: true,
		style: { width: "100%" },

		treeLine: true,
	},
};

export const Variants: Story = {
	render: () => (
		<Space orientation="vertical">
			<TreeSelect
				placeholder="Outlined"
				treeData={treeData}
				treeDefaultExpandAll
				variant="outlined"
				style={{ width: "100%" }}
			/>
			<TreeSelect
				placeholder="Filled"
				treeData={treeData}
				treeDefaultExpandAll
				variant="filled"
				style={{ width: "100%" }}
			/>
			<TreeSelect
				placeholder="Borderless"
				treeData={treeData}
				treeDefaultExpandAll
				variant="borderless"
				style={{ width: "100%" }}
			/>
			<TreeSelect
				placeholder="Underlined"
				treeData={treeData}
				treeDefaultExpandAll
				variant="underlined"
				style={{ width: "100%" }}
			/>
		</Space>
	),
};

export const ValidationStatus: Story = {
	render: () => (
		<Space orientation="vertical">
			<TreeSelect
				placeholder="Error state"
				status="error"
				treeData={treeData}
				style={{ width: "100%" }}
			/>
			<TreeSelect
				placeholder="Warning state"
				status="warning"
				treeData={treeData}
				style={{ width: "100%" }}
			/>
		</Space>
	),
};
