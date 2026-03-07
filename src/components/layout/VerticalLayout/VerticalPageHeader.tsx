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
import { useAcaciaToken } from "../../../tokens/useAcaciaToken";
import Tabs from "../../ui/Tabs/Tabs";

// this component is meant to be used in the VerticalLayout, but can also be used on its own for simple pages that just need a header. It is made up of many individual components that can be customized through props. When used without the VerticalLayout, it creates a simple header meant for minimalistic UI.

export interface VerticalPageHeaderProps {
	pageTitle: string | React.ReactNode;
	pageSubtitle: string | React.ReactNode;
	pageIcon?: React.ReactNode;
	rightSideItems?: React.ReactNode;
	leftSideItems?: React.ReactNode;
	breadcrumbs?: AcaciaBreadcrumbProps;
	tabs?: AcaciaTabsProps;
}

const VerticalPageHeader = ({ ...props }: VerticalPageHeaderProps) => {
	const context = useContext(VerticalLayoutContext); // context to check if its nested - its possible that the user can use the header without the VerticalLayout
	const isNestedInLayout = Boolean(context); // check if nested or not to handle colors

	const token = useAcaciaToken();
	// render tabs
	const renderTabs = () => {
		return <Tabs {...props.tabs} style={{ marginTop: "0.5rem" }} />;
	};

	return (
		<div style={{ padding: isNestedInLayout ? 0 : 20 }}>
			<Flex
				align="center"
				justify="space-between"
				style={{ paddingTop: isNestedInLayout ? "1rem" : 0 }}
			>
				<Space orientation="vertical" size={0} style={{ display: "flex" }}>
					{props.breadcrumbs && <Breadcrumb {...props.breadcrumbs} />}
					<Typography.Title
						level={2}
						style={{
							margin: 0,
							color: isNestedInLayout
								? context?.mainTextColor
								: token.token.colorText,
						}}
					>
						{props.pageTitle}
					</Typography.Title>
					<Typography.Text
						style={{
							color: isNestedInLayout
								? context?.accentColor
								: token.token.colorText,
						}}
					>
						{props.pageSubtitle}
					</Typography.Text>
					{/* // if its nested, then its under the left hand side items */}
					{props.tabs && isNestedInLayout && renderTabs()}
				</Space>
				{props.rightSideItems}
			</Flex>
			{/* // if its not nested, then remove it under the left hand side items and place it on its own */}
			{props.tabs && !isNestedInLayout && renderTabs()}
		</div>
	);
};

export default VerticalPageHeader;
