import React from 'react';
import styled from 'styled-components';
import TrackList from './components/TrackList';
import burke from './burke.jpg';
import Flexbox from './components/Flexbox';
import { quoteDarkBg as quote } from './styles/colors';

const Heading = styled.h1`
  margin-top: 64px;
  margin-bottom: 36px;
  text-align: center;
`;

const Hr = styled.hr`
  border-color: white;
  margin-bottom: 32px;
`;

const Quote = styled(({ className, children }) => (
  <p className={className}>
    &ldquo;{children}&rdquo;
  </p>
))`
  font-size: 1.5rem;
  font-style: italic;
  color: ${quote};
`;

const Burke = styled(Flexbox)`
  margin-right: 24px;
`;

const Image = styled.img`
  margin-bottom: 12px;
`;

const Caption = styled.span`
  text-align: center;
`;

const App = () => (
  <div className="container">
    <Heading>The Sublime in Music</Heading>
    <Flexbox direction="row">
      <Burke>
        <Image src={burke} alt="Edmund Burke" width="150px" />
        <Caption>Edmund Burke</Caption>
      </Burke>
      <Quote>When danger or pain press too nearly, they are incapable of giving any delight, and are simply terrible; but at certain distances, and with certain modifications, they may be, and they are, delightful...</Quote>
    </Flexbox>
    <Hr />
    <TrackList />
  </div>
);

export default App;
