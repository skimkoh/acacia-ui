import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TableProps } from "antd";
import { useState } from "react";
import Table from "../src/components/ui/Table/Table";

type DataRecord = {
	key: string;
	name: string;
	age: number;
	address: string;
	status: "Active" | "Pending";
};

const data: DataRecord[] = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		status: "Active",
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		status: "Pending",
	},
	{
		key: "3",
		name: "Joe Black",
		age: 28,
		address: "Sydney No. 1 Lake Park",
		status: "Active",
	},
	{
		key: "4",
		name: "Jim Red",
		age: 36,
		address: "London No. 2 Lake Park",
		status: "Pending",
	},
];

const columns: TableProps<DataRecord>["columns"] = [
	{ title: "Name", dataIndex: "name", key: "name" },
	{ title: "Age", dataIndex: "age", key: "age" },
	{ title: "Address", dataIndex: "address", key: "address" },
	{ title: "Status", dataIndex: "status", key: "status" },
];

const meta = {
	component: Table,
	parameters: {
		docs: {
			description: {
				component:
					"This Table wraps [Ant Design Table](https://ant.design/components/table/) and supports all the same props.",
			},
		},
	},
	title: "Components/Table",
	tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
	render: () => <Table columns={columns} dataSource={data} />,
};

export const SortAndFilter: Story = {
	render: () => (
		<Table
			dataSource={data}
			columns={[
				{
					title: "Name",
					dataIndex: "name",
					key: "name",
					sorter: (a: DataRecord, b: DataRecord) =>
						a.name.localeCompare(b.name),
				},
				{
					title: "Age",
					dataIndex: "age",
					key: "age",
					sorter: (a: DataRecord, b: DataRecord) => a.age - b.age,
					defaultSortOrder: "ascend",
				},
				{
					title: "Address",
					dataIndex: "address",
					key: "address",
				},
				{
					title: "Status",
					dataIndex: "status",
					key: "status",
					filters: [
						{ text: "Active", value: "Active" },
						{ text: "Pending", value: "Pending" },
					],
					onFilter: (value, record) => record.status === value,
				},
			]}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Add column sorters and filters to let users organize and narrow table data.",
			},
		},
	},
};

export const RowSelection: Story = {
	render: () => {
		const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

		return (
			<div>
				<p aria-live="polite">
					Selected rows:{" "}
					{selectedRowKeys.length ? selectedRowKeys.join(", ") : "None"}
				</p>
				<Table
					rowSelection={{
						selectedRowKeys,
						onChange: (keys) => setSelectedRowKeys(keys),
					}}
					columns={columns}
					dataSource={data}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Configure `rowSelection` to select rows and manage selected keys.",
			},
		},
	},
};

export const Pagination: Story = {
	render: () => {
		const paginatedData = Array.from({ length: 32 }, (_, index) => {
			const person = data[index % data.length];
			return {
				...person,
				key: `row-${index + 1}`,
				name: `${person.name} ${index + 1}`,
			};
		});

		return (
			<Table
				columns={columns}
				dataSource={paginatedData}
				pagination={{ defaultPageSize: 5, showSizeChanger: true }}
			/>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Configure pagination, including the initial page size and page-size selector.",
			},
		},
	},
};

export const ExpandableRows: Story = {
	render: () => (
		<Table
			columns={columns}
			dataSource={data}
			expandable={{
				expandedRowRender: (record: DataRecord) => (
					<p style={{ margin: 0 }}>
						Additional details for {record.name}: this person is {record.age}{" "}
						years old and has status {record.status.toLowerCase()}.
					</p>
				),
				rowExpandable: (record: DataRecord) => record.status === "Active",
			}}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Use `expandable` to show additional content for individual rows.",
			},
		},
	},
};

export const FixedHeaderAndColumns: Story = {
	render: () => {
		const wideColumns: NonNullable<TableProps<DataRecord>["columns"]> = [
			{
				title: "Name",
				dataIndex: "name",
				key: "name",
				width: 160,
				fixed: "left",
			},
			{ title: "Age", dataIndex: "age", key: "age", width: 100 },
			{
				title: "Address",
				dataIndex: "address",
				key: "address",
				width: 240,
			},
			{
				title: "Status",
				dataIndex: "status",
				key: "status",
				width: 140,
			},
			{
				title: "Action",
				key: "action",
				width: 120,
				fixed: "right",
				render: () => <a href="#table-action">View</a>,
			},
		];
		const manyRows = Array.from({ length: 12 }, (_, index) => ({
			...data[index % data.length],
			key: `fixed-${index + 1}`,
		}));

		return (
			<Table
				columns={wideColumns}
				dataSource={manyRows}
				scroll={{ x: 760, y: 280 }}
			/>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Set a scroll area to create a fixed header and use `fixed` on columns to keep them visible during horizontal scrolling.",
			},
		},
	},
};
