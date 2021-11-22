import { memo } from 'react';
import Link from 'next/link';
import { Img, LinkLogo } from './styles';

const Logo: React.FC = () => (
  <Link href="/">
    <LinkLogo>
      <Img />
    </LinkLogo>
  </Link>
);

export default memo(Logo);
