import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { View, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';

const Stack = createStackNavigator();

type RootStackParamList = {
  Dashboard: undefined;
  Transactions: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard' | 'Transactions'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const AppRoutes: React.FC<Props> = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#312e38',
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ padding: 30 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <FeatherIcon name="menu" color="#fff" size={30} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ padding: 30 }}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
        >
          <View style={{ width: 30, height: 30 }}>
            <FeatherIcon name="bell" color="#fff" size={30} />
            <View
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 10,
                height: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        </TouchableOpacity>
      ),
    }}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Transactions" component={Transactions} />
  </Stack.Navigator>
);

export default AppRoutes;
