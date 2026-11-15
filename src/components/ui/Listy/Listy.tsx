import { Listy as AntdListy, type ListyProps, type ListyRef } from "antd";
import { forwardRef } from "react";

const Listy = forwardRef<ListyRef, ListyProps>((props, ref) => {
	return <AntdListy {...props} ref={ref} />;
}) as typeof AntdListy;

export default Listy;
