import React from 'react';
import styled, { css } from 'styled-components';

import Flexbox from './Flexbox';

const Paragraph = styled.p`
  line-height: 2rem;
`;

const SpotifyTrack = styled.div`
  margin-${props => props.direction}: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const Container = styled(Flexbox)`
  margin-bottom: 48px;
  ${props => props.i % 2 === 1 && css`flex-direction: row-reverse;`}

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Track = ({ link, text, year, i }) => (
  <Container i={i} direction="row">
    <SpotifyTrack direction={i % 2 === 0 ? 'right' : 'left'}>
      <iframe src={link} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" />
    </SpotifyTrack>
    <Paragraph><strong>({year})</strong><br /> {text}</Paragraph>
  </Container>
);

export default Track;
