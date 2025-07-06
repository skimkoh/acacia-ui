import { Flex, Space } from "antd";
import type React from "react";
import Typography from "../../ui/Typography/Typography";

export interface VerticalHeaderProps {
	pageTitle: string | React.ReactNode;
	pageSubtitle: string | React.ReactNode;
	pageIcon?: React.ReactNode;
	rightSideItems?: React.ReactNode;
	leftSideItems?: React.ReactNode;
}

const VerticalHeader = ({ ...props }: VerticalHeaderProps) => {
	return (
		<Flex justify="space between">
			<Space direction="vertical">
				<Typography.Title level={4} style={{ margin: 0 }}>
					{props.pageTitle}
				</Typography.Title>
				<Typography.Text> {props.pageSubtitle}</Typography.Text>
			</Space>
			{props.rightSideItems}
		</Flex>
	);
};

export default VerticalHeader;
