import React from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ProgressCircle from '../ProgressCircle';

import {
  Container,
  TextInfo,
  TitleText,
  IconContainer,
  ContainerBody,
  TextsContainer
} from './styles';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  chevronVisible?: boolean;
  onPress: Function;
}

const InfoCard: React.FC<CardProps> = ({ icon, title, description, chevronVisible, onPress}) => (
  <Container disabled={!chevronVisible} onPress={() => onPress()} >
    <TextsContainer style={{flexDirection: 'row', alignItems: 'center'}}>
      <ProgressCircle />
      <IconContainer>
        <FeatherIcon name={icon} size={24} color="#18171C" />
      </IconContainer>

      <TextInfo>
        <TitleText>{title}</TitleText>
        <ContainerBody>{description}</ContainerBody>
      </TextInfo>
    </TextsContainer>

    {chevronVisible &&
      <View>
        <FeatherIcon style={{}} name="chevron-right" size={20} color="#C4C4C4" />
      </View>
    }
  </Container>
);

export default InfoCard;
