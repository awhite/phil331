import styled, { css } from 'styled-components';

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: center;
  justify-content: flex-start;
`;

export default Flexbox;
