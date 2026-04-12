import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React, { useRef, useState } from "react";
import Tour from "../src/components/ui/Tour/Tour";
import Button from "../src/components/ui/Button/Button";
import Divider from "../src/components/ui/Divider/Divider";
import Space from "../src/components/ui/Space/Space";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const meta = {
	component: Tour,
	parameters: {
		docs: {
			description: {
				component:
					"This tour wraps [Ant Design Tour](https://ant.design/components/tour/) and supports all the same props.",
			},
		},
	},
	title: "Components/Tour",
} satisfies Meta<typeof Tour>;

export default meta;

type Story = StoryObj<typeof Tour>;

export const BasicUsage = () => {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<Button type="primary" onClick={() => setOpen(true)}>
				Begin Tour
			</Button>
			<Divider />
			<Space>
				<Button ref={ref1}>Upload</Button>
				<Button ref={ref2} type="primary">
					Save
				</Button>
				<Button ref={ref3} icon={<FontAwesomeIcon icon={faEllipsis} />} />
			</Space>
			<Tour
				open={open}
				onClose={() => setOpen(false)}
				steps={[
					{
						title: "Upload File",
						description: "Put your files here.",
						cover: (
							<img
								draggable={false}
								alt="tour.png"
								src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
							/>
						),
						target: () => ref1.current,
					},
					{
						title: "Save",
						description: "Save your changes.",
						target: () => ref2.current,
					},
					{
						title: "Other Actions",
						description: "Click to see other actions.",
						target: () => ref3.current,
					},
				]}
			/>
		</>
	);
};
