import "@fontsource-variable/roboto-flex";
import type { AcaciaThemes } from "../components/ui/interfaces";

export interface NewToken {
	headingFontFamily: string;
	appTheme: AcaciaThemes;
	appThemeMode: "light" | "dark";
	logo: React.ReactNode | string;
	overlayDarkMode: Partial<DarkModeTokens>;
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

export const CustomTheme: NewToken = {
	headingFontFamily:
		'"Roboto Flex Variable", "Roboto Flex", "Segoe UI", sans-serif',
	appTheme: "classic",
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
};
