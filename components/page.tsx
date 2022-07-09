import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import { AppState } from '../interfaces';
import Counter from './counter';
import Clock from './clock';
import Cat from './cat';
import { watchCatData } from '../actions';

interface PageProps {
  linkTo: string;
  NavigateTo: string;
  title: string;
}

const selectData = createSelector(
  (state: AppState) => state.error,
  (state: AppState) => state.lastUpdate,
  (state: AppState) => state.light,
  (state: AppState) => state.placeholderData,
  (error, lastUpdate, light, placeholderData) => ({
    error,
    lastUpdate,
    light,
    placeholderData,
  }),
);

const Page: React.FC<PageProps> = ({ linkTo, NavigateTo, title }: PageProps) => {
  const { error, lastUpdate, light, placeholderData } = useSelector(selectData);
  return (
    <>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <Cat />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {(error as Error).message}</p>}
    </>
  );
};

export default Page;
