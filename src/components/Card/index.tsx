import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ContainerHeader,
  TitleHeader,
  TitleText,
  IconContainer,
  ContainerBody,
} from './styles';

interface CardProps {
  iconHeader: string;
  iconTitle: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  iconHeader,
  iconTitle,
  children,
  ...rest
}) => (
  <Container {...rest}>
    <ContainerHeader>
      <TitleHeader>
        <IconContainer>
          <FeatherIcon name={iconHeader} size={20} color="#18171C" />
        </IconContainer>
        <TitleText>{iconTitle}</TitleText>
      </TitleHeader>
    </ContainerHeader>
    <ContainerBody>{children}</ContainerBody>
  </Container>
);

export default Card;
