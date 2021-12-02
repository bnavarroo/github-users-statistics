import ThemeEnum from '@core/enums/theme';
import { ThemeType } from '@core/types/theme';
import ThemeCommon from './_common';

const LightTheme: ThemeType = {
  name: ThemeEnum.Light,
  textName: 'Claro',
  colors: {
    primary: '#FFF',
    secondary: '#222',
    tertiary: '#333',
    text: {
      default: '#000',
      onPrimary: '#000',
      onSecondary: '#000',
      onTertiary: '#000',
    },
  },
  ...ThemeCommon,
};

export default LightTheme;
