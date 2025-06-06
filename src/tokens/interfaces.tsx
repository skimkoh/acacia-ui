import { ThemeConfig } from "antd";
import { AliasToken, GlobalToken } from "antd/es/theme/interface";

// make all props optional for nested keys
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface PaletteThemeConfig extends ThemeConfig {
  token?: DeepPartial<PaletteAliasToken>;
}

export interface PaletteAliasToken extends AliasToken {
  /**
   * @nameEN Main font for the entire app
   * @descEN Font used for most elements in the app
   */
  fontFamily: string;
  /**
   * @nameEN Heading font for the entire app
   * @descEN Font used for headings in the app
   */
  headingFontFamily: string;
  colors: {
    /**
     * @nameEN Main primary color of the app
     * @descEN Controls the primary color of all elements
     */
    primary: string;
    /**
     * @nameEN Main color for the text
     * @descEN Controls the main color for the text elements
     */
    primaryText: string;
    /**
     * @nameEN Main color for the caption text
     * @descEN Controls the color for the caption text elements
     */
    caption: string;
  };
  theme: {
    lightOnDark: boolean;
    brand: string;
    gradient1: string;
    gradient2: string;
    gradient3: string;
    gradient4: string;
    cove: string;
    accent: string;
    body: string;
  };
  header: {
    imgUrl: string;
  };
  sidepanel: {
    imgUrl: string;
  };
  panel: {
    bgColor: string;
  };
  form: {
    marginBottom: string;
  };
  card: {
    bgcolor: string;
    contentbg: string;
    headerbg: string;
  };
}

export interface PaletteToken extends GlobalToken {
  fontFamily: string;
  headingFontFamily: string;
  colors: {
    primary: string;
    primaryText: string;
    caption: string;
  };
  theme: {
    lightOnDark: boolean;
    brand: string;
    gradient1: string;
    gradient2: string;
    gradient3: string;
    gradient4: string;
    cove: string;
    accent: string;
    body: string;
  };
  header: {
    imgUrl: string;
  };
  sidepanel: {
    imgUrl: string;
  };
  panel: {
    bgColor: string;
  };
  form: {
    marginBottom: string;
  };
  card: {
    bgcolor: string;
    contentbg: string;
    headerbg: string;
  };
}
