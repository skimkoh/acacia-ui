import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../src/components/ui/Modal/Modal";
import Button from "../src/components/ui/Button/Button";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Space } from "antd";

const meta = {
	component: Modal,
	parameters: {
		docs: {
			description: {
				component:
					"This modal wraps [Ant Design Modal](https://ant.design/components/modal/) and supports all the same props.",
			},
		},
	},
	title: "Components/Modal",
	tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const BasicUsage = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<>
			<Button type="primary" onClick={() => setIsModalOpen(true)}>
				Open Modal
			</Button>
			<Modal
				title="Basic Modal"
				closable={{ "aria-label": "Custom Close Button" }}
				open={isModalOpen}
				onOk={() => setIsModalOpen(false)}
				onCancel={() => setIsModalOpen(false)}
			>
				<Space orientation="vertical">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Space>
			</Modal>
		</>
	);
};

export const BasicUsageWithSubtitleAndIcon = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<>
			<Button type="primary" onClick={() => setIsModalOpen(true)}>
				Open Modal
			</Button>
			<Modal
				icon={<FontAwesomeIcon icon={faExclamationTriangle} />}
				title="Basic Modal"
				subtitle="Basic modal subtitle"
				closable={{ "aria-label": "Custom Close Button" }}
				open={isModalOpen}
				onOk={() => setIsModalOpen(false)}
				onCancel={() => setIsModalOpen(false)}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};

export const ModalTheme = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<>
			<Button type="primary" onClick={() => setIsModalOpen(true)}>
				Open Modal
			</Button>
			<Modal
				title="Basic Modal"
				headerBgTheme="mystical"
				closable={{ "aria-label": "Custom Close Button" }}
				open={isModalOpen}
				onOk={() => setIsModalOpen(false)}
				onCancel={() => setIsModalOpen(false)}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};

ModalTheme.parameters = {
	docs: {
		description: {
			story:
				"You can change the header's background theme via the `headerBgTheme` props or through the global config",
		},
	},
};
