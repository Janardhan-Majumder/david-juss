import { mainTheme } from "@/constants/anttheme";
import { TCommonProps } from "@/types/common.type";
import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }: TCommonProps) => {
  return <ConfigProvider theme={mainTheme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
