import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000000;
  padding: 20px;
  border-radius: 5px;
  width: 100%;

  margin: 10px 0;

  flex-direction: row;
  align-items: center;
`;

export const ContainerHeader = styled.View`
  border: 5px solid #c4c4c4;
  border-bottom-width: 5px;
  border-bottom-color: #e54355;
  border-right-width: 5px;
  border-right-color: #e54355;
  border-top-width: 5px;
  border-top-color: #e54355;
  border-left-width: 5px;
  border-left-color: #e54355;
  border-radius: 40px;
  width: 80px;
  height: 80px;
`;

export const TextInfo = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: #c4c4c4;
  font-weight: bold;
`;

export const IconContainer = styled.View`
  background-color: #e54355;
  padding: 5px;
  border-radius: 15px;

  z-index: 2;
`;

export const ContainerBody = styled.Text`
  font-size: 14px;
  color: #e54355;
  font-weight: bold;
`;
