import styled from 'styled-components/native';
import {Animated, Dimensions, StatusBar} from 'react-native';

export const Container = styled(Animated.View)`
  flex-direction:column;
  align-items:center;
  width:100%;
  max-height: 70%;
  background-color:#18171C;
  border-radius:5px;
`;

export const ContentArea = styled.View`
  width:100%;
  max-height:100%;
  padding: 0px 20px 60px 20px;
`;

export const DayTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-top:20px;
  color: #fff;
`;

export const Item = styled.View`
  flex-direction:row;
  align-items:center;
  width:100%;
  border-bottom-color: #312E38;
  border-style: solid;
  border-bottom-width: 1px;
`;

export const IconCircle = styled.View`
  background-color: ${(props) => props.color};
  border-radius:45px;
  width:45px;
  height:45px;
  align-items:center;
  justify-content:center;
  margin: 20px 10px 20px 0;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex:1;
`;

export const TextContentArea = styled.View`
`;

export const  ValueContentArea = styled.View`
  align-items: flex-end;
`;

export const Titles = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const TypeText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const ValueText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;