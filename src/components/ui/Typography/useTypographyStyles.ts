import { useTheme, createStyles } from "antd-style";
import { typographyUtil } from "../../../theme/typographyUtil";

export const useTypographyStyles = (color?: string) => {
	const token = useTheme();
	return createStyles(({ css, prefixCls }) => ({
		common: css`
        &.${prefixCls}-typography {
          margin-block: 0;
          line-height: 1.5em;
  
          ${
						color
							? `
                      color: ${color};
                  `
							: ""
					}
        }
      `,
		title: css`
        font-family: ${token.headingFontFamily};
      `,
		titleH1: css`
        letter-spacing: ${typographyUtil.letterSpacing.h1};
      `,
		titleH2: css`
        letter-spacing: ${typographyUtil.letterSpacing.h2};
      `,
		titleH3: css`
        letter-spacing: ${typographyUtil.letterSpacing.h3};
      `,
		titleH4: css`
        letter-spacing: ${typographyUtil.letterSpacing.h4};
      `,
		titleH5: css`
        letter-spacing: ${typographyUtil.letterSpacing.h5};
  
        &.${prefixCls}-typography {
          font-weight: 600;
          display: flex;
          align-items: center;
        }
  
        &::before {
          display: inline-block;
          content: "";
          height: 5px;
          width: 5px;
          background-color: ${token.colorPrimary};
          vertical-align: super;
          margin-right: 10px;
          opacity: 0.6;
        }
      `,
		text: css`
        letter-spacing: ${typographyUtil.letterSpacing.default};
      `,
		emphasis: css`
        display: contents;
        font-size: inherit;
        font-weight: 600;
      `,
		textBody1: css`
        font-size: ${typographyUtil.fontSize.body1}px;
        font-weight: 500;
        opacity: 0.88;
        letter-spacing: ${typographyUtil.letterSpacing.body1};
      `,
		textBody2: css`
        letter-spacing: ${typographyUtil.letterSpacing.default};
      `,
		paragraph: css`
        display: block;
        margin-bottom: 20px;
      `,
		caption: css`
        letter-spacing: ${typographyUtil.letterSpacing.caption};
        font-size: ${typographyUtil.fontSize.caption}px;
        font-weight: 500;
      `,
		overline: css`
        letter-spacing: ${typographyUtil.letterSpacing.overline};
        font-size: ${typographyUtil.fontSize.overline}px;
        font-weight: 600;
        opacity: 0.88;
        text-transform: uppercase;
  
        &&.${prefixCls}-typography {
          margin-bottom: 0;
        }
      `,
		link: css`
        text-decoration: underline !important;
        text-underline-offset: 3px;
  
        &&.${prefixCls}-typography {
          margin-bottom: 0;
        }
      `,
	}))();
};
