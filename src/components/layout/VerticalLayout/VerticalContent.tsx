import type { PropsWithChildren } from "react";

const VerticalContent = (props: PropsWithChildren) => {
	return <div style={{ marginTop: -70 }}>{props.children}</div>;
};

export default VerticalContent;
