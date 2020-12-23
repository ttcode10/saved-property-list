import React from 'react';
import styled from 'styled-components';
import { Card, H2Text } from '../../components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 30%;
  background-color: yellow;
`;

const Right = styled.div`
  width: 70%;
  background-color: red;
`;

const ResultListItem = styled.div`
  width: 300px;
  height: 200px;
  & ~ & {
    margin-top: 1rem;
  }
`;

const SavedListItem = styled.div`
  width: 640px;
  height: 640px;
  & ~ & {
    margin-top: 1rem;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Left>
          <H2Text>Results</H2Text>
          <ResultListItem>
            <Card />
          </ResultListItem>
          <ResultListItem>
            <Card />
          </ResultListItem>
          <ResultListItem>
            <Card />
          </ResultListItem>
          <ResultListItem>
            <Card />
          </ResultListItem>
          <ResultListItem>
            <Card />
          </ResultListItem>
          <ResultListItem>
            <Card />
          </ResultListItem>
        </Left>
        <Right>
          <H2Text>Saved Properties</H2Text>
          <SavedListItem>
            <Card />
          </SavedListItem>
          <SavedListItem>
            <Card />
          </SavedListItem>
        </Right>
      </Container>
    </>
  );
};

export default Home;
