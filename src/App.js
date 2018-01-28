import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ArtistList from './ArtistList'
import { getArtists } from './api-client'
import renderIf from './if-conditional';

export default class PlatziMusic extends Component {
  state = {
    artists: [],
    loader : true
  }

  render() {
    const artists = this.state.artists
    
    getArtists().then(data => this.setState({ artists: data, loader:false }))

    return (
      <View style={styles.container}>
        {/* Loader */}
        {renderIf(this.state.loader, <ActivityIndicator size="large" color="#0000ff" /> )}
        {renderIf(!!this.state.artists, <ArtistList artists={artists} /> )}  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

