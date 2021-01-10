import styled from 'styled-components';

import { color, fontFamily } from '../themes/themes';

const Button = styled.button`
  font-size: 0.875rem;
  color: ${color.greyPrimary};
  font-family: ${fontFamily};
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${color.border};
  background: none;
  padding: 0.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: 0;

  &:hover {
    background-color: ${color.background};
  }
`;

export default Button;
