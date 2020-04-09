import styled from 'styled-components';

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: flex-start;
`;

export default Flexbox;
