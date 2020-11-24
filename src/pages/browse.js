import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { filterMap } from '../utils';

export default function Browse() {
  let series, films, slides;

  series = useContent('series');
  films = useContent('films');
  slides = filterMap({ series, films });

  return <BrowseContainer slides={slides} />;
}
