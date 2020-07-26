import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Container, TitleHeader, TitleText, IconContainer } from './styles';

interface CardProps {
  iconHeader: string;
  iconTitle: string;
  borderRadiusTop?: boolean;
  borderTop?: boolean;
  borderRadiusBottom?: boolean;
  borderMiddle?: boolean;
  onPress(): void;
}

const ActionButton: React.FC<CardProps> = ({
  iconHeader,
  iconTitle,
  borderRadiusTop,
  borderTop,
  borderRadiusBottom,
  borderMiddle,
  onPress,
}) => (
  <Container
    onPress={onPress}
    borderRadiusTop={borderRadiusTop}
    borderTop={borderTop}
    borderRadiusBottom={borderRadiusBottom}
    borderMiddle={borderMiddle}
    activeOpacity={0.7}
  >
    <TitleHeader>
      <IconContainer>
        <FeatherIcon name={iconHeader} size={20} color="#C4C4C4" />
      </IconContainer>
      <TitleText>{iconTitle}</TitleText>
    </TitleHeader>

    <FeatherIcon name="chevron-right" size={20} color="#C4C4C4" />
  </Container>
);

export default ActionButton;
