
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ArtistBox from './ArtistBox'

export default class PlatziMusic extends Component {
  render() {
    const artist = {
      image: 'https://lastfm-img2.akamaized.net/i/u/300x300/31a51f6e3ec647c8997150ec837891c7.png',
      name: 'David Bowie',
      likes:200,
      comments:  140
    }
    return (
      <View style={styles.container}>
        <ArtistBox artist = {artist}/>
        <ArtistBox artist = {artist}/>
        <ArtistBox artist = {artist}/>
        <ArtistBox artist = {artist}/>
        <ArtistBox artist = {artist}/>
        <ArtistBox artist = {artist}/>
        <ArtistBox artist = {artist}/>
        <ArtistBox artist = {artist}/>
        <ArtistBox artist = {artist}/>
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
  artistBox: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 15
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
});
