import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import bk from '../../assets/bk.png';
import shell from '../../assets/shell.png';
import centauro from '../../assets/centauro.png';

import Card from '../../components/Card';
import InfoCard from '../../components/InfoCard';

import ActionButton from '../../components/ActionButton';

import {
  Container,
  Content,
  TextContainer,
  PointDescText,
  PointDescValue,
  PointDescLine,
  MoreButton,
  ButtonArea,
  LogoArea,
  Logo,
  LogoItem,
  LogoValue
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
          onPress={() => {}}
        />
        <Card iconHeader="credit-card" iconTitle="Cupons">
          <TextContainer>
            <LogoArea>
              <LogoItem>
                <Logo source={bk} style={{ resizeMode: 'contain' }} />
                <LogoValue>R$ 20</LogoValue>
              </LogoItem>
              <LogoItem>
                <Logo source={shell} style={{ resizeMode: 'contain' }} />
                <LogoValue>R$ 10</LogoValue>
              </LogoItem>
              <LogoItem>
                <Logo source={centauro} style={{ resizeMode: 'contain' }} />
                <LogoValue>R$ 25</LogoValue>
              </LogoItem>
            </LogoArea>
            <ButtonArea>
              <MoreButton>
                <PointDescText>Ver tudo</PointDescText>
                <FeatherIcon style={{}} name="chevron-right" size={20} color="#C4C4C4" />
              </MoreButton>
            </ButtonArea>
          </TextContainer>
        </Card>
        <Card iconHeader="award" iconTitle="Pontuação">
          <TextContainer>
            <PointDescLine>
              <PointDescText>Não pagou a conta de Luz!</PointDescText>
              <PointDescValue good={false}>-1000</PointDescValue>
            </PointDescLine>
            <PointDescLine>
              <PointDescText>Pagou o condominio</PointDescText>
              <PointDescValue good={true}>+250</PointDescValue>
            </PointDescLine>
            <ButtonArea>
              <MoreButton>
                <PointDescText>Ver tudo</PointDescText>
                <FeatherIcon style={{}} name="chevron-right" size={20} color="#C4C4C4" />
              </MoreButton>
            </ButtonArea>
          </TextContainer>
        </Card>
        <Card iconHeader="chevrons-up" iconTitle="Próximo Nível (Nível 4)">
          <TextContainer>
            <PointDescLine>
              <PointDescText>Entrada para sorteio</PointDescText>
              <PointDescValue good={true}>+1</PointDescValue>
            </PointDescLine>
            <PointDescLine>
              <PointDescText>Cupons!</PointDescText>
              <PointDescValue good={true}>+10</PointDescValue>
            </PointDescLine>
            <ButtonArea>
              <MoreButton>
                <PointDescText>Ver tudo</PointDescText>
                <FeatherIcon name="chevron-right" size={20} color="#C4C4C4" />
              </MoreButton>
            </ButtonArea>
          </TextContainer>
        </Card>
      </Content>
    </Container>
  );
};

export default Dashboard;
