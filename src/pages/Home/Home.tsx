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
}

enum ImageSize {
  large = 'large',
  small = 'small',
}

enum ButtonText {
  save = 'Save',
  remove = 'Remove',
}

const Home: React.FC = () => {
  const [resultList, setResultList] = useState<IResult[]>([]);
  const [savedList, setSavedList] = useState<IResult[]>([]);

  const getInitProperties = async () => {
    const data = await getData(propertiesUrl);
    setResultList(data.results);
    setSavedList(data.saved);
  };

  useEffect(() => {
    getInitProperties();
  }, []);

  useEffect(() => {
    console.log(resultList, savedList);
  }, [resultList, savedList]);

  return (
    <>
      <Container>
        <Left>
          <H2Text>ResultList</H2Text>
          {resultList?.map((item: IResult) => (
            <ResultListItem>
              <PropertyCard
                key={item.id}
                agencyBrandingColor={item.agency.brandingColors.primary}
                logoUrl={item.agency.logo}
                propertyImageUrl={item.mainImage}
                price={item.price}
                imageSize={ImageSize.small}
                buttonText={ButtonText.save}
                handleClick={addItemToSavedList}
                itemId={item.id}
              />
            </ResultListItem>
          ))}
        </Left>
        <Right>
          <H2Text>Saved Properties</H2Text>
          {savedList?.map((item: IResult) => (
            <SavedListItem>
              <PropertyCard
                key={item.id}
                agencyBrandingColor={item.agency.brandingColors.primary}
                logoUrl={item.agency.logo}
                propertyImageUrl={item.mainImage}
                price={item.price}
                imageSize={ImageSize.large}
                buttonText={ButtonText.remove}
                handleClick={removeItemFromSavedList}
                itemId={item.id}
              />
            </SavedListItem>
          ))}
        </Right>
      </Container>
    </>
  );
};

export default Home;
