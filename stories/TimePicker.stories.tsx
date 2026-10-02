import { ClockCircleOutlined, SmileOutlined } from "@ant-design/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Space, TimePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const meta = {
	title: "Components/TimePicker",
	component: TimePicker,
	parameters: {
		docs: {
			description: {
				component:
					"This TimePicker wraps [Ant Design TimePicker](https://ant.design/components/time-picker/) and supports all the same props.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TimePicker>;

export default meta;

type Story = StoryObj<typeof TimePicker>;

const defaultValue = dayjs("13:30:56", "HH:mm:ss");

/**
 * Basic
 */
export const Basic: Story = {
	args: {
		defaultValue,
	},
};

/**
 * Under Control
 */
export const UnderControl: Story = {
	render: () => {
		const [value, setValue] = useState<dayjs.Dayjs | null>(defaultValue);

		return (
			<Space orientation="vertical">
				<TimePicker value={value} onChange={setValue} />

				<Button onClick={() => setValue(null)}>Clear</Button>
			</Space>
		);
	},
};

/**
 * Three Sizes
 */
export const ThreeSizes: Story = {
	render: () => (
		<Space>
			<TimePicker size="large" defaultValue={defaultValue} />

			<TimePicker size="medium" defaultValue={defaultValue} />

			<TimePicker size="small" defaultValue={defaultValue} />
		</Space>
	),
};

/**
 * Need Confirm
 */
export const NeedConfirm: Story = {
	args: {
		defaultValue,
		needConfirm: true,
	},
};

/**
 * Disabled
 */
export const Disabled: Story = {
	args: {
		defaultValue,
		disabled: true,
	},
};

/**
 * Hour and Minute
 */
export const HourAndMinute: Story = {
	args: {
		defaultValue: dayjs("13:30", "HH:mm"),
		format: "HH:mm",
	},
};

/**
 * Interval Option
 */
export const IntervalOption: Story = {
	args: {
		hourStep: 2,
		minuteStep: 15,
		secondStep: 10,
	},
};

/**
 * Addon
 */
export const Addon: Story = {
	args: {
		renderExtraFooter: () => (
			<div style={{ padding: "4px 8px" }}>Extra footer content</div>
		),
	},
};

/**
 * 12 Hours
 */
export const TwelveHours: Story = {
	args: {
		use12Hours: true,
		defaultValue: dayjs("13:30:56", "HH:mm:ss"),
		format: "h:mm:ss a",
	},
};

/**
 * Change on Scroll
 */
export const ChangeOnScroll: Story = {
	args: {
		changeOnScroll: true,
		defaultValue,
	},
};

/**
 * Time Range Picker
 */
export const TimeRangePicker: Story = {
	render: () => (
		<TimePicker.RangePicker
			defaultValue={[
				dayjs("09:00:00", "HH:mm:ss"),
				dayjs("17:00:00", "HH:mm:ss"),
			]}
		/>
	),
};

/**
 * Variants
 */
export const Variants: Story = {
	render: () => (
		<Space orientation="vertical">
			<TimePicker variant="outlined" defaultValue={defaultValue} />

			<TimePicker variant="filled" defaultValue={defaultValue} />

			<TimePicker variant="borderless" defaultValue={defaultValue} />

			<TimePicker variant="underlined" defaultValue={defaultValue} />
		</Space>
	),
};

/**
 * Status
 */
export const Status: Story = {
	render: () => (
		<Space orientation="vertical">
			<TimePicker status="error" defaultValue={defaultValue} />

			<TimePicker status="warning" defaultValue={defaultValue} />

			<TimePicker status="success" defaultValue={defaultValue} />

			<TimePicker status="validating" defaultValue={defaultValue} />
		</Space>
	),
};

/**
 * Prefix and Suffix
 */
export const PrefixAndSuffix: Story = {
	args: {
		defaultValue,
		prefix: <ClockCircleOutlined />,
		suffixIcon: <SmileOutlined />,
	},
};

/**
 * Custom Semantic DOM Styling
 */
export const CustomSemanticDOMStyling: Story = {
	args: {
		defaultValue,
		styles: {
			input: {
				fontWeight: 600,
			},
		},
	},
};
