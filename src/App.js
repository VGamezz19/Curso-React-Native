import React from 'react';


import { StackNavigator } from 'react-navigation';

import HomeView from './HomeView'
import ArtistDetail from './ArtistDetailView'
import Login from './LoginView'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      headerTitle: 'Home',
    },

  },
  Details: {
    screen: ArtistDetail,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

const LooginNavigator = StackNavigator ({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
    },

  },
})

export default LooginNavigator;