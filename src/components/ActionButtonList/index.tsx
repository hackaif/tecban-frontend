import React from 'react';
import { Container } from './styles';

interface CardProps {
  children: React.ReactNode;
}

const ActionButtonList: React.FC<CardProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default ActionButtonList;
