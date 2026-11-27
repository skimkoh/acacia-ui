import type { Meta, StoryObj } from "@storybook/react-vite";
import Masthead from "../src/components/ui/Masthead/Masthead";

const meta = {
	component: Masthead,
	parameters: {
		docs: {
			description: {
				component:
					"A compact full-width banner for displaying a short sentence.",
			},
		},
	},
	title: "Components/Masthead",
	tags: ["autodocs"],
} satisfies Meta<typeof Masthead>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
	args: {
		text: "A sentence for the masthead.",
	},
};

export const WithChildren: Story = {
	render: () => (
		<Masthead>
			<strong>Important:</strong> System maintenance begins at 10:00 PM.
		</Masthead>
	),
	parameters: {
		docs: {
			description: {
				story: "Use children when the masthead needs emphasized or mixed text.",
			},
		},
	},
};

export const Sticky: Story = {
	args: {
		text: "This masthead stays at the top while the page is scrolled.",
		sticky: true,
	},
};
