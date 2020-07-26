import styled from 'styled-components/native';

interface TextCardProps {
  color: string;
}

export const Container = styled.ScrollView`
  background-color: #312e38;
`;

export const Content = styled.SafeAreaView`
  align-items: center;
  justify-content: center;

  padding: 0 10px;
`;

export const TextContainer = styled.View`
  width: 100%;
  text-align: justify;
`;

export const PointDescLine = styled.View`
  flex-direction: row;
  width:100%;
  justify-content: space-between;
  margin-bottom:20px;
`;

export const PointDescValue = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.good ? "#8FE64E" : "#E54355"};
`;

export const PointDescText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #C4C4C4;
`;

export const MoreButton = styled.TouchableOpacity`
  flex-direction: row;
  width:100%;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0 0;
`;

export const ButtonArea = styled.View`
  border-color:#645E67;
  border-style: solid;
  border-top-width: 1px;
`;

export const LogoArea = styled.View`
  flex-direction:row;
  justify-content: center;
`;

export const Logo = styled.Image`
  width:40px;
  margin-bottom:10px;
`;

export const LogoItem = styled.View`
  flex-direction:column;
  margin: 15px 25px;
`;

export const LogoValue = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #C4C4C4;
`;