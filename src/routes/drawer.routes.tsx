import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../components/DrawerContent';

import AppRoutes from './app.routes';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => (
  <Drawer.Navigator drawerStyle={{ width: "55%" }} drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="App" component={AppRoutes} />
  </Drawer.Navigator>
);

export default DrawerRoutes;
