import IThemeProps from '@core/interfaces/theme';

export interface IAppProps {
  cookies: {
    theme: string;
  };
}

export interface IPageProps extends IAppProps, IThemeProps {}
