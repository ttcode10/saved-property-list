import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../themes';
import { H1Text, P2Text } from './Typography';

const Container = styled.div`
  height: 3.125rem;
  display: flex;
  flex: 1;
  background-color: ${color.greySecondary};
  justify-content: flex-start;
  align-items: center;
  padding: 0.125rem 12.5rem;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: ${color.white};
  cursor: pointer;

  & ~ & {
    margin-left: 2.5rem;
  }
`;

const Header: React.FC = () => (
  <Container>
    <MenuItem to="/">
      <H1Text>MyProperty.com</H1Text>
    </MenuItem>
    <MenuItem to="/">
      <P2Text>Home</P2Text>
    </MenuItem>
    <MenuItem to="/styleguide">
      <P2Text>Style Guide</P2Text>
    </MenuItem>
  </Container>
);

export default Header;
