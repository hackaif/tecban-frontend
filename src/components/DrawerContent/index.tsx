import React from 'react';
import { View } from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Container, TitleText } from './styles';

import { ApplicationState } from '../../store/index';

import { signOut } from '../../store/ducks/auth/actions';

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const dispatch = useDispatch();

  const selectUser = (state: ApplicationState) => state.auth.user;
  const user = useSelector(selectUser);

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          inactiveTintColor="#000000"
          labelStyle={{ color: '#000000', fontSize: 28 }}
          icon={({ color }) => <FeatherIcon name="x" color={color} size={30} />}
          label="Fechar"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          inactiveTintColor="#000000"
          labelStyle={{ color: '#000000', fontSize: 28 }}
          icon={({ color }) => (
            <FeatherIcon name="home" color={color} size={30} />
          )}
          label="Ínicio"
          onPress={() => props.navigation.navigate('Dashboard')}
        />
        <DrawerItem
          inactiveTintColor="#000000"
          labelStyle={{ color: '#000000', fontSize: 28 }}
          icon={({ color }) => (
            <FeatherIcon name="user" color={color} size={30} />
          )}
          label="Perfil"
          onPress={() => {}}
        />
        <DrawerItem
          inactiveTintColor="#000000"
          labelStyle={{ color: '#000000', fontSize: 28 }}
          icon={({ color }) => (
            <FeatherIcon name="map" color={color} size={30} />
          )}
          label="Mapa"
          onPress={() => {}}
        />
        <DrawerItem
          inactiveTintColor="#000000"
          labelStyle={{ color: '#000000', fontSize: 28 }}
          icon={({ color }) => (
            <FeatherIcon name="sliders" color={color} size={30} />
          )}
          label="Transações"
          onPress={() => props.navigation.navigate('Transactions')}
        />
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          inactiveTintColor="#000000"
          labelStyle={{ color: '#000000', fontSize: 28 }}
          icon={({ color }) => (
            <FeatherIcon name="log-out" color={color} size={30} />
          )}
          label="Sair"
          onPress={() => {}}
        />
      </View>
    </Container>
  );
};

export default DrawerContent;
