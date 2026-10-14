import type { Meta, StoryObj } from "@storybook/react-vite";
import { Upload as AntdUpload, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import Upload from "../src/components/ui/Upload/Upload";

const meta = {
	component: Upload,
	parameters: {
		docs: {
			description: {
				component:
					"Use Upload when users need to select one or more files, see upload progress, or drag files into an upload area. This component wraps [Ant Design Upload](https://ant.design/components/upload/) and supports its props.",
			},
		},
	},
	title: "Components/Upload",
	tags: ["autodocs"],
	argTypes: {
		accept: { control: "text" },
		disabled: { control: "boolean" },
		multiple: { control: "boolean" },
	},
} satisfies Meta<typeof Upload>;

export default meta;

type Story = StoryObj<typeof Upload>;

export const BasicUsage: Story = {
	args: {
		beforeUpload: () => false,
		multiple: true,
	},
	render: (args) => (
		<Upload {...args}>
			<Button icon={<FontAwesomeIcon icon={faUpload} />}>Select files</Button>
		</Upload>
	),
};

export const DragAndDrop: Story = {
	render: () => (
		<AntdUpload.Dragger beforeUpload={() => false} multiple>
			<p className="ant-upload-drag-icon">
				<FontAwesomeIcon icon={faInbox} />
			</p>
			<p className="ant-upload-text">Click or drag files to this area</p>
			<p className="ant-upload-hint">
				Select one or more files to add them to the list.
			</p>
		</AntdUpload.Dragger>
	),
};

export const PictureCard: Story = {
	render: () => (
		<Upload listType="picture-card" beforeUpload={() => false}>
			<div>
				<FontAwesomeIcon icon={faPlus} />
				<div style={{ marginTop: 8 }}>Upload</div>
			</div>
		</Upload>
	),
};

export const PictureList: Story = {
	args: {
		accept: "image/*",
		beforeUpload: () => false,
		listType: "picture",
		multiple: true,
	},
	render: (args) => (
		<Upload {...args}>
			<Button icon={<FontAwesomeIcon icon={faUpload} />}>Select images</Button>
		</Upload>
	),
};

export const PngOnly: Story = {
	args: {
		accept: ".png",
		beforeUpload: (file) =>
			file.type === "image/png" ? false : AntdUpload.LIST_IGNORE,
	},
	render: (args) => (
		<Upload {...args}>
			<Button icon={<FontAwesomeIcon icon={faUpload} />}>
				Select PNG image
			</Button>
		</Upload>
	),
};

export const LimitedCount: Story = {
	args: {
		beforeUpload: () => false,
		maxCount: 1,
	},
	render: (args) => (
		<Upload {...args}>
			<Button icon={<FontAwesomeIcon icon={faUpload} />}>
				Select one file
			</Button>
		</Upload>
	),
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
	render: (args) => (
		<Upload {...args}>
			<Button disabled icon={<FontAwesomeIcon icon={faUpload} />}>
				Select files
			</Button>
		</Upload>
	),
};
