import styled from 'styled-components/native';

interface TextCardProps {
  color: string;
}

export const Container = styled.View`
  background-color: #312e38;
`;

export const Content = styled.SafeAreaView`
  align-items: center;
  justify-content: center;

  padding: 0 20px;
`;

export const ImageCard = styled.Image`
  width: 40%;
`;

export const TextContainer = styled.View`
  width: 55%;
  text-align: justify;
`;

export const TextCardBody = styled.Text<TextCardProps>`
  color: ${props => props.color};
  font-size: 12px;
`;

export const DropdownButtonArea = styled.View`
  width:100%;
`;

export const DropdownButtonText = styled.Text`
  font-size: 18px;
  color: #c4c4c4;
  font-weight: bold;
`;

export const DropdownButton = styled.TouchableOpacity`
  align-self: flex-start;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: row;
`;