import React from 'react';

import Flexbox from './Flexbox';
import Track from './Track';

import data from '../data/trackData';

const TrackList = () => (
  <Flexbox>
    {data.map(({ link, text, year }, i) => (
      <Track
        key={link}
        link={link}
        text={text}
        year={year}
        i={i}
      />))}
  </Flexbox>
);

export default TrackList;
