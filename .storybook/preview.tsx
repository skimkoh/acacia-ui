import type { Preview } from "@storybook/react-webpack5";
import { ConfigProvider } from "../src/index";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { Space, Typography } from "antd";

const preview: Preview = {
	decorators: [
		(Story) => (
			<ConfigProvider
				customToken={{
					logo: (
						<Space size={0}>
							<FontAwesomeIcon icon={faTree} />
							<Typography.Text
								style={{
									fontSize: 12,
									wordSpacing: 1.2,
									fontWeight: 700,
									color: "white",
								}}
							>
								ACACIA
							</Typography.Text>
						</Space>
					),
				}}
			>
				<Story />
			</ConfigProvider>
		),
	],
	tags: ["autodocs"], // Enables auto-generated docs globally
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			autodocs: "tag", // Activate autodocs
		},
	},
};

export default preview;
