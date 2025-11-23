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

export const BasicVerticalLayoutWithDifferentPresetTheme = () => (
	<VerticalLayout
		headerBackgroundProps={{
			headerBackgroundTheme: "mystical",
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

BasicVerticalLayoutWithDifferentPresetTheme.parameters = {
	docs: {
		description: {
			story:
				"You can customize the header with several preset themes, such as the mystical theme",
		},
	},
};

export const BasicVerticalLayoutWithCustomHeaderGradient = () => (
	<VerticalLayout
		headerBackgroundProps={{
			headerBackgroundCustomGradientColors: ["7d1b1b", "e37b7b", "e0a4a4"],
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

BasicVerticalLayoutWithCustomHeaderGradient.parameters = {
	docs: {
		description: {
			story:
				"You can also customize the gradient with your own HEX codes. Note that the text color will automatically switch to black/white depending on your 'main' color, as well as adjusting the accent color automatically",
		},
	},
};
