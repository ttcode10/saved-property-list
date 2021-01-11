import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H1Text } from '../../components';
import PropertyCard from './components';
import { getData, propertiesUrl } from '../../apis/utils';

const Home: React.FC = () => {
  const [resultList, setResultList] = useState<IResult[]>([]);
  const [savedList, setSavedList] = useState<IResult[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const getInitProperties = async () => {
    const data = await getData(propertiesUrl);
    setResultList(data.results);
    setSavedList(data.saved);
  };

  useEffect(() => {
    getInitProperties();
  }, []);

  const addItemToSavedList = (item: IResult): void => {
    const itemToAdd = resultList.find((resultItem) => resultItem.id === item.id);
    if (itemToAdd) {
      setSavedList([...savedList, itemToAdd]);
      setSavedIds((prevState) => [...prevState, itemToAdd.id]);
    } else {
      alert('Something goes wrong, please try again later');
    }
  };

  const removeItemFromSavedList = (item: IResult): void => {
    const itemToRemove = savedList.find((savedItem) => savedItem.id === item.id);
    if (itemToRemove) {
      const newSavedList = savedList.filter((savedItem) => savedItem.id !== item.id);
      setSavedList(newSavedList);
      setSavedIds(newSavedList.map((item) => item.id));
    } else {
      alert('Something goes wrong, please try again later');
    }
  };

  return (
    <>
      <Container>
        <Left data-testid="result-column">
          <H1Text>Result List</H1Text>
          {resultList?.map((item: IResult) => (
            <ResultListItem data-testid="result-list">
              <PropertyCard
                key={item.id}
                agencyBrandingColor={item.agency.brandingColors.primary}
                logoUrl={item.agency.logo}
                propertyImageUrl={item.mainImage}
                price={item.price}
                imageSize={ImageSize.Small}
                buttonText={ButtonText.Save}
                handleClick={() => addItemToSavedList(item)}
                buttonDisabled={savedIds.includes(item.id)}
              />
            </ResultListItem>
          ))}
        </Left>
        <Right data-testid="saved-column">
          <H1Text>Saved Properties</H1Text>
          {savedList?.map((item: IResult) => (
            <SavedListItem data-testid="saved-list">
              <PropertyCard
                key={item.id}
                agencyBrandingColor={item.agency.brandingColors.primary}
                logoUrl={item.agency.logo}
                propertyImageUrl={item.mainImage}
                price={item.price}
                imageSize={ImageSize.Large}
                buttonText={ButtonText.Remove}
                handleClick={() => removeItemFromSavedList(item)}
              />
            </SavedListItem>
          ))}
        </Right>
      </Container>
    </>
  );
};

export default Home;

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
  Large = 'large',
  Small = 'small',
}

enum ButtonText {
  Save = 'Save',
  Remove = 'Remove',
}

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
