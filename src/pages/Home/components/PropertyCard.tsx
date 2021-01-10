import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, H2Text, Button } from '../../../components';
import { color } from '../../../themes';

const PropertyCard: React.FC<IProps> = ({
  agencyBrandingColor,
  logoUrl,
  propertyImageUrl,
  price,
  imageSize,
  buttonText,
  handleClick,
  itemId,
  buttonDisabled,
}) => {
  const [buttonShow, setButtonShow] = useState(false);

  const handleMouseEnter = () => {
    setButtonShow(true);
  };

  const handleMouseLeave = () => {
    setButtonShow(false);
  };

  return (
    <Card>
      <Container
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Header agencyBrandingColor={agencyBrandingColor}>
          <LogoImage logoUrl={logoUrl} />
        </Header>
        <PropertyImage
          propertyImageUrl={propertyImageUrl}
          imageSize={imageSize}
        />
        <Footer>
          <Price>{price}</Price>
          {buttonShow && (
            <ActionButton
              onClick={handleClick}
              data-index={itemId}
              disabled={buttonDisabled}>
              {buttonText}
            </ActionButton>
          )}
        </Footer>
      </Container>
    </Card>
  );
};

export default PropertyCard;

interface IProps {
  key: string;
  agencyBrandingColor: string;
  logoUrl: string;
  propertyImageUrl: string;
  price: string;
  imageSize: ImageSize;
  buttonText: ButtonText;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  itemId: string;
  buttonDisabled?: boolean;
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

const PropertyImage = styled.div<{
  propertyImageUrl: string;
  imageSize: ImageSize;
}>`
  background: url(${(props) => props.propertyImageUrl}) no-repeat center/cover;
  width: 100%;
  height: ${(props) => imageSizeMapping(props.imageSize)};
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

const ActionButton = styled(Button)`
  margin: 8px;
`;

const imageSizeMapping = (imageSize: ImageSize): string => {
  return {
    large: '540px',
    small: '150px',
  }[imageSize];
};
