import { Typography as AntdTypography } from "antd";

import { useTypographyStyles } from "./useTypographyStyles";
import { typographyUtil } from "../../../theme/typographyUtil";
import type {
	AcaciaBasicTypographyProps,
	AcaciaParagraphProps,
	AcaciaTextProps,
	AcaciaTitleProps,
} from "../interfaces";

const TypographyToken = {
	fontSizeHeading1: typographyUtil.fontSize.h1,
	fontSizeHeading2: typographyUtil.fontSize.h2,
	fontSizeHeading3: typographyUtil.fontSize.h3,
	fontSizeHeading4: typographyUtil.fontSize.h4,
	fontSizeHeading5: typographyUtil.fontSize.h5,
	fontWeightStrong: 600,
};

const Title = ({
	children,
	level = 1,
	color,
	...antdProps
}: AcaciaTitleProps) => {
	const typoStyles = useTypographyStyles(color).styles;

	return (
		<AntdTypography.Title
			className={`
					${typoStyles.common}
					${typoStyles.title}
					${typoStyles[`titleH${level}`]}
				`}
			level={level}
			{...antdProps}
		>
			{children}
		</AntdTypography.Title>
	);
};

const Text = ({
	children,
	level = 2,
	color,
	...antdProps
}: AcaciaTextProps) => {
	const typoStyles = useTypographyStyles(color).styles;

	return (
		<AntdTypography.Text
			className={`
				${typoStyles.common}
				${typoStyles.text} 
				${typoStyles[`textBody${level}`]}
			`}
			{...antdProps}
		>
			{children}
		</AntdTypography.Text>
	);
};

const Emphasis = ({ children, color, ...props }: AcaciaTextProps) => {
	const typoStyles = useTypographyStyles(color).styles;

	return (
		<Text
			className={`
				${typoStyles.common}
				${typoStyles.emphasis} 
			`}
			color={color}
			{...props}
		>
			{children}
		</Text>
	);
};

const Caption = ({
	children,
	color,
	...antdProps
}: AcaciaBasicTypographyProps) => {
	const typoStyles = useTypographyStyles(color).styles;

	return (
		<AntdTypography.Text
			className={`
				${typoStyles.common}
				${typoStyles.caption} 
			`}
			{...antdProps}
		>
			{children}
		</AntdTypography.Text>
	);
};

const Overline = ({
	children,
	color,
	...antdProps
}: AcaciaBasicTypographyProps) => {
	const typoStyles = useTypographyStyles(color).styles;

	return (
		<AntdTypography.Text
			className={`
				${typoStyles.common}
				${typoStyles.overline} 
			`}
			{...antdProps}
		>
			{children}
		</AntdTypography.Text>
	);
};

const Paragraph = ({ children, color, ...antdProps }: AcaciaParagraphProps) => {
	const typoStyles = useTypographyStyles(color).styles;

	return (
		<AntdTypography.Text
			className={`
				${typoStyles.common}
				${typoStyles.textBody2} 
				${typoStyles.paragraph}
			`}
			{...antdProps}
		>
			{children}
		</AntdTypography.Text>
	);
};

/**
 * Basic text writing, including headings, body text, lists, and more.
 *
 * When To Use:
 * - When need to display a title or paragraph contents in Articles/Blogs/Notes.
 * - When you need copyable/editable/ellipsis texts.
 */

const Typography = () => {
	return <AntdTypography />;
};

Typography.Text = Text;
Typography.Title = Title;
Typography.Caption = Caption;
Typography.Overline = Overline;
Typography.Paragraph = Paragraph;
Typography.Emphasis = Emphasis;

export default Typography;
