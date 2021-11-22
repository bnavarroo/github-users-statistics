import IThemeProps from '@core/interfaces/theme';
import Head from '@shared/components/head';
import Header from '@shared/components/header';
import Footer from '@shared/components/footer';
import TemplatePageWrapper from './styles';

interface IHeaderTemplateProps extends IThemeProps {
  children: React.ReactNode;
  title?: string;
}

const HeaderTemplate: React.FC<IHeaderTemplateProps> = ({
  children,
  title,
  theme,
  toggleTheme,
}) => (
  <>
    <Head title={title} />
    <Header theme={theme} toggleTheme={toggleTheme} />
    <TemplatePageWrapper $full={false}>{children}</TemplatePageWrapper>
    <Footer />
  </>
);

HeaderTemplate.defaultProps = { title: '' };

export default HeaderTemplate;
