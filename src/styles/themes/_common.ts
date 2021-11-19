import { ThemeCommonType } from '@core/types/theme';

const ThemeCommon: ThemeCommonType = {
  fontSize: '14px',
  fontWeight: 300,
  breakpoints: {
    desktop: { min: '1200px', max: '100vw' },
    desktopSmall: { min: '1024px', max: '1199.98px' },
    tablet: { min: '640px', max: '1023.98px' },
    mobile: { min: '0px', max: '639.98px' },
  },
  paddingX: '20px',
  header: {
    height: {
      desktop: '118px',
      mobile: '151px',
    },
  },
  footer: {
    height: {
      desktop: '60px',
      mobile: '88px',
    },
  },
};

export default ThemeCommon;
