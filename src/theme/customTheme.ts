import "@fontsource-variable/roboto-flex";
import type { AcaciaThemes } from "../components/ui/interfaces";
import type { HeaderBackgroundProps } from "../components/layout/VerticalLayout/VerticalLayout";

export interface NewToken {
	headingFontFamily: string;
	appTheme: AcaciaThemes;
	appThemeMode: "light" | "dark";
	logo: React.ReactNode | string;
	overlayDarkMode: Partial<DarkModeTokens>;
	verticalLayout: {
		headerBackgroundProps: HeaderBackgroundProps;
	};
}

interface DarkModeTokens {
	overlayColor: string;
	// allowing for dark mode for all overlay components (modal, popovers, etc)
	popover: boolean;
	popconfirm: boolean;
	modal: boolean;
	tooltip: boolean;
	statusModal: boolean;
}

// By extending the type definition of the `CustomToken` interface for `antd-style`, you can add corresponding token type definitions to the `useTheme` hooks
declare module "antd-style" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface CustomToken extends NewToken {}
}

const appTheme = "classic";

export const CustomTheme: NewToken = {
	headingFontFamily:
		'"Roboto Flex Variable", "Roboto Flex", "Segoe UI", sans-serif',
	appTheme,
	logo: "TEST LOGO",
	appThemeMode: "light",
	overlayDarkMode: {
		overlayColor: "#161616c4",
		popover: false,
		popconfirm: false,
		modal: false,
		tooltip: false,
		statusModal: false,
	},
	verticalLayout: {
		headerBackgroundProps: {
			headerBackgroundImage: {
				type: "theme",
				theme: appTheme,
			},
			headerBackgroundFill: {
				type: "theme",
				theme: appTheme,
			},
		},
	},
};
