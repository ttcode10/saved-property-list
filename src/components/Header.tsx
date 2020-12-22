import React from 'react';
import styled from 'styled-components';
import { color } from '../themes';
import { H1Text } from './Typography';

const Container = styled.div`
  height: 3.125rem;
  width: 100%;
  background-color: ${color.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 12.5rem;
`;

const Header: React.FC<Record<string, unknown>> = () => (
  <Container>
    <H1Text>MyProperty.com</H1Text>
  </Container>
);

export default Header;
