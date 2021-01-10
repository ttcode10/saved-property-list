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

  const addItemToSavedList = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    const target = e.target as HTMLButtonElement;
    const itemId = target.getAttribute('data-index');
    const itemToSave = resultList.find((item) => item.id === itemId);
    if (itemToSave) {
      setSavedList([...savedList, itemToSave]);
      itemId && setSavedIds((prevState) => [...prevState, itemId]);
    } else {
      alert('Something goes wrong, please try again later');
    }
  };

  const removeItemFromSavedList = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    const target = e.target as HTMLButtonElement;
    const itemId = target.getAttribute('data-index');
    const itemToRemove = savedList.find((item) => item.id === itemId);
    if (itemToRemove) {
      const newSavedList = savedList.filter((item) => item.id !== itemId);
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
                imageSize={ImageSize.small}
                buttonText={ButtonText.save}
                handleClick={addItemToSavedList}
                itemId={item.id}
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
