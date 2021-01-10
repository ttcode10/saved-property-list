import React from 'react';
import styled from 'styled-components';
import {
  H1Text,
  H2Text,
  H3Text,
  P1Text,
  P2Text,
  P3Text,
  Button,
  Card,
} from '../../components';

const StyleGuide: React.FC = () => {
  return (
    <>
      <H1Text>Style Guide Page</H1Text>
      <Wrapper>
        <CardItem>
          <H1Text>H1 Text</H1Text>
          <H2Text>H2 Text</H2Text>
          <H3Text>H3 Text</H3Text>
          <P1Text>P1 Text</P1Text>
          <P2Text>P2 Text</P2Text>
          <P3Text>P3 Text</P3Text>
        </CardItem>
      </Wrapper>
      <Button>Button</Button>
    </>
  );
};

export default StyleGuide;

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
`;

const CardItem = styled(Card)`
  overflow-y: auto;
`;
