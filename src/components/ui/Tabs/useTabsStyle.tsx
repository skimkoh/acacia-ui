import { createStyles, useTheme } from "antd-style";
import { usePaletteColors } from "../../../hooks/usePaletteColors";
import { usePaletteConfig } from "../../../hooks/usePaletteConfig";
import { typographyUtil } from "../../../theme/typographyUtil";

const wrapPaddingBottom = 10;

export const useTabsStyles = (inkBarColor: string) => {
	const token = useTheme();
	const { colors, generate } = usePaletteColors();
	const { borderRadius } = usePaletteConfig();
	const { colors: accentColors } = generate(token.theme.accent);

	return createStyles(({ css, prefixCls }) => ({
		tabs: css`
      & > .${prefixCls}-tabs-nav {
        &::before {
          bottom: calc(${wrapPaddingBottom}px + 1px);
          border-bottom-color: ${colors.border.page};
        }

        & > .${prefixCls}-tabs-nav-wrap {
          padding-bottom: ${wrapPaddingBottom}px;
        }

        & .${prefixCls}-tabs-tab {
          font-size: ${typographyUtil.fontSize.body1}px;
          letter-spacing: ${typographyUtil.letterSpacing.h2};
          font-weight: 500;
        }
      }

      &.${prefixCls}-tabs-top > .${prefixCls}-tabs-nav {
        & .${prefixCls}-tabs-ink-bar {
          height: 3px;
          &::before {
            content: "";
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 8px 15px;
            border-style: solid;
            border-color: ${inkBarColor} transparent transparent transparent;
          }
        }
      }

      &.${prefixCls}-tabs-card.${prefixCls}-tabs-top > .${prefixCls}-tabs-nav {
        & .${prefixCls}-tabs-tab {
          border-radius: ${borderRadius.panel}px ${borderRadius.panel}px 0 0;
        }

        & .${prefixCls}-tabs-tab.${prefixCls}-tabs-tab-active {
          background: ${accentColors[0]};
        }
      }
    `,
	}))();
};
