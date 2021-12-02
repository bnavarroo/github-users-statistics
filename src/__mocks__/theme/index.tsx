import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { themes } from '@config/theme';

const ThemeProvider = (props) => {
  const { theme } = props;
  const selectedTheme = theme ?? themes.default;
  return <ThemeProviderStyled theme={selectedTheme} {...props} />;
};

export default ThemeProvider;
