import { createStyles } from "antd-style";
import { typographyUtil } from "../../../theme/typographyUtil";

export const useInputStyles = () => {
	return createStyles(({ css, prefixCls }) => ({
		input: css`
            & .${prefixCls}-input-show-count-suffix {
                font-size: ${typographyUtil.fontSize.caption}px;
                font-weight: 700;
            }
        `,
	}))();
};

export const useTextAreaStyles = () => {
	return createStyles(({ css, prefixCls }) => ({
		textarea: css`
            & .${prefixCls}-input-data-count {
                font-size: ${typographyUtil.fontSize.caption}px;
                font-weight: 700;
            }
        `,
	}))();
};
