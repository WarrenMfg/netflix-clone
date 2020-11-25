import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { filterMap } from '../utils';

export default function Browse({ user }) {
  let series, films, slides;

  series = useContent('series');
  films = useContent('films');
  slides = filterMap({ series, films });

  return series.length && films.length ? (
    <BrowseContainer slides={slides} user={user} />
  ) : null;
}
