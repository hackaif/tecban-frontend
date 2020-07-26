import styled, { css } from 'styled-components/native';

interface TouchableOpacityPropsNew {
  borderRadiusTop?: boolean;
  borderTop?: boolean;
  borderRadiusBottom?: boolean;
  borderMiddle?: boolean;
}

export const Container = styled.TouchableOpacity<TouchableOpacityPropsNew>`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.borderRadiusTop &&
    css`
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    `}

  ${props =>
    props.borderTop &&
    css`
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    `}

  ${props =>
    props.borderRadiusBottom &&
    css`
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    `}

  ${props =>
    props.borderMiddle &&
    css`
      border-top-color: #645e67;
      border-top-width: 1px;

      border-bottom-color: #645e67;
      border-bottom-width: 1px;
    `}
`;

export const TitleHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: #c4c4c4;
`;

export const IconContainer = styled.View`
  padding: 5px;
  border-radius: 15px;

  margin-right: 10px;
`;
