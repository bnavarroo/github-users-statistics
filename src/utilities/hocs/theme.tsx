import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Cookies } from 'react-cookie';
import { themes, themeCookieKey } from '@config/theme';
import { IPageProps } from '@core/interfaces/_app';
import ThemeEnum from '@core/enums/theme';
import GlobalStyle from '@styles/global';

const withTheme = <P extends IPageProps>(
  Component: React.ComponentType<P>
): React.FC<P & IPageProps> => {
  const WithThemeComponent: React.FC<P & IPageProps> = (props) => {
    const cookieManager = new Cookies();
    const clientCookieTheme = cookieManager.get(themeCookieKey);
    const { cookies: cookiesProps } = props;

    const [theme, setTheme] = useState(
      themes[cookiesProps.theme ?? clientCookieTheme] ?? themes.default
    );

    const toggleTheme = (): void => {
      const newTheme =
        theme.name === ThemeEnum.Light ? themes.dark : themes.light;
      setTheme(newTheme);
      cookieManager.set(themeCookieKey, newTheme.name, { path: '/' });
    };

    return (
      <ThemeProvider theme={theme}>
        <Component {...props} theme={theme} toggleTheme={toggleTheme} />
        <GlobalStyle />
      </ThemeProvider>
    );
  };

  return WithThemeComponent;
};

export default withTheme;
