import ThemeEnum from '@core/enums/theme';
import { ThemeType } from '@core/types/theme';
import ThemeCommon from './_common';

const DarkTheme: ThemeType = {
  name: ThemeEnum.Dark,
  colors: {
    primary: '#333',
    secondary: '#EEE1B3',
    tertiary: '#222',
    text: {
      default: '#FFF',
      onPrimary: '#FFF',
      onSecondary: '#FFF',
      onTertiary: '#FFF',
    },
  },
  ...ThemeCommon,
};

export default DarkTheme;
