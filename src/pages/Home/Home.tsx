import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H2Text } from '../../components';
import PropertyCard from './components';
import { getData, propertiesUrl } from '../../apis/utils';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 30%;
`;

const Right = styled.div`
  width: 70%;
`;

const ResultListItem = styled.div`
  width: 300px;
  height: 250px;
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
  const [results, setResults] = useState(null);
  const [saved, setSaved] = useState(null);

  const getProperties = async () => {
    const data = await getData(propertiesUrl);
    setResults(data?.results);
    setSaved(data?.saved);
  };

  useEffect(() => {
    getProperties();
  }, []);

  useEffect(() => {
    console.log(results, saved);
  }, [results, saved]);
  interface IResult {
    price: string;
    agency: {
      brandingColors: {
        primary: string;
      };
      logo: string;
    };
    id: string;
    mainImage: string;
    imageSize: ImageSize;
  }

  enum ImageSize {
    large = 'large',
    small = 'small',
  }

  return (
    <>
      <Container>
        <Left>
          <H2Text>Results</H2Text>
          {(results || []).map((item: IResult) => (
            <ResultListItem>
              <PropertyCard
                key={item.id}
                agencyBrandingColor={item.agency.brandingColors.primary}
                logoUrl={item.agency.logo}
                propertyImageUrl={item.mainImage}
                price={item.price}
                imageSize={ImageSize.small}
              />
            </ResultListItem>
            ))}
        </Left>
        <Right>
          <H2Text>Saved Properties</H2Text>
          {(saved || []).map((item: IResult) => (
            <SavedListItem>
              <PropertyCard
                key={item.id}
                agencyBrandingColor={item.agency.brandingColors.primary}
                logoUrl={item.agency.logo}
                propertyImageUrl={item.mainImage}
                price={item.price}
                imageSize={ImageSize.large}
              />
            </SavedListItem>
          ))}
        </Right>
      </Container>
    </>
  );
};

export default Home;
