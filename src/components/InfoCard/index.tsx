import React from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  TextInfo,
  TitleText,
  IconContainer,
  ContainerBody,
} from './styles';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <Container>
    <View style={{ width: 80, height: 80 }}>
      <IconContainer>
        <FeatherIcon name={icon} size={20} color="#18171C" />
      </IconContainer>
    </View>

    <TextInfo>
      <TitleText>{title}</TitleText>
      <ContainerBody>{description}</ContainerBody>
    </TextInfo>
  </Container>
);

export default InfoCard;
