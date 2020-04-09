import React from 'react';

import Flexbox from './Flexbox';
import Track from './Track';

import { getLyricColor } from '../styles/colors';
import data from '../data/trackData.json';

const TrackList = () => (
  <Flexbox>
    {data.map(({ link, text, lyrics, year, colors }, i) => (
      <Track
        key={link}
        link={link}
        text={text}
        lyrics={lyrics}
        year={year}
        color={colors.bg}
        textColor={colors.text}
        lyricColor={getLyricColor(colors.text)}
        i={i}
      />))}
  </Flexbox>
);

export default TrackList;
