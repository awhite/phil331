import React from 'react';

import Flexbox from './Flexbox';
import Track from './Track';


const data = [
  {
    link: 'https://open.spotify.com/embed/track/3HsOlSmTjiUmwJLrrNutDR',
    year: '2018',
    text: 'Incididunt incididunt magna eu ut officia consequat adipisicing labore cillum deserunt nostrud. Velit ex eiusmod est eiusmod ad incididunt est minim nisi occaecat eiusmod. Pariatur eu occaecat commodo nostrud. Culpa enim duis aliqua cupidatat officia velit consectetur laboris nisi cupidatat. Mollit elit do cupidatat dolor ut laborum non adipisicing fugiat veniam. In nisi duis nisi voluptate culpa amet commodo sint elit labore ad magna id. Lorem labore est quis irure. Et tempor commodo ad laboris laborum dolore. Aliquip nulla dolore ipsum ea elit ex exercitation esse elit laboris consectetur exercitation.',
  },
  {
    link: 'https://open.spotify.com/embed/track/3HsOlSmTjiUmwJLrrNutDR',
    year: '2018',
    text: 'Incididunt incididunt magna eu ut officia consequat adipisicing labore cillum deserunt nostrud. Velit ex eiusmod est eiusmod ad incididunt est minim nisi occaecat eiusmod. Pariatur eu occaecat commodo nostrud. Culpa enim duis aliqua cupidatat officia velit consectetur laboris nisi cupidatat. Mollit elit do cupidatat dolor ut laborum non adipisicing fugiat veniam. In nisi duis nisi voluptate culpa amet commodo sint elit labore ad magna id. Lorem labore est quis irure. Et tempor commodo ad laboris laborum dolore. Aliquip nulla dolore ipsum ea elit ex exercitation esse elit laboris consectetur exercitation.',
  },
];

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
