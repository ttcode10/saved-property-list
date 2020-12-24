import React from 'react';
import styled from 'styled-components';
import { Card, H2Text, Button } from '../../../components';
import { color } from '../../../themes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div<{ agencyBrandingColor: string }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.agencyBrandingColor};
  height: 50px;
`;

const LogoImage = styled.div<{ logoUrl: string }>`
  background: url(${(props) => props.logoUrl}) no-repeat left/contain;
  width: 100%;
  height: 30px;
  margin: 8px;
`;

const PropertyImage = styled.div<{ propertyImageUrl: string }>`
  background: url(${(props) => props.propertyImageUrl}) no-repeat center/cover;
  width: 100%;
  height: 150px;
`;

const Footer = styled.div`
  display: flex;
  background-color: ${color.white};
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const Price = styled(H2Text)`
  margin: 8px;
`;

const AddButton = styled(Button)`
  margin: 8px;
`;

interface IProps {
  agencyBrandingColor: string;
  logoUrl: string;
  propertyImageUrl: string;
  price: string;
}

const PropertyCard: React.FC<IProps> = ({ agencyBrandingColor, logoUrl, propertyImageUrl, price }) => {
  return (
    <Card>
      <Container>
        <Header agencyBrandingColor={agencyBrandingColor}>
          <LogoImage logoUrl={logoUrl} />
        </Header>
        <PropertyImage propertyImageUrl={propertyImageUrl} />
        <Footer>
          <Price>{price}</Price>
          <AddButton>Save</AddButton>
        </Footer>
      </Container>
    </Card>
  );
};

export default PropertyCard;
