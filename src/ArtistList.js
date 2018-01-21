/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import ArtistBox from './ArtistBox'

export default class ArtistList extends Component {
  render() {
    const artistFromAPP = this.props.artist
    
    return (
        <FlatList
          data={Array(500).fill(artistFromAPP)}
          renderItem={({item}) => <ArtistBox artist = {artistFromAPP} />}
        />

    );
  }
}

const styles = StyleSheet.create({

});