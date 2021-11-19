import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import withTheme from '@utilities/hocs/theme';
import { themeCookieKey } from '@config/theme';

const MyApp = ({ Component, pageProps }): ReactElement<AppProps> => {
  const ThemedComponent = withTheme(Component);
  return <ThemedComponent {...pageProps} />;
};

MyApp.getInitialProps = (appContext) => {
  const cookies = appContext?.ctx?.req?.cookies ?? {};
  const theme = cookies[themeCookieKey];
  return { pageProps: { cookies: { theme } } };
};

export default MyApp;
