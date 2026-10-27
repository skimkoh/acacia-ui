import type { Meta, StoryObj } from "@storybook/react-vite";
import { useRef, useState } from "react";
import Affix from "../src/components/ui/Affix/Affix";
import Button from "../src/components/ui/Button/Button";

const meta = {
	component: Affix,
	parameters: {
		docs: {
			description: {
				component:
					"This Affix wraps [Ant Design Affix](https://ant.design/components/affix/) and supports all the same props.",
			},
		},
	},
	title: "Components/Affix",
	tags: ["autodocs"],
} satisfies Meta<typeof Affix>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: () => (
		<div style={{ minHeight: 1000, paddingTop: 16 }}>
			<Affix offsetTop={16}>
				<Button type="primary">Affixed to the top</Button>
			</Affix>
			<div style={{ marginTop: 700 }}>
				<p>Scroll the preview to see the button stay near the top.</p>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Set `offsetTop` to keep an element fixed at a distance from the top of the viewport while scrolling.",
			},
		},
	},
};

export const Callback: Story = {
	render: () => {
		const [affixed, setAffixed] = useState(false);

		return (
			<div style={{ minHeight: 1000, paddingTop: 16 }}>
				<Affix
					offsetTop={16}
					onChange={(nextAffixed) => setAffixed(!!nextAffixed)}
				>
					<Button type={affixed ? "primary" : "default"}>
						{affixed ? "Affixed" : "Not affixed"}
					</Button>
				</Affix>
				<p aria-live="polite">
					Affix state: {affixed ? "fixed to viewport" : "in normal flow"}
				</p>
				<div style={{ marginTop: 700 }}>
					<p>Scroll to observe the state change.</p>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `onChange` to respond when Affix enters or leaves the affixed state.",
			},
		},
	},
};

export const CustomScrollTarget: Story = {
	render: () => {
		const scrollContainer = useRef<HTMLDivElement>(null);

		return (
			<div>
				<p>Scroll inside this container:</p>
				<div
					ref={scrollContainer}
					style={{
						height: 320,
						overflowY: "auto",
						border: "1px solid #d9d9d9",
						borderRadius: 8,
					}}
				>
					<div style={{ height: 720, padding: 16 }}>
						<Affix offsetTop={16} target={() => scrollContainer.current}>
							<Button type="primary">Affixed inside container</Button>
						</Affix>
						<div style={{ marginTop: 500 }}>
							<p>Content below the affixed control.</p>
						</div>
					</div>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Set `target` to a scrollable element to listen to that container instead of the window.",
			},
		},
	},
};

export const BottomOffset: Story = {
	render: () => (
		<div style={{ minHeight: 1000, paddingBottom: 16 }}>
			<div style={{ height: 700 }}>
				<p>Scroll the preview to see the button affix to the bottom.</p>
			</div>
			<Affix offsetBottom={16}>
				<Button type="primary">Affixed to the bottom</Button>
			</Affix>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Set `offsetBottom` to affix an element a distance from the bottom of the viewport.",
			},
		},
	},
};
