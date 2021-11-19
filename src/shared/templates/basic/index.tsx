import Head from '@shared/components/head';
import Footer from '@shared/components/footer';
import { TemplateContainer } from '@styles/ui/container';
import TemplatePageWrapper from './styles';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const BasicTemplate: React.FC<Props> = ({ children, title }) => (
  <>
    <Head title={title} />
    <TemplateContainer>
      <TemplatePageWrapper $full={false}>{children}</TemplatePageWrapper>
      <Footer />
    </TemplateContainer>
  </>
);

BasicTemplate.defaultProps = { title: '' };

export default BasicTemplate;
