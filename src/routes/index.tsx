import React from 'react';

import { View, ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';

import { ApplicationState } from '../store/index';

import DrawerRoutes from './drawer.routes';
// import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const selectIsSigned = (state: ApplicationState) => state.auth.signed;
  const signed = useSelector(selectIsSigned);

  const selectIsLoading = (state: ApplicationState) => state.auth.loading;
  const loading = useSelector(selectIsLoading);

  if (loading) {
    return <ActivityIndicator size="large" color="#e72051" />;
  }

  // signed ? <AppRoutes /> : <AuthRoutes />

  return <DrawerRoutes />;
};

export default Routes;
