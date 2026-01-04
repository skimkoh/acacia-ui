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
	MenuProps,
	TimePickerProps,
	ThemeConfig,
	TimeRangePickerProps,
	TagProps,
	ConfigProviderProps,
	SpaceProps,
	PopconfirmProps,
	ModalProps,
} from "antd";

import type { TextProps } from "antd/es/typography/Text";
import type { TitleProps } from "antd/es/typography/Title";
import type { ParagraphProps } from "antd/es/typography/Paragraph";
import type { InputProps } from "antd/es/input/Input";
import type { PaginationProps } from "antd/es/pagination/Pagination";
import type { TextAreaProps } from "antd/es/input";
import type { RibbonProps } from "antd/es/badge/Ribbon";
import type { NewToken } from "../../theme/customTheme";
import type {
	PresetColorType,
	PresetStatusColorType,
} from "antd/es/_util/colors";
import type { LiteralUnion } from "antd/es/_util/type";
import type { TabsType } from "antd/es/tabs";
import type {
	BreadcrumbItemType,
	BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import type { DropdownButtonProps, DropdownProps } from "antd/es/dropdown";
import type { LinkProps } from "antd/es/typography/Link";
import type { CSSProperties } from "react";
import type { CheckboxGroupProps, CheckboxOptionType } from "antd/es/checkbox";

/**
 * props for the acacia themes
 */
export type AcaciaThemes = "classic" | "submarine" | "mystical";

/**
 * Props for Acacia Breadcrumb component
 * @see https://ant.design/components/breadcrumb
 */

export type AcaciaBreadcrumbItemType = BreadcrumbItemType & {
	icon?: React.ReactNode;
	/**
	 * @default end
	 */
	iconPosition?: "start" | "end";
};

export type AcaciaItemType = Partial<
	AcaciaBreadcrumbItemType & BreadcrumbSeparatorType
>;

export interface AcaciaBreadcrumbProps extends BreadcrumbProps {
	items?: AcaciaItemType[];
	/**
	 * @default /
	 */
	separator?: "/";
}

/**
 * Props for Palette Avatar component
 * @see https://ant.design/components/avatar
 *
 * Custom props:
 * @property {string} [userId] - id of the user. if you want to show the user id in the avatar, set this property
 * @property {"solid" | "transparent"} [type=solid] - determines the avatar type. 'solid' is for solid background while 'transparent' is for transparent background
 * @property {() => void} [onClick] - click handler, to handle showing of
 */
export interface AcaciaAvatarProps extends AvatarProps {
	userId?: string;
	type?: "solid" | "transparent";
	onClick?: () => void;
}

/**
 * Props for Acacia Button component
 * @see https://ant.design/components/button
 */
export interface AcaciaButtonProps extends ButtonProps {
	/** Set button color */
	color?:
		| "default"
		| "primary"
		| "danger"
		| "blue"
		| "purple"
		| "cyan"
		| "green"
		| "magenta"
		| "pink"
		| "red"
		| "orange"
		| "yellow"
		| "volcano"
		| "geekblue"
		| "lime"
		| "gold";

	variant?: "outlined" | "dashed" | "solid" | "filled" | "text" | "link";
	/**
	 * Button style type.
	 * @default default
	 */
	type?: "primary" | "dashed" | "link" | "text" | "default";
}

/**
 * Props for Acacia Card component
 * @see https://ant.design/components/card
 *
 * custom props:
 * @property {boolean} [plainBody=false] - determines if the card should have plain body or textured body
 * @property {React.ReactNode | string} [title] - card header title
 * @property {React.ReactNode | string} [subtitle] - card header subtitle
 *
 */
export interface AcaciaCardProps extends CardProps {
	/**
	 * content in the card
	 */
	subtitle?: React.ReactNode | string;
	title?: React.ReactNode | string;
	plainBody?: boolean;
	/**
	 * custom background banner picture if decides not to use themes.
	 * we are assuming that the picture is found under the public folder in nextjs
	 * example usage:
	 * headerBackgroundPicture: "./test.png"
	 */
	headerBackgroundPicture?: string;
	/**
	 * 	provides 3 themes of card header background, and put hexagon as the default
	 */
	headerBackgroundTheme?: AcaciaThemes;
	icon: React.ReactNode | string;
}

/**
 * Props for Typography component
 * @see https://ant.design/components/typography
 */
export interface AcaciaTypographyProps extends TypographyProps {}

/**
 * Props for Acacia Title component
 * @see https://ant.design/components/typography
 *
 * custom props:
 * @property {string} [color] - color of the title
 */
export interface AcaciaTitleProps extends TitleProps {
	children: React.ReactNode;
	color?: string;
	showPointer?: boolean;
	icon?: React.ReactNode;
	iconPosition?: "start" | "end";
}

/**
 * Props for Palette Text component
 * @see https://ant.design/components/typography
 *
 * custom props:
 * @property {string} [color] - color of the title
 * @property {1 | 2} [level=1] - level of the text
 */
export interface AcaciaTextProps extends TextProps {
	children: React.ReactNode;
	level?: 1 | 2;
	color?: string;
}

/**
 * Props for Acacia Text component
 * @see https://ant.design/components/typography
 *
 */
export interface AcaciaEmphasisProps extends AcaciaTextProps {}

export interface AcaciaLinkProps extends LinkProps {
	children: React.ReactNode;
	color?: string;
}

/**
 * Props for Acacia Typography component
 * @see https://ant.design/components/typography
 *
 * custom Palette props:
 * @property {string} [color] - color of the title
 */
export interface AcaciaBasicTypographyProps extends TextProps {
	children: React.ReactNode;
	color?: string;
}

/**
 * Props for Acacia Paragraph component
 * @see https://ant.design/components/typography
 *
 * custom props:
 * @property {string} [color] - color of the title
 */
export interface AcaciaParagraphProps extends ParagraphProps {
	children: React.ReactNode;
	color?: string;
}

/**
 * Props for Acacia Space component
 * @see https://ant.design/components/space
 *
 */
export interface AcaciaSpaceProps extends SpaceProps {}

/**
 * Props for Acacia Pagination component
 * @see https://ant.design/components/pagination
 *
 */
export interface AcaciaPaginationProps extends PaginationProps {
	/**
	 * @default "solid"
	 */
	selectedStyle?: "solid" | "outline";
}

/**
 * Props for Acacia Input component
 * @see https://ant.design/components/input
 *
 */
export interface AcaciaInputProps extends InputProps {}

/**
 * Props for Acacia Input Text Area component
 * @see https://ant.design/components/input#inputtextarea
 *
 */
export interface AcaciaInputTextAreaProps extends TextAreaProps {}

/**
 * Props for Acacia Tabs component
 * @see https://ant.design/components/tabs
 *
 * custom props:
 * @property {"page" | "header"} [colorType=page] - determines the breadcrumb type. 'header' is for breadcrumb within the header while 'page' is for breadcrumb on the page itself
 */

type AcaciaTabsType = TabsType | "page" | "header";

export interface AcaciaTabsProps extends TabsProps {}

/**
 * Props for Palette Radio component
 */
export interface AcaciaRadioProps extends RadioProps {}

/**
 * Props for Acacia Switch component
 * @see https://ant.design/components/switch
 */
export interface AcaciaSwitchProps extends SwitchProps {}

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
 * Props for Acacia Segmented component
 * @see https://ant.design/components/segmented
 */
export interface AcaciaSegmentedProps extends SegmentedProps {}

/**
 * Props for Acacia Steps component
 * @see https://ant.design/components/steps
 */
export interface PaletteStepsProps extends StepsProps {}

/**
 * Props for Acacia Select component
 * @see https://ant.design/components/select
 */
export interface AcaciaSelectProps extends SelectProps {}

/**
 * Props for Acacia Panel component
 *
 */
export interface AcaciaPanelProps {
	children: React.ReactNode;
	position?: "left" | "right" | "none";
	footer?: React.ReactNode;
	classNames?: {
		outerContainerClassName?: string;
		panelBaseClassName?: string;
		panelBodyClassName?: string;
		panelFooterClassName?: string;
	};
	panelTitle?: string;
	styles?: {
		outerContainerStyles?: CSSProperties;
		panelBaseStyles?: CSSProperties;
		panelBodyStyles?: CSSProperties;
		panelFooterStyles?: CSSProperties;
	};
}

/**
 * Props for Acacia Form component
 * @see https://ant.design/components/form
 *
 */
export interface AcaciaFormProps extends FormProps {
	children: React.ReactNode;
}

/**
 * Props for Acacia Form.Item component
 * @see https://ant.design/components/form#formitem
 *
 * custom props:
 * @property {string | React.ReactNode} [infoCopy] - helper text under the form item
 */
export interface AcaciaFormItemProps extends FormItemProps {
	children: React.ReactNode;
	infoCopy?: string | React.ReactNode;
}

/**
 * dropdown
 */
export interface AcaciaDropdownProps extends DropdownProps {}
export interface AcaciaDropdownButtonProps extends DropdownButtonProps {}

/**
 * DATEPICKER
 */
export interface AcaciaDatePickerProps extends DatePickerProps {}
export interface AcaciaDateRangePickerProps extends TimeRangePickerProps {}

export interface AcaciaTimePickerProps extends TimePickerProps {}

export interface AcaciaTimeRangePickerProps extends TimeRangePickerProps {}

/**
 * MENU
 */
export interface AcaciaMenuProps extends MenuProps {
	/**
	 * @default true
	 */
	showRightBorder?: boolean;
}

/**
 * BASIC PANEL
 */
export interface AcaciaBasicPanelProps {
	children: React.ReactNode;
	bgColor?: string;
}

export interface AcaciaConfigProviderProps extends ConfigProviderProps {
	children: React.ReactNode;
	customToken?: Partial<NewToken>;
	theme?: ThemeConfig;
}

/**
 * TAG
 */
export const AcaciaCustomColors = {
	"cobalt-blue": { background: "#2C62D5", color: "white" },
	"pastel-red": { background: "#DB3056", color: "white" },
};

export const AcaciaColorArray = ["cobalt-blue", "pastel-red"] as const;
export type AcaciaColorType = (typeof AcaciaColorArray)[number];
export type AcaciaColors = LiteralUnion<
	PresetColorType | PresetStatusColorType | AcaciaColorType
>;

export const isValidCustomColor = (
	value: string,
): value is (typeof AcaciaColorArray)[number] => {
	return AcaciaColorArray.includes(value as any);
};

// extends the current Tag props and add more colors to the list
export interface AcaciaTagProps extends TagProps {
	color?: AcaciaColors;
}

// POPCONFIRM
export interface AcaciaPopconfirmProps extends PopconfirmProps {}

// MODAL

export interface AcaciaModalProps extends ModalProps {
	headerBgTheme?: AcaciaThemes;
	icon?: React.ReactNode;
	iconPosition?: "start" | "end";
	subtitle?: React.ReactNode | string;
}

// custom option select
export interface AcaciaOptionSelectProps extends CheckboxProps {
	mode?: "single" | "multiple";
	label?: string | React.ReactNode;
	description?: string | React.ReactNode;
}

interface AcaciaOptionsList extends CheckboxOptionType {
	description?: string;
}

export interface AcaciaOptionSelectGroupProps<T = any>
	extends Omit<CheckboxGroupProps<T>, "options"> {
	orientation?: "vertical" | "horizontal";
	span?: number | string; // max 24,
	options: AcaciaOptionsList[];
}
