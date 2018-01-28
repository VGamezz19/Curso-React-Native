import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import {Scene, Router} from 'react-native-router-flux'

import HomeView from './HomeView'
import ArtistDetail from './ArtistDetailView'

// export default class App extends Component<{}>  {
//   render() {
//     //Platfomr nos servira para saber que tipo de dispositivo esta rullando la aplicacion
//     const isAndroid = Platform.OS === 'android'

//     return <Router>
//       <Scene key="root">
//         <Scene key="home" component={HomeView} hideNavBar />
//         <Scene key="artistDetail" component={ArtistDetail} hideNavBar={isAndroid} />
//       </Scene>
//     </Router>
//   }
// }

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