import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ListyRef } from "antd";
import { useRef } from "react";
import Button from "../src/components/ui/Button/Button";
import Listy from "../src/components/ui/Listy/Listy";

type ListItem = {
	key: string;
	title: string;
	description: string;
	group?: string;
};

const basicItems: ListItem[] = [
	{
		key: "design-system",
		title: "Design system",
		description: "Shared tokens and components for product teams.",
	},
	{
		key: "accessibility",
		title: "Accessibility review",
		description: "Review keyboard navigation and screen reader support.",
	},
	{
		key: "release-notes",
		title: "Release notes",
		description: "Prepare the next release summary.",
	},
];

const virtualItems: ListItem[] = Array.from({ length: 10_000 }, (_, index) => ({
	key: `item-${index}`,
	title: `Item ${index + 1}`,
	description: `This is row ${index + 1} in a 10,000 item virtual list.`,
}));

const groupedItems: ListItem[] = [
	"Engineering",
	"Design",
	"Operations",
].flatMap((group) =>
	Array.from({ length: 12 }, (_, index) => ({
		key: `${group.toLowerCase()}-${index + 1}`,
		title: `${group} task ${index + 1}`,
		description: `A task in the ${group.toLowerCase()} group.`,
		group,
	})),
);

const meta = {
	component: Listy,
	parameters: {
		docs: {
			description: {
				component:
					"This Listy re-exports [Ant Design Listy](https://ant.design/components/listy/) and supports its virtualization, grouping, and scroll APIs.",
			},
		},
	},
	title: "Components/Listy",
	tags: ["autodocs"],
} satisfies Meta<typeof Listy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: () => (
		<Listy
			items={basicItems}
			rowKey="key"
			itemRender={(item) => (
				<div style={{ padding: "12px 16px" }}>
					<strong>{item.title}</strong>
					<div>{item.description}</div>
				</div>
			)}
		/>
	),
};

export const VirtualScrolling: Story = {
	render: () => (
		<Listy
			items={virtualItems}
			rowKey="key"
			virtual
			height={360}
			itemRender={(item) => (
				<div style={{ padding: "12px 16px" }}>
					<strong>{item.title}</strong>
					<div>{item.description}</div>
				</div>
			)}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Virtual scrolling renders only visible rows. Set `height` when enabling `virtual`.",
			},
		},
	},
};

export const GroupingAndStickyHeaders: Story = {
	render: () => (
		<Listy
			items={groupedItems}
			rowKey="key"
			height={400}
			virtual
			sticky
			group={{
				key: (item) => item.group ?? "Other",
				title: (groupKey, items) => (
					<div
						style={{
							padding: "8px 16px",
							fontWeight: 600,
							background: "var(--ant-color-bg-container)",
						}}
					>
						{groupKey} ({items.length})
					</div>
				),
			}}
			itemRender={(item) => (
				<div style={{ padding: "12px 16px" }}>
					<strong>{item.title}</strong>
					<div>{item.description}</div>
				</div>
			)}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Derive sections with `group` and set `sticky` to keep group headers visible while scrolling.",
			},
		},
	},
};

export const RichContent: Story = {
	render: () => (
		<Listy
			items={basicItems}
			rowKey="key"
			itemRender={(item, index) => (
				<div style={{ padding: 16 }}>
					<strong>
						{index + 1}. {item.title}
					</strong>
					<p>{item.description}</p>
					<p style={{ marginBottom: 0 }}>
						This row can contain richer content and have a different height.
					</p>
				</div>
			)}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					"`itemRender` can render arbitrary content, including rows with different heights.",
			},
		},
	},
};

export const ImperativeScrolling: Story = {
	render: () => {
		const listRef = useRef<ListyRef>(null);

		return (
			<div>
				<div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
					<Button
						onClick={() =>
							listRef.current?.scrollTo({ key: "item-5000", align: "top" })
						}
					>
						Scroll to item 5,001
					</Button>
					<Button onClick={() => listRef.current?.scrollTo(0)}>
						Scroll to top
					</Button>
				</div>
				<Listy
					ref={listRef}
					items={virtualItems}
					rowKey="key"
					virtual
					height={360}
					itemRender={(item) => (
						<div style={{ padding: "12px 16px" }}>
							<strong>{item.title}</strong>
							<div>{item.description}</div>
						</div>
					)}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the Listy ref to scroll to an item by key or to a pixel offset.",
			},
		},
	},
};
