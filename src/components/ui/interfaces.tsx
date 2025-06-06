import type {
	AvatarProps,
	BreadcrumbProps,
	ButtonProps,
	CardProps,
	TypographyProps,
	TabsProps,
	RadioProps,
	SwitchProps,
	BadgeProps,
	CheckboxProps,
	SegmentedProps,
	StepsProps,
	SelectProps,
	FormProps,
	FormItemProps,
	DatePickerProps,
	TableProps,
	MenuProps,
	ConfigProviderProps,
	TimePickerProps,
} from "antd";

import type { TextProps } from "antd/es/typography/Text";
import type { TitleProps } from "antd/es/typography/Title";
import type { ParagraphProps } from "antd/es/typography/Paragraph";
import type { InputProps } from "antd/es/input/Input";
import type { PaginationProps } from "antd/es/pagination/Pagination";
import type { PaletteThemeConfig } from "../../tokens/interfaces";
import type { TextAreaProps } from "antd/es/input";
import type { RibbonProps } from "antd/es/badge/Ribbon";

/**
 * Props for Acacia Breadcrumb component
 * @see https://ant.design/components/breadcrumb
 */
export interface AcaciaBreadcrumbProps extends BreadcrumbProps {}

/**
 * Props for Palette Avatar component
 * @see https://ant.design/components/avatar
 *
 * Custom Palette props:
 * @property {string} [userId] - id of the user. if you want to show the user id in the avatar, set this property
 * @property {"solid" | "transparent"} [type=solid] - determines the avatar type. 'solid' is for solid background while 'transparent' is for transparent background
 * @property {() => void} [onClick] - click handler, to handle showing of
 */
export interface PaletteAvatarProps extends AvatarProps {
	userId?: string;
	type?: "solid" | "transparent";
	onClick?: () => void;
}

/**
 * Props for Acacia Button component
 * @see https://ant.design/components/button
 */
export interface AcaciaButtonProps extends ButtonProps {}

/**
 * Props for Palette Card component
 * @see https://ant.design/components/card
 *
 * custom Palette props:
 * @property {boolean} [plainBody=false] - determines if the card should have plain body or textured body
 * @property {React.ReactNode | string} [title] - card header title
 * @property {React.ReactNode | string} [subtitle] - card header subtitle
 *
 */
export interface PaletteCardProps extends CardProps {
	/** content in the card */
	children: React.ReactNode;
	subtitle?: React.ReactNode | string;
	title?: React.ReactNode | string;
	plainBody?: boolean;
}

/**
 * Props for Palette Masthead component
 * This is a custom bar of honor component
 *
 * custom Palette props:
 * @property {"hidden" | "blackBg" | "greyBg" | "primaryGreenBg" | "whiteBg"} [type=blackBg] - determines the masthead type
 *
 */
export interface PaletteMastheadProps {
	type: "hidden" | "blackBg" | "greyBg" | "primaryGreenBg" | "whiteBg";
	children: React.ReactNode;
}

/**
 * Props for Palette Typorgraphy component
 * @see https://ant.design/components/typography
 */
export interface PaletteTypographyProps extends TypographyProps {}

/**
 * Props for Palette Title component
 * @see https://ant.design/components/typography
 *
 * custom Palette props:
 * @property {string} [color] - color of the title
 */
export interface PaletteTitleProps extends TitleProps {
	children: React.ReactNode;
	color?: string;
}

/**
 * Props for Palette Text component
 * @see https://ant.design/components/typography
 *
 * custom Palette props:
 * @property {string} [color] - color of the title
 * @property {1 | 2} [level=1] - level of the text
 */
export interface PaletteTextProps extends TextProps {
	children: React.ReactNode;
	level?: 1 | 2;
	color?: string;
}

/**
 * Props for Palette Text component
 * @see https://ant.design/components/typography
 *
 */
export interface PaletteEmphasisProps extends PaletteTextProps {}

/**
 * Props for Palette Typography component
 * @see https://ant.design/components/typography
 *
 * custom Palette props:
 * @property {string} [color] - color of the title
 */
export interface PaletteBasicTypographyProps extends TextProps {
	children: React.ReactNode;
	color?: string;
}

/**
 * Props for Palette Paragraph component
 * @see https://ant.design/components/typography
 *
 * custom Palette props:
 * @property {string} [color] - color of the title
 */
export interface PaletteParagraphProps extends ParagraphProps {
	children: React.ReactNode;
	color?: string;
}

/**
 * Props for Palette Pagination component
 * @see https://ant.design/components/pagination
 *
 */
export interface PalettePaginationProps extends PaginationProps {}

/**
 * Props for Palette Input component
 * @see https://ant.design/components/input
 *
 */
export interface PaletteInputProps extends InputProps {}

/**
 * Props for Palette Input Text Area component
 * @see https://ant.design/components/input#inputtextarea
 *
 */
export interface PaletteInputTextAreaProps extends TextAreaProps {}

