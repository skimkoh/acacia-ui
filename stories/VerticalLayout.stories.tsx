import type { Meta, StoryObj } from "@storybook/react-webpack5";
import VerticalLayout from "../src/components/layout/VerticalLayout/VerticalLayout";
const meta = {
	title: "Vertical Layout/Vertical Layout",
	component: VerticalLayout,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"The vertical layout is a complex layout component that can contains other layout-related components. This provides the base skeleton for any layout related items.",
			},
		},
	},
} satisfies Meta<typeof VerticalLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicVerticalLayout = () => (
	<VerticalLayout
		headerBackgroundProps={{
			headerBackgroundTheme: "classic",
		}}
		menuProps={{
			items: [
				{ key: 1, label: "Page One" },
				{ key: 2, label: "Page Two" },
				{ key: 3, label: "Page Three" },
			],
		}}
	>
		<VerticalLayout.VerticalHeader
			pageTitle="Title"
			pageSubtitle="testing 123"
			breadcrumbs={{
				items: [
					{
						title: "Home",
					},
					{
						title: "An Application",
					},
				],
			}}
			tabs={{
				items: [
					{
						key: "1",
						label: "Tab 1",
					},
					{
						key: "2",
						label: "Tab 2",
					},
					{
						key: "3",
						label: "Tab 3",
					},
				],
			}}
		/>
	</VerticalLayout>
);

BasicVerticalLayout.parameters = {
	docs: {
		description: {
			story: "This story shows a basic usage of the VerticalLayout.",
		},
	},
};
