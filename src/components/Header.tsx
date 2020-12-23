import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../themes';
import { H1Text, P2Text } from './Typography';

const Container = styled.div`
  background-color: ${color.greySecondary};
  height: 3.125rem;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 1024px;
  margin: 0 auto;
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
    <Content>
      <MenuItem to="/">
        <H1Text>MyProperty.com</H1Text>
      </MenuItem>
      <MenuItem to="/">
        <P2Text>Home</P2Text>
      </MenuItem>
      <MenuItem to="/styleguide">
        <P2Text>Style Guide</P2Text>
      </MenuItem>
    </Content>
  </Container>
);

export default Header;