/**
 * Props for Palette Tabs component
 * @see https://ant.design/components/tabs
 *
 * custom Palette props:
 * @property {"page" | "header"} [colorType=page] - determines the breadcrumb type. 'header' is for breadcrumb within the header while 'page' is for breadcrumb on the page itself
 */
export interface PaletteTabsProps extends TabsProps {
	colorType?: "page" | "header";
}

/**
 * Props for Palette Radio component
 *
 * custom Palette props:
 * @property {"outline" | "solid"} [buttonStyle=solid] - determines the radio button style. 'outline' is for outline button while 'solid' is for solid button
 * @property {"default" | "button"} [optionType=default] - determines the radio button option type. 'default' is for default option while 'button' is for button option
 *
 */
export interface PaletteRadioProps extends RadioProps {
	/** decides the color of the radio */
	buttonStyle?: "outline" | "solid";
	optionType?: "default" | "button";
}

/**
 * Props for Palette Switch component
 * @see https://ant.design/components/switch
 */
export interface PaletteSwitchProps extends SwitchProps {}

/**
 * Props for Acacia Badge component
 * @see https://ant.design/components/badge
 */
export interface AcaciaBadgeProps extends BadgeProps {}

/**
 * Props for Acacia Badge.Ribbon component
 * @see https://ant.design/components/badge#badgeribbon
 */
export interface AcaciaRibbonProps extends RibbonProps {}

/**
 * Props for Acacia Checkbox component
 * @see https://ant.design/components/checkbox
 */
export interface AcaciaCheckboxProps extends CheckboxProps {}

/**
 * Props for Palette Segmented component
 * @see https://ant.design/components/segmented
 */
export interface PaletteSegmentedProps extends SegmentedProps {}

/**
 * Props for Palette Steps component
 * @see https://ant.design/components/steps
 */
export interface PaletteStepsProps extends StepsProps {}

/**
 * Props for Palette Select component
 * @see https://ant.design/components/select
 */
export interface PaletteSelectProps extends SelectProps {}

/**
 * Props for Palette Panel component
 *
 * custom Palette props:
 * @property {React.ReactNode} children - content in the panel
 */
export interface PalettePanelProps {
	children: React.ReactNode;
}

/**
 * Props for Palette Form component
 * @see https://ant.design/components/form
 *
 */
export interface PaletteFormProps extends FormProps {
	children: React.ReactNode;
}

/**
 * Props for Palette Form.Item component
 * @see https://ant.design/components/form#formitem
 *
 * custom Palette props:
 * @property {string | React.ReactNode} [infoCopy] - helper text under the form item
 */
export interface PaletteFormItemProps extends FormItemProps {
	children: React.ReactNode;
	infoCopy?: string | React.ReactNode;
}

/**
 * DATEPICKER
 */
export interface PaletteDatePickerProps extends DatePickerProps {}

export interface PaletteRangePickerProps extends DatePickerProps {}

export interface PaletteTimePickerProps extends TimePickerProps {}

/**
 * TABLE
 */
export interface PaletteTableProps extends TableProps<any> {}
export interface PaletteTableActionBarProps {
	children: React.ReactNode;
}

/**
 * PALETTE SWTICH
 */
export interface PaletteThemeSwitchProps
	extends Omit<SegmentedProps, "options"> {}

/**
 * MENU
 */
export interface PaletteMenuProps extends MenuProps {
	borderInline?: "start" | "end" | "none";
}

/**
 * BASIC PANEL
 */
export interface PaletteBasicPanelProps {
	children: React.ReactNode;
	bgColor?: string;
}

export interface PaletteConfigProviderProps extends ConfigProviderProps {
	theme?: PaletteThemeConfig;
}

// custom token for Palette
export interface PaletteCustomToken {
	/**
	 * @nameEN Main font for the entire app
	 * @descEN Font used for most elements in the app
	 */
	fontFamily: string;
	/**
	 * @nameEN Heading font for the entire app
	 * @descEN Font used for headings in the app
	 */
	headingFontFamily: string;
	colors: {
		/**
		 * @nameEN Main primary color of the app
		 * @descEN Controls the primary color of all elements
		 */
		primary: string;
		/**
		 * @nameEN Main color for the text
		 * @descEN Controls the main color for the text elements
		 */
		primaryText: string;
		/**
		 * @nameEN Main color for the caption text
		 * @descEN Controls the color for the caption text elements
		 */
		caption: string;
	};
	theme: {
		lightOnDark: boolean;
		brand: string;
		gradient1: string;
		gradient2: string;
		gradient3: string;
		gradient4: string;
		cove: string;
		accent: string;
		body: string;
	};
	header: {
		imgUrl: string;
	};
	sidepanel: {
		imgUrl: string;
	};
	panel: {
		bgColor: string;
	};
	card: {
		bgcolor: string;
		contentbg: string;
		headerbg: string;
	};
}
