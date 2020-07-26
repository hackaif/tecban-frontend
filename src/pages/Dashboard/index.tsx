import React from 'react';

import { useNavigation } from '@react-navigation/native';
import card from '../../assets/card.png';
import iphone from '../../assets/iphone.png';

import Card from '../../components/Card';
import InfoCard from '../../components/InfoCard';

import ActionButton from '../../components/ActionButton';

import {
  Container,
  Content,
  ImageCard,
  TextContainer,
  TextCardBody,
} from './styles';
import ActionButtonList from '../../components/ActionButtonList';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <InfoCard
          icon="user"
          title="Guilherme - Nível 3"
          description="1089 pontos"
          chevronVisible
          onPress={() => navigation.navigate('Profile')}
        />
        <Card iconHeader="credit-card" iconTitle="Cartão Recomendado">
          <ImageCard source={card} style={{ resizeMode: 'contain' }} />
          <TextContainer>
            <>
              <TextCardBody color="#c4c4c4">
                Nós te recomendamos o cartão
                <TextCardBody color="#E54355"> Nubank </TextCardBody>
                {`\n`}
                {`\n`}
                Com limite de
                <TextCardBody color="#E54355">
                  {`\n`}
                  R$ 2000,00
                </TextCardBody>
              </TextCardBody>
            </>
          </TextContainer>
        </Card>
        <Card iconHeader="gift" iconTitle="Próximo Sorteio">
          <ImageCard source={iphone} style={{ resizeMode: 'contain' }} />
          <TextContainer>
            <>
              <TextCardBody color="#c4c4c4">
                iPhone 11 Pro
                {`\n`}
                <TextCardBody color="#E54355">R$ 6000,00</TextCardBody>
                {`\n`}
                {`\n`}
                Minhas entradas
                {`\n`}
                <TextCardBody color="#645E67">
                  3 entradas disponíveis
                </TextCardBody>
              </TextCardBody>
            </>
          </TextContainer>
        </Card>
        <ActionButtonList>
          <ActionButton
            borderRadiusTop
            iconHeader="tag"
            iconTitle="Meus cupons"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onPress={() => navigation.navigate('Profile')}
          />

          <ActionButton
            borderMiddle
            iconHeader="dollar-sign"
            iconTitle="Minhas transações"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onPress={() => navigation.navigate('Transactions')}
          />
          <ActionButton
            borderRadiusBottom
            iconHeader="map"
            iconTitle="Mapa de lotéricas"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onPress={() => {}}
          />
        </ActionButtonList>
      </Content>
    </Container>
  );
};

export default Dashboard;
