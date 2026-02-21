import type { Preview } from "@storybook/react-webpack5";
import { ConfigProvider } from "../src/index";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { Space, Typography } from "antd";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import "@fontsource-variable/inter";
import "@fontsource-variable/roboto-flex";
import { themes } from "storybook/theming";
const desktopViewports = {
	desktopLarge: {
		name: "Desktop Large",
		styles: {
			width: "1920px",
			height: "1080px",
		},
	},
	desktopMedium: {
		name: "Desktop Medium",
		styles: {
			width: "1440px",
			height: "900px",
		},
	},
	desktopHalfLarge: {
		name: "Desktop Half (1920)",
		styles: {
			width: "960px",
			height: "1080px",
		},
	},
	desktopHalfMedium: {
		name: "Desktop Half (1440)",
		styles: {
			width: "720px",
			height: "900px",
		},
	},
	desktopHalf2k: {
		name: "Desktop Half (2560)",
		styles: {
			width: "1280px",
			height: "1440px",
		},
	},
};

const preview: Preview = {
	decorators: [
		(Story) => (
			<ConfigProvider
				theme={{
					token: {
						fontFamily: "Inter Variable, Inter, system-ui, sans-serif",
					},
				}}
				customToken={{
					logo: (
						<Space size={3}>
							<FontAwesomeIcon icon={faTree} />
							<Typography.Text
								style={{
									fontSize: 12,
									wordSpacing: 1.2,
									fontWeight: 700,
								}}
							>
								ACACIA
							</Typography.Text>
						</Space>
					),
					appThemeMode: "light",
					overlayDarkMode: {
						popconfirm: false,
						modal: true,
					},
				}}
			>
				<div
					style={{ fontFamily: "Inter Variable, Inter, system-ui, sans-serif" }}
				>
					<Story />
				</div>
			</ConfigProvider>
		),
	],
	tags: ["autodocs"], // Enables auto-generated docs globally
	parameters: {
		viewport: {
			options: {
				...MINIMAL_VIEWPORTS,
				...desktopViewports,
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		docs: {
			autodocs: "tag", // Activate autodocs
			theme: themes.light,
		},
	},
	initialGlobals: {
		viewport: { value: "desktop", isRotated: false },
	},
};

export default preview;
