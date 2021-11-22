import { memo, useRef } from 'react';
import { useRouter } from 'next/router';
import handleSubmitSearch from './helpers';
import { Form, SearchBox, Icon } from './styles';

const Search: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <Form onSubmit={handleSubmitSearch(router, ref)}>
      <SearchBox>
        <input ref={ref} type="text" placeholder="Ex.: bnavarroo" />
        <button type="submit">
          <Icon />
        </button>
      </SearchBox>
    </Form>
  );
};

export default memo(Search);
