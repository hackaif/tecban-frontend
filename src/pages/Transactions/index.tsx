import React from 'react';

import { Text } from 'react-native';

import * as Unicons from '@iconscout/react-native-unicons';

import InfoCard from '../../components/InfoCard';

import TableArea from '../../components/TableArea';

import {
  Container,
  Content,
  // ImageCard,
  // TextContainer,
  DropdownButtonText,
  DropdownButtonArea,
  TextCardBody,
  DropdownButton
} from './styles';
import TransactionList from '../../components/TransactionList';

const Transactions: React.FC = () => {
  return (
    <Container style={{flex: 1}}>
      <Content>
        <InfoCard
            icon="dollar-sign"
            title="Transações"
            description="R$ 465,64 restantes"
        />
        <DropdownButtonArea>
          <DropdownButton>
            <DropdownButtonText>Todas</DropdownButtonText>
            <Unicons.UilAngleRight size={24} color="#fff" />
          </DropdownButton>
        </DropdownButtonArea>
        <TableArea />
      </Content>
    </Container>
  );
};

export default Transactions;
