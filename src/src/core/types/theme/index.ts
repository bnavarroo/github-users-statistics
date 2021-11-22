import ThemeEnum from '@core/enums/theme';
import BreakpointType from './breakpoints';
import { TextColorType } from './text';
import HeaderType from './header';
import FooterType from './footer';

export type ThemeCommonType = {
  fontSize: string;
  fontWeight: number;
  breakpoints: BreakpointType;
  paddingX: string;
  header: HeaderType;
  footer: FooterType;
};

export type ThemeColorsType = {
  primary: string;
  secondary: string;
  tertiary: string;
  text: TextColorType;
};

export type ThemeType = {
  name: ThemeEnum;
  colors: ThemeColorsType;
  fontSize: string;
  fontWeight: number;
  breakpoints: BreakpointType;
  paddingX: string;
  header: HeaderType;
  footer: FooterType;
};
