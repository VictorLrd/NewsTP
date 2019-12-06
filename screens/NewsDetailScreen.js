import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, FlatList, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Swipeout from 'react-native-swipeout';
import WeatherService from '../services/NewsService';


export default class NewsDetailScreen extends Component {
  service = new WeatherService();
  state = { data: {} };
  static navigationOptions = (e) => {
    return {
      title: 'News détail',
    }
  };

  componentDidUpdate = () => {

  }

  componentDidMount(){
    this.setState( {
            data: JSON.parse(this.props.navigation.getParam('otherParam')),
    } );
  }



  render() {
    return(
      <View>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{color: 'black', marginBottom:20}}>{this.state.data.title}</Text>
          <Image source={ { uri: this.state.data.urlToImage } } style={ { width: 100, height: 100, marginBottom:20 } }/>
          <Text style={{color: 'black', marginBottom:20}}>Publié le: {this.state.data.publishedAt}</Text>
          <Text style={{color: 'black', marginBottom:20}}>Auteur: {this.state.data.author}</Text>
          <Text style={{color: 'black', marginBottom:20}}>Contenu: {this.state.data.content}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red",
    marginTop: 20
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  }
});