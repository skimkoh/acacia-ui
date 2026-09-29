import type { Meta, StoryObj } from "@storybook/react-vite";
import Space from "../src/components/ui/Space/Space";
import { Button } from "antd";
import Popconfirm from "../src/components/ui/Popconfirm/Popconfirm";
import Card from "../src/components/ui/Card/Card";

const meta = {
	component: Space,
	title: "Components/Space",
	tags: ["autodocs"],
} satisfies Meta<typeof Space>;

export default meta;

type Story = StoryObj<typeof Space>;

export const BasicUsage: Story = {
	render: () => (
		<Space>
			Space
			<Button type="primary">Button</Button>
			<Popconfirm
				title="Are you sure delete this task?"
				okText="Yes"
				cancelText="No"
			>
				<Button>Confirm</Button>
			</Popconfirm>
		</Space>
	),

	parameters: {
		docs: {
			source: {
				code: `<Space>
                Space
                <Button type="primary">Button</Button>
                <Upload>
                    <Button icon={<UploadOutlined />}>
                    Click to Upload
                    </Button>
                </Upload>
                <Popconfirm
                    title="Are you sure delete this task?"
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>Confirm</Button>
                </Popconfirm>
                </Space>`,
			},
		},
	},
};

export const Vertical: Story = {
	render: () => (
		<Space orientation="vertical" size="medium" style={{ display: "flex" }}>
			<Card title="Card" size="small">
				<p>Card content</p>
				<p>Card content</p>
			</Card>

			<Card title="Card" size="small">
				<p>Card content</p>
				<p>Card content</p>
			</Card>

			<Card title="Card" size="small">
				<p>Card content</p>
				<p>Card content</p>
			</Card>
		</Space>
	),

	parameters: {
		docs: {
			source: {
				code: `<Space
                orientation="vertical"
                size="medium"
                style={{ display: "flex" }}
                >
                <Card title="Card" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Card title="Card" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Card title="Card" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </Space>`,
			},
		},
	},
};
