import { Breadcrumb as AntdBreadcrumb } from "antd";
import type { AcaciaBreadcrumbProps } from "../interfaces";

/**
 * A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.
 *
 */

const Breadcrumb = ({ ...props }: AcaciaBreadcrumbProps) => {
	return <AntdBreadcrumb items={props.items} style={{ letterSpacing: 1.5 }} />;
};

export default Breadcrumb;
