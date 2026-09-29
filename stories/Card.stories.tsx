import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from "../src/components/ui/Card/Card";
import Space from "../src/components/ui/Space/Space";

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
