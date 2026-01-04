import { createStyles } from "antd-style";
import chroma from "chroma-js";

export const useOptionSelectStyles = createStyles(
	(
		{ css, prefixCls },
		props: { colorPrimary: string; disabledColor: string },
	) => {
		const rootBase = css`
            border: 1px solid ${props.colorPrimary};
            padding: 10px;
            border-radius: 2px;
            transition: background-color 200ms ease-in-out;

            &:has(.${prefixCls}-checkbox-checked) {
                background-color: ${chroma(props.colorPrimary).luminance(0.7).hex()};
            }

            &:has(.${prefixCls}-checkbox-disabled) {
                border: 1px solid ${props.disabledColor};
            }
        
        `;

		const iconBase = css`
            display: none
        
        `;

		const checkedOption = css`
           
        `;

		return {
			rootBase: rootBase,
			iconBase,
			checkedOption,
		};
	},
);
