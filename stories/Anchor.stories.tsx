import type { Meta, StoryObj } from "@storybook/react-vite";
import type { AnchorProps } from "antd";
import { useState } from "react";
import Anchor from "../src/components/ui/Anchor/Anchor";

const meta = {
	component: Anchor,
	parameters: {
		docs: {
			description: {
				component:
					"This Anchor wraps [Ant Design Anchor](https://ant.design/components/anchor/) and supports all the same props.",
			},
		},
	},
	title: "Components/Anchor",
	tags: ["autodocs"],
} satisfies Meta<typeof Anchor>;

export default meta;

type Story = StoryObj<typeof Anchor>;

type AnchorDemoProps = {
	items: NonNullable<AnchorProps["items"]>;
	anchorProps?: Omit<AnchorProps, "items">;
	horizontal?: boolean;
};

const createItems = (prefix: string) => [
	{ key: `${prefix}-one`, href: `#${prefix}-one`, title: "Section One" },
	{ key: `${prefix}-two`, href: `#${prefix}-two`, title: "Section Two" },
	{ key: `${prefix}-three`, href: `#${prefix}-three`, title: "Section Three" },
];

const AnchorDemo = ({
	items,
	anchorProps,
	horizontal = false,
}: AnchorDemoProps) => (
	<div
		style={{
			display: horizontal ? "block" : "grid",
			gridTemplateColumns: "180px minmax(0, 1fr)",
			gap: 24,
			alignItems: "start",
			minHeight: 520,
		}}
	>
		<div style={horizontal ? { marginBottom: 24 } : undefined}>
			<Anchor items={items} affix={false} {...anchorProps} />
		</div>
		<div>
			{items.map((item) => (
				<section
					key={item.key}
					id={item.href.replace("#", "")}
					style={{
						minHeight: 180,
						padding: "16px 20px",
						marginBottom: 12,
						border: "1px solid #d9d9d9",
						borderRadius: 8,
						scrollMarginTop: 16,
					}}
				>
					<h3 style={{ marginTop: 0 }}>{item.title}</h3>
					<p>
						This section is a scroll target for the Anchor. Select its link to
						jump here.
					</p>
				</section>
			))}
		</div>
	</div>
);

const basicItems = createItems("anchor-basic");

export const Basic: Story = {
	render: () => <AnchorDemo items={basicItems} />,
};

const staticItems = createItems("anchor-static");

export const StaticAnchor: Story = {
	render: () => (
		<AnchorDemo
			items={staticItems}
			anchorProps={{ affix: false, showInkInFixed: true }}
		/>
	),
	parameters: {
		docs: {
			description: {
				story: "Disable affixing to keep the Anchor in the normal page flow.",
			},
		},
	},
};

const clickItems = createItems("anchor-click");

export const CustomizeOnClick: Story = {
	render: () => {
		const [clickedHref, setClickedHref] = useState("None");

		return (
			<>
				<p>Last clicked link: {clickedHref}</p>
				<AnchorDemo
					items={clickItems}
					anchorProps={{
						onClick: (_event, link) => setClickedHref(link.href),
					}}
				/>
			</>
		);
	},
};

const offsetItems = createItems("anchor-offset");

export const TargetOffset: Story = {
	render: () => (
		<AnchorDemo
			items={offsetItems}
			anchorProps={{ affix: false, targetOffset: 80 }}
		/>
	),
	parameters: {
		docs: {
			description: {
				story: "Set a scroll offset of 80 pixels for Anchor navigation.",
			},
		},
	},
};

const changeItems = createItems("anchor-change");

export const ListenForLinkChange: Story = {
	render: () => {
		const [activeHref, setActiveHref] = useState("None");

		return (
			<>
				<p>Current active link: {activeHref}</p>
				<AnchorDemo
					items={changeItems}
					anchorProps={{
						onChange: (currentActiveLink) =>
							setActiveHref(currentActiveLink || "None"),
					}}
				/>
			</>
		);
	},
};

const replaceItems = createItems("anchor-replace");

export const ReplaceHrefInHistory: Story = {
	render: () => (
		<AnchorDemo
			items={replaceItems}
			anchorProps={{ affix: false, replace: true }}
		/>
	),
	parameters: {
		docs: {
			description: {
				story: "Replace the current browser history entry when navigating.",
			},
		},
	},
};
