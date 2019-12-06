import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class HomeScreen extends Component {
  state = {
    data: null
  }


  render() {
    return(
      <View style={ styles.container }>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c"
  }
});
