import { CloseSquareFilled } from "@ant-design/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { AutoCompleteProps } from "antd";
import { useState } from "react";
import AutoComplete from "../src/components/ui/AutoComplete/AutoComplete";
import Input from "../src/components/ui/Input/Input";

const getPanelValue = (searchText: string) =>
	searchText
		? [
				{ value: searchText },
				{ value: searchText.repeat(2) },
				{ value: searchText.repeat(3) },
			]
		: [];

const meta = {
	component: AutoComplete,
	parameters: {
		docs: {
			description: {
				component:
					"AutoComplete wraps [Ant Design AutoComplete](https://ant.design/components/auto-complete/) and supports all the same props. Use it to provide suggestions while allowing users to enter free-form text.",
			},
		},
	},
	title: "Components/AutoComplete",
	tags: ["autodocs"],
} satisfies Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof AutoComplete>;

export const BasicUsage: Story = {
	render: () => {
		const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
		return (
			<AutoComplete
				options={options}
				showSearch={{
					onSearch: (text) => setOptions(getPanelValue(text)),
				}}
				placeholder="Type to see suggestions"
				style={{ width: 200 }}
			/>
		);
	},
};

export const ControlledMode: Story = {
	render: () => {
		const [value, setValue] = useState("");
		const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
		return (
			<AutoComplete
				value={value}
				options={options}
				showSearch={{
					onSearch: (text) => setOptions(getPanelValue(text)),
				}}
				onChange={setValue}
				placeholder="Controlled input"
				style={{ width: 200 }}
			/>
		);
	},
};

export const EmailSuggestions: Story = {
	render: () => {
		const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
		const handleSearch = (value: string) => {
			setOptions(
				!value || value.includes("@")
					? []
					: ["gmail.com", "163.com", "qq.com"].map((domain) => ({
							label: `${value}@${domain}`,
							value: `${value}@${domain}`,
						})),
			);
		};

		return (
			<AutoComplete
				style={{ width: 240 }}
				showSearch={{ onSearch: handleSearch }}
				placeholder="Enter an email username"
				options={options}
			/>
		);
	},
};

export const CustomTextArea: Story = {
	render: () => {
		const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
		return (
			<AutoComplete
				options={options}
				style={{ width: 280 }}
				showSearch={{
					onSearch: (text) => setOptions(getPanelValue(text)),
				}}
			>
				<Input.TextArea
					placeholder="Type to see suggestions"
					style={{ height: 50 }}
				/>
			</AutoComplete>
		);
	},
};

export const CaseInsensitiveSearch: Story = {
	args: {
		style: { width: 240 },
		options: [
			{ value: "Burns Bay Road" },
			{ value: "Downing Street" },
			{ value: "Wall Street" },
		],
		placeholder: "Try typing `b`",
		showSearch: {
			filterOption: (inputValue, option) =>
				String(option?.value ?? "")
					.toUpperCase()
					.includes(inputValue.toUpperCase()),
		},
	},
};

export const CertainCategory: Story = {
	args: {
		style: { width: 250 },
		popupMatchSelectWidth: 400,
		options: [
			{
				label: "Libraries",
				options: [
					{
						value: "AntDesign",
						label: <span>AntDesign — 10,000 results</span>,
					},
					{
						value: "AntDesign UI",
						label: <span>AntDesign UI — 10,600 results</span>,
					},
				],
			},
			{
				label: "Solutions",
				options: [
					{
						value: "AntDesign UI FAQ",
						label: <span>AntDesign UI FAQ — 60,100 results</span>,
					},
					{
						value: "AntDesign FAQ",
						label: <span>AntDesign FAQ — 30,010 results</span>,
					},
				],
			},
			{
				label: "Articles",
				options: [
					{
						value: "AntDesign design language",
						label: <span>AntDesign design language — 100,000 results</span>,
					},
				],
			},
		],
		placeholder: "Search by category",
	},
};

export const UncertainCategory: Story = {
	render: () => {
		const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
		const handleSearch = (query: string) => {
			setOptions(
				query
					? [0, 1, 2].map((index) => {
							const result = `${query}${index}`;
							return {
								value: result,
								label: (
									<div
										style={{
											display: "flex",
											justifyContent: "space-between",
										}}
									>
										<span>
											Found {query} in {result}
										</span>
										<span>{100 + index * 50} results</span>
									</div>
								),
							};
						})
					: [],
			);
		};

		return (
			<AutoComplete
				popupMatchSelectWidth={252}
				style={{ width: 300 }}
				options={options}
				showSearch={{ onSearch: handleSearch }}
			>
				<Input.Search
					size="large"
					placeholder="Search across categories"
					enterButton
				/>
			</AutoComplete>
		);
	},
};

export const ValidationStatus: Story = {
	render: () => {
		const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
		const updateOptions = (text: string) => setOptions(getPanelValue(text));
		return (
			<div style={{ display: "grid", gap: 12, width: 240 }}>
				<AutoComplete
					options={options}
					showSearch={{ onSearch: updateOptions }}
					status="error"
					placeholder="Error"
				/>
				<AutoComplete
					options={options}
					showSearch={{ onSearch: updateOptions }}
					status="warning"
					placeholder="Warning"
				/>
			</div>
		);
	},
};

export const Variants: Story = {
	render: () => {
		const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
		const showSearch = {
			onSearch: (text: string) => setOptions(getPanelValue(text)),
		};
		return (
			<div style={{ display: "grid", gap: 12, width: 240 }}>
				<AutoComplete
					options={options}
					showSearch={showSearch}
					placeholder="Outlined"
				/>
				<AutoComplete
					options={options}
					showSearch={showSearch}
					variant="filled"
					placeholder="Filled"
				/>
				<AutoComplete
					options={options}
					showSearch={showSearch}
					variant="borderless"
					placeholder="Borderless"
				/>
				<AutoComplete
					options={options}
					showSearch={showSearch}
					variant="underlined"
					placeholder="Underlined"
				/>
			</div>
		);
	},
};

export const CustomizeClearButton: Story = {
	render: () => {
		const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
		const showSearch = {
			onSearch: (text: string) => setOptions(getPanelValue(text)),
		};
		return (
			<div style={{ display: "grid", gap: 12, width: 240 }}>
				<AutoComplete
					options={options}
					showSearch={showSearch}
					placeholder="Clear button disabled"
					allowClear={false}
				/>
				<AutoComplete
					options={options}
					showSearch={showSearch}
					placeholder="Custom clear icon"
					allowClear={{ clearIcon: <CloseSquareFilled /> }}
				/>
			</div>
		);
	},
};
