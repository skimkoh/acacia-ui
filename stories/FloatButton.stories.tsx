import type { Meta, StoryObj } from "@storybook/react";
import FloatButton from "../src/components/ui/FloatButton/FloatButton";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

const meta = {
	component: FloatButton,
	parameters: {
		docs: {
			description: {
				component:
					"This FloatButton wraps [Ant Design FloatButton](https://ant.design/components/float-button/) and supports all the same props.",
			},
		},
	},
	title: "Components/FloatButton",
	tags: ["autodocs"],
} satisfies Meta<typeof FloatButton>;

export default meta;

type Story = StoryObj<typeof FloatButton>;

export const BasicUsage = () => (
	<div style={{ height: 200 }}>
		<FloatButton />
	</div>
);

export const SolidType = () => (
	<div style={{ height: 200 }}>
		<FloatButton
			icon={<FontAwesomeIcon icon={faQuestionCircle} />}
			type="primary"
		/>
	</div>
);

export const FloatButtonGroup = () => (
	<div style={{ height: 200 }}>
		<FloatButton.Group shape="circle">
			<FloatButton icon={<FontAwesomeIcon icon={faQuestionCircle} />} />
			<FloatButton />
		</FloatButton.Group>
	</div>
);
