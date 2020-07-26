import 'react-native-gesture-handler';

import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ApolloProvider } from '@apollo/client';

import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './store';

import client from './services/client';

import Routes from './routes/index';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ApolloProvider>
    </PersistGate>
  </Provider>
);

export default App;
