/* eslint-disable indent */
import { FormEvent, MutableRefObject } from 'react';
import { NextRouter } from 'next/router';

const handleSubmitSearch =
  (router: NextRouter, inputRef: MutableRefObject<HTMLInputElement>) =>
  (e: FormEvent) => {
    e.preventDefault();
    const prefix = router.pathname.toLowerCase().includes('user') ? '/' : '';
    router.replace(`${prefix}user/${inputRef?.current.value}`);
  };

export default handleSubmitSearch;
