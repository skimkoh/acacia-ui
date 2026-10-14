import type { Meta, StoryObj } from "@storybook/react-vite";
import Flex from "../src/components/ui/Flex/Flex";
import Radio from "../src/components/ui/Radio/Radio";
import Slider from "../src/components/ui/Slider/Slider";

import React from "react";
import { type FlexProps, Segmented, Button } from "antd";

const meta = {
	component: Flex,
	title: "Components/Flex",
	tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

const boxStyle: React.CSSProperties = {
	width: "100%",
	height: 120,
	borderRadius: 6,
	border: "1px solid #40a9ff",
};

const justifyOptions: FlexProps["justify"][] = [
	"flex-start",
	"center",
	"flex-end",
	"space-between",
	"space-around",
	"space-evenly",
];

const alignOptions: FlexProps["align"][] = ["flex-start", "center", "flex-end"];

export default meta;

type Story = StoryObj<typeof Flex>;

export const Direction: Story = {
	render: () => {
		const [value, setValue] = React.useState<"horizontal" | "vertical">(
			"horizontal",
		);

		const baseStyle: React.CSSProperties = {
			width: "25%",
			height: 54,
		};

		return (
			<Flex gap="medium" vertical>
				<Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
					<Radio value="horizontal">horizontal</Radio>
					<Radio value="vertical">vertical</Radio>
				</Radio.Group>

				<Flex vertical={value === "vertical"}>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							style={{
								...baseStyle,
								backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
							}}
						/>
					))}
				</Flex>
			</Flex>
		);
	},

	parameters: {
		docs: {
			source: {
				code: `const [value, setValue] = React.useState("horizontal");

                <Flex gap="medium" vertical>
                <Radio.Group
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    <Radio value="horizontal">horizontal</Radio>
                    <Radio value="vertical">vertical</Radio>
                </Radio.Group>

                <Flex vertical={value === "vertical"}>
                    {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        style={{
                        width: "25%",
                        height: 54,
                        backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
                        }}
                    />
                    ))}
                </Flex>
                </Flex>`,
			},
		},
	},
};

export const JustifyAndAlign: Story = {
	render: () => {
		const [justify, setJustify] = React.useState<FlexProps["justify"]>(
			justifyOptions[0],
		);
		const [alignItems, setAlignItems] = React.useState<FlexProps["align"]>(
			alignOptions[0],
		);

		return (
			<Flex gap="medium" align="start" vertical>
				<p>Select justify:</p>
				<Segmented
					options={justifyOptions}
					value={justify}
					onChange={setJustify}
				/>

				<p>Select align:</p>
				<Segmented
					options={alignOptions}
					value={alignItems}
					onChange={setAlignItems}
				/>

				<Flex style={boxStyle} justify={justify} align={alignItems}>
					<Button type="primary">Primary</Button>
					<Button type="primary">Primary</Button>
					<Button type="primary">Primary</Button>
					<Button type="primary">Primary</Button>
				</Flex>
			</Flex>
		);
	},

	parameters: {
		docs: {
			source: {
				code: `<Flex gap="medium" align="start" vertical>
                <p>Select justify:</p>
                <Segmented
                    options={justifyOptions}
                    value={justify}
                    onChange={setJustify}
                />

                <p>Select align:</p>
                <Segmented
                    options={alignOptions}
                    value={alignItems}
                    onChange={setAlignItems}
                />

                <Flex
                    style={boxStyle}
                    justify={justify}
                    align={alignItems}
                >
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button>
                </Flex>
                </Flex>`,
			},
		},
	},
};

export const Gap: Story = {
	render: () => {
		const [gapSize, setGapSize] = React.useState<
			FlexProps["gap"] | "customize"
		>("small");
		const [customGapSize, setCustomGapSize] = React.useState<number>(0);

		return (
			<Flex gap="medium" vertical>
				<Radio.Group
					value={gapSize}
					onChange={(e) => setGapSize(e.target.value)}
				>
					{["small", "medium", "large", "customize"].map((size) => (
						<Radio key={size} value={size}>
							{size}
						</Radio>
					))}
				</Radio.Group>

				{gapSize === "customize" && (
					<Slider value={customGapSize} onChange={setCustomGapSize} />
				)}

				<Flex gap={gapSize !== "customize" ? gapSize : customGapSize}>
					<Button type="primary">Primary</Button>
					<Button>Default</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="link">Link</Button>
				</Flex>
			</Flex>
		);
	},

	parameters: {
		docs: {
			source: {
				code: `<Flex gap="medium" vertical>
                        <Radio.Group
                            value={gapSize}
                            onChange={(e) => setGapSize(e.target.value)}
                        >
                            {["small", "medium", "large", "customize"].map((size) => (
                            <Radio key={size} value={size}>
                                {size}
                            </Radio>
                            ))}
                        </Radio.Group>

                        {gapSize === "customize" && (
                            <Slider
                            value={customGapSize}
                            onChange={setCustomGapSize}
                            />
                        )}

                        <Flex
                            gap={gapSize !== "customize" ? gapSize : customGapSize}
                        >
                            <Button type="primary">Primary</Button>
                            <Button>Default</Button>
                            <Button type="dashed">Dashed</Button>
                            <Button type="link">Link</Button>
                        </Flex>
                        </Flex>`,
			},
		},
	},
};
