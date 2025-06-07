// components

export { default as Button } from "./components/ui/Button/Button";
export { default as Badge } from "./components/ui/Badge/Badge";
export { default as ConfigProvider } from "./components/ui/ConfigProvider/ConfigProvider";
export { default as Breadcrumb } from "./components/ui/Breadcrumb/Breadcrumb";
export { default as Checkbox } from "./components/ui/Checkbox/Checkbox";
export { default as Radio } from "./components/ui/Radio/Radio";
export { default as Segmented } from "./components/ui/Segmented/Segmented";
export { default as Select } from "./components/ui/Select/Select";
export { default as Switch } from "./components/ui/Switch/Switch";
export { default as Input } from "./components/ui/Input/Input";
export { default as Dropdown } from "./components/ui/Dropdown/Dropdown";
export { default as Pagination } from "./components/ui/Pagination/Pagination";
export { default as Typography } from "./components/ui/Typography/Typography";

export { NewToken } from "./theme/customTheme";
// hooks
export { usePaletteColors } from "./hooks/usePaletteColors";
export { useFoucHandler } from "./hooks/useFoucHandler";
export { usePaletteConfig } from "./hooks/usePaletteConfig";
export { useScreenSize } from "./hooks/useScreenSize";
// export { usePaletteToken } from "./tokens/usePaletteToken";

// interfaces
export {
	AcaciaButtonProps,
	AcaciaBreadcrumbProps,
	AcaciaBadgeProps,
	AcaciaRibbonProps,
	AcaciaCheckboxProps,
	AcaciaSegmentedProps,
	AcaciaTypographyProps,
	AcaciaInputProps,
	AcaciaSwitchProps,
	AcaciaInputTextAreaProps,
	AcaciaPaginationProps,
	AcaciaSelectProps,
	AcaciaRadioProps,
	PaletteBasicPanelProps,
	PaletteCustomToken,
} from "../src/components/ui/interfaces";
