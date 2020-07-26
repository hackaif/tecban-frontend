import React from 'react';

// import card from '../../assets/card.png';
// import iphone from '../../assets/iphone.png';

import Card from '../../components/Card';

// import ActionButton from '../../components/ActionButton';

import {
  Container,
  Content,
  // ImageCard,
  // TextContainer,
  TextCardBody,
} from './styles';
// import ActionButtonList from '../../components/ActionButtonList';

const Transactions: React.FC = () => {
  return (
    <Container>
      <Content>
        <Card iconHeader="credit-card" iconTitle="Cartão Recomendado">
          <TextCardBody color="#c4c4c4">
            Nós te recomendamos o cartão
          </TextCardBody>
        </Card>
      </Content>
    </Container>
  );
};

export default Transactions;
