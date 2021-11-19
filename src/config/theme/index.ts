import ThemeEnum from '@core/enums/theme';
import LightTheme from '@styles/themes/light';
import DarkTheme from '@styles/themes/dark';

export const themes = {
  default: DarkTheme,
  [ThemeEnum.Light]: LightTheme,
  [ThemeEnum.Dark]: DarkTheme,
};

export const themeCookieKey = 'github-users-statistics-app-theme';
