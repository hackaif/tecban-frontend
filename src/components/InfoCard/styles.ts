import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #000000;
  padding: 20px;
  border-radius: 5px;
  width: 100%;

  margin: 10px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextInfo = styled.View`
  flex-direction: column;
  margin-left:21px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: #c4c4c4;
  font-weight: bold;
`;

export const IconContainer = styled.View`
  background-color: rgba(196, 196, 196, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  z-index: 2;
  margin-left:-47px;
`;

export const ContainerBody = styled.Text`
  font-size: 14px;
  color: #e54355;
  font-weight: bold;
`;
