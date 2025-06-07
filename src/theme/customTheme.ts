import "@fontsource-variable/outfit";

export interface NewToken {
	headingFontFamily: string;
	theme: {
		lightOnDark: boolean;
		accent: string; // Strictly HEX color codes
	};
}

// By extending the type definition of the `CustomToken` interface for `antd-style`, you can add corresponding token type definitions to the `useTheme` hooks
declare module "antd-style" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface CustomToken extends NewToken {}
}

export const CustomTheme: NewToken = {
	headingFontFamily: '"Outfit Variable", "Outfit", "Segoe UI", sans-serif',
	theme: {
		lightOnDark: true,
		accent: "#b0e9d6",
	},
};
