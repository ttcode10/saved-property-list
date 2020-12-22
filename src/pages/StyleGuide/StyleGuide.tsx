import React from 'react';
import {
  H1Text,
  H2Text,
  H3Text,
  P1Text,
  P2Text,
  P3Text,
  Button,
} from '../../components';

const StyleGuide: React.FC<Record<string, unknown>> = () => {
  return (
    <>
      <H1Text>Style Guide Page</H1Text>
      <H1Text>H1 Text</H1Text>
      <H2Text>H2 Text</H2Text>
      <H3Text>H3 Text</H3Text>
      <P1Text>P1 Text</P1Text>
      <P2Text>P2 Text</P2Text>
      <P3Text>P3 Text</P3Text>
      <Button>Button</Button>
    </>
  );
};

export default StyleGuide;
