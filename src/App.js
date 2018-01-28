import React from 'react';


import { StackNavigator } from 'react-navigation';

import HomeView from './HomeView'
import ArtistDetail from './ArtistDetailView'

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

export default RootNavigator;