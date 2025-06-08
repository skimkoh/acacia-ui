import { createStyles } from "antd-style";
import { usePaletteConfig } from "../../../hooks/usePaletteConfig";

export const useCardStyles = () => {
	const { shadow } = usePaletteConfig();

	return createStyles(({ css, prefixCls }) => ({
		card: css`
        && {
          box-shadow: ${shadow.card};
          }
        }
      `,
	}))();
};
