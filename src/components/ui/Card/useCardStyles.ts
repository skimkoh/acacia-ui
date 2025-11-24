import { createStyles } from "antd-style";
import { useAcaciaConfig } from "../../../hooks/useAcaciaConfig";

export const useCardStyles = () => {
	const { shadow } = useAcaciaConfig();

	return createStyles(({ css }) => ({
		card: css`
        && {
          box-shadow: ${shadow.card};
          }
        }
      `,
	}))();
};
