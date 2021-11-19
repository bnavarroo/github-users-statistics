import Head from 'next/head';

type HeadProps = { title?: string };

const MyHead: React.FC<HeadProps> = ({ title }) => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <title>Github Users Statistics{title ? ` - ${title}` : ''}</title>
  </Head>
);

MyHead.defaultProps = { title: '' };

export default MyHead;
