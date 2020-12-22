import styled from 'styled-components';

import { color, boxShadow } from '../themes';

const Card = styled.div`
  background-color: ${color.white};
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: ${boxShadow};
  border-radius: 0.1875rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export default Card;
