import { Breadcrumb as AntdBreadcrumb, ConfigProvider, theme } from "antd";
import type { AcaciaBreadcrumbProps } from "../interfaces";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import { useContext } from "react";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";

/**
 * A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.
 */

const Breadcrumb = ({ ...props }: AcaciaBreadcrumbProps) => {
	const context = useContext(VerticalLayoutContext); // context to check if its nested - its possible that the user can use the header without the VerticalLayout
	const isNestedInLayout = Boolean(context); // check if nested or not to handle colors

	const { useToken } = theme;
	const globalToken = useToken(); // get the default, antd tokens

	const defaultTheme = useGetDefaultTheme(); // get the default, overwritten tokens

	return (
		<ConfigProvider
			theme={{
				token: { ...defaultTheme.token, ...globalToken.token },
				components: {
					Breadcrumb: {
						...defaultTheme.components.Breadcrumb,
						...(isNestedInLayout
							? {
									linkColor: context.mainTextColor,
									itemColor: context.mainTextColor,
									lastItemColor: context.mainTextColor,
									separatorColor: context.mainTextColor,
								}
							: {}), // only override if its nested in the layout
					},
				},
			}}
		>
			<AntdBreadcrumb items={props.items} style={{ letterSpacing: 1.5 }} />
		</ConfigProvider>
	);
};

export default Breadcrumb;
