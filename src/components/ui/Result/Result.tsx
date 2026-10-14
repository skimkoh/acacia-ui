import { Result as AntdResult } from "antd";
import { type ComponentRef, forwardRef } from "react";
import unauthorizedPlaceholder from "../../../assets/result-401.svg";
import type { AcaciaResultProps } from "../interfaces";

const Result = Object.assign(
	forwardRef<ComponentRef<typeof AntdResult>, AcaciaResultProps>(
		(props, ref) => {
			const unauthorized = props.status === 401 || props.status === "401";
			const status =
				props.status === 401 || props.status === "401"
					? "error"
					: String(props.status) === "default"
						? undefined
						: props.status;

			const icon =
				props.icon ??
				(unauthorized ? (
					<img
						src={unauthorizedPlaceholder}
						alt="401 illustration placeholder"
						style={{
							display: "block",
							height: "auto",
							margin: "0 auto",
							maxWidth: "100%",
							width: 400,
						}}
					/>
				) : undefined);

			return <AntdResult ref={ref} {...props} icon={icon} status={status} />;
		},
	),
	{
		PRESENTED_IMAGE_403: AntdResult.PRESENTED_IMAGE_403,
		PRESENTED_IMAGE_404: AntdResult.PRESENTED_IMAGE_404,
		PRESENTED_IMAGE_500: AntdResult.PRESENTED_IMAGE_500,
	},
);

export default Result;
