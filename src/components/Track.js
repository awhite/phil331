import React from 'react';
import styled, { css } from 'styled-components';

import Flexbox from './Flexbox';

const Paragraph = styled.p`
  line-height: 2rem;
`;

const LyricLine = styled.p`
  margin-bottom: 4px;
  font-style: italic;
  color: ${props => props.color};
`;

const SpotifyTrack = styled.div`
  @media (min-width: 993px) {
    margin-${props => props.direction}: 48px;
  }

  @media (max-width: 992px) {
    margin-bottom: 32px;
    align-self: center;
  }
`;

const Container = styled(Flexbox)`
  margin-bottom: 48px;
  padding: 32px;
  ${props => props.i % 2 === 1 && css`flex-direction: row-reverse;`}
  background-color: ${props => props.color};
  color: ${props => props.textColor};
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextContainer = styled(Flexbox)`
  align-items: flex-start;
  flex-grow: 1;
`;

const Track = ({ link, text, lyrics, year, color, textColor, lyricColor, i }) => {
  return (
    <Container i={i} color={color} textColor={textColor} direction="row">
      <SpotifyTrack direction={i % 2 === 0 ? 'right' : 'left'}>
        <iframe src={link} width="400" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media" />
      </SpotifyTrack>
      <TextContainer>
        <Paragraph><strong>({year})</strong></Paragraph>
        {text && <Paragraph>{text}</Paragraph>}
        {lyrics && lyrics.map((line, index) => (
          <LyricLine color={lyricColor} key={line}>
            <>
              {index === 0 && <>&ldquo;</>}
              {line}
              {index === lyrics.length - 1 && <>&rdquo;</>}
            </>
          </LyricLine>))}
      </TextContainer>
    </Container>
  )
};

export default Track;
