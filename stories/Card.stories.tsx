import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from "../src/components/ui/Card/Card";
import Space from "../src/components/ui/Space/Space";
import { Row, Col } from "antd";
import { useState } from "react";

const meta = {
	component: Card,
	title: "Components/Card",
	tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Sizes: Story = {
	render: () => (
		<Space vertical size={16}>
			<Card title="Default size card" style={{ width: 300 }}>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>

			<Card size="small" title="Small size card" style={{ width: 300 }}>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
		</Space>
	),

	parameters: {
		docs: {
			source: {
				code: `<Space vertical size={16}>
				<Card
					title="Default size card"
					extra={<a href="#">More</a>}
					style={{ width: 300 }}
				>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>

				<Card
					size="small"
					title="Small size card"
					extra={<a href="#">More</a>}
					style={{ width: 300 }}
				>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
				</Space>`,
			},
		},
	},
};

export const Borderless: Story = {
	render: () => (
		<div style={{ background: "#adadad", padding: 20 }}>
			<Card title="Card title" variant="borderless" style={{ width: 300 }}>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
		</div>
	),
};

export const InColumns: Story = {
	render: () => (
		<Row gutter={16}>
			<Col span={8}>
				<Card title="Card title" variant="borderless">
					Card content
				</Card>
			</Col>

			<Col span={8}>
				<Card title="Card title" variant="borderless">
					Card content
				</Card>
			</Col>

			<Col span={8}>
				<Card title="Card title" variant="borderless">
					Card content
				</Card>
			</Col>
		</Row>
	),
};

export const WithTabs: Story = {
	render: () => {
		const tabList = [
			{
				key: "tab1",
				tab: "Tab 1",
			},
			{
				key: "tab2",
				tab: "Tab 2",
			},
		];

		const contentList: Record<string, React.ReactNode> = {
			tab1: <p>Content 1</p>,
			tab2: <p>Content 2</p>,
		};

		const tabListNoTitle = [
			{
				key: "article",
				label: "Article",
			},
			{
				key: "app",
				label: "App",
			},
			{
				key: "project",
				label: "Project",
			},
		];

		const contentListNoTitle: Record<string, React.ReactNode> = {
			article: <p>Article content</p>,
			app: <p>App content</p>,
			project: <p>Project content</p>,
		};

		const [activeTabKey1, setActiveTabKey1] = useState("tab1");
		const [activeTabKey2, setActiveTabKey2] = useState("app");

		return (
			<>
				<Card
					title="Card title"
					tabList={tabList}
					activeTabKey={activeTabKey1}
					onTabChange={setActiveTabKey1}
				>
					{contentList[activeTabKey1]}
				</Card>

				<br />
				<br />

				<Card
					tabList={tabListNoTitle}
					activeTabKey={activeTabKey2}
					onTabChange={setActiveTabKey2}
					tabProps={{ size: "middle" }}
				>
					{contentListNoTitle[activeTabKey2]}
				</Card>
			</>
		);
	},
};
