import { createStyles } from "antd-style";

export const usePanelStyles = createStyles(({ css }) => {
	const outerPanelBase = css`
        position: relative;
        z-index: 2;
        &::before {
        content: "";
        position: absolute;
        width: 80%;
        height: 12px;
        top: -7px;
        z-index: -1;
        border-radius: 3px 6px 6px 0;
        background: #9cafb7;
        }
    `;

	const panelBase = css`
        border-radius: 3px;
        background: #EFF3F3;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    `;

	const panelBody = css`
        padding: 1rem;    
    `;

	const panelFooter = css`
        background: #e2e7e8;
        border-top: 1px solid #dadada;
    `;

	return {
		outerPanel: outerPanelBase,
		outerPanelRight: css`
            ${outerPanelBase}
            &::before {
                right: 0;
            }
        `,
		outerPanelLeft: css`
            ${outerPanelBase}
            &::before {
                left: 0;
            }
        `,
		panelBase: panelBase,
		panelBody: panelBody,
		panelFooter: css`
            ${panelBody}
            ${panelFooter}
        `,
	};
});
