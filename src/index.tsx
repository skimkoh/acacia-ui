// components

export { default as Button } from "./components/ui/Button/Button";
export { default as ConfigProvider } from './components/ui/ConfigProvider/ConfigProvider'

// hooks
export { usePaletteColors } from "./hooks/usePaletteColors";
export { useFoucHandler } from "./hooks/useFoucHandler";
export { usePaletteConfig } from "./hooks/usePaletteConfig";
export { useScreenSize } from "./hooks/useScreenSize";
// export { usePaletteToken } from "./tokens/usePaletteToken";

// interfaces
export {
  PaletteButtonProps,
  PaletteBasicPanelProps,
  PaletteCustomToken,
} from "../src/components/ui/interfaces";
