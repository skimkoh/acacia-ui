import { Flex, Space } from "antd";
import type React from "react";
import Typography from "../../ui/Typography/Typography";
import { useContext } from "react";
import { VerticalLayoutContext } from "./VerticalLayout";
import type {
	AcaciaBreadcrumbProps,
	AcaciaTabsProps,
} from "../../ui/interfaces";
import Breadcrumb from "../../ui/Breadcrumb/Breadcrumb";
import Tabs from "../../ui/Tabs/Tabs";

export interface VerticalHeaderProps {
	pageTitle: string | React.ReactNode;
	pageSubtitle: string | React.ReactNode;
	pageIcon?: React.ReactNode;
	rightSideItems?: React.ReactNode;
	leftSideItems?: React.ReactNode;
	mainColor?: string; // hex string
	breadcrumbs?: AcaciaBreadcrumbProps;
	tabs?: Omit<AcaciaTabsProps, "type">;
}

const VerticalHeader = ({ ...props }: VerticalHeaderProps) => {
	const context = useContext(VerticalLayoutContext); // context to check if its nested
	const isNestedInLayout = Boolean(context); // check if nested or not to handle colors

	return (
		<Flex
			justify="space-between"
			style={{ paddingTop: isNestedInLayout ? "1rem" : 0 }}
		>
			<Space direction="vertical" size={0}>
				{props.breadcrumbs && <Breadcrumb {...props.breadcrumbs} />}
				<Typography.Title
					level={2}
					style={{
						margin: 0,
						color: context.mainColor ?? props.mainColor ?? "white",
					}}
				>
					{props.pageTitle}
				</Typography.Title>
				<Typography.Text
					style={{
						color: isNestedInLayout
							? context.firstBackgroundColor
							: (context.mainColor ?? props.mainColor ?? "white"),
					}}
				>
					{props.pageSubtitle}
				</Typography.Text>
				{props.tabs && (
					<Tabs {...props.tabs} style={{ marginTop: "0.5rem" }} type="header" />
				)}
			</Space>
			{props.rightSideItems}
		</Flex>
	);
};

export default VerticalHeader;
