import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000000;
  padding: 20px;
  border-radius: 5px;
  width: 100%;

  margin: 10px 0;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;
`;

export const TitleHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
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

  margin-right: 10px;
`;

export const ContainerBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 15px 0;
`;
