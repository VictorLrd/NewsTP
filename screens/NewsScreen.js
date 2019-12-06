import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, FlatList, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Swipeout from 'react-native-swipeout';
import NewsService from '../services/NewsService';
import { connect } from 'react-redux'



class NewsScreen extends Component {
  service = new NewsService();
  static navigationOptions = (e) => {
    return {
      title: 'News'
    }
  };

  constructor(props) {
    super(props)
    console.log(props)
  }

  state = {
    value: '',
    categories: [],
    articles: [],
    rowSelect: {}
  }

  // componentDidUpdate = () => {
  //   this.getCategories()
  // }

  async getArticles() {
    this.setState({categories: this.props.categories.categories})
    await this.props.categories.categories.forEach(async item => {
      this.service.getNewsByCategorie(item.value).then(response => {
        this.setState(state => {
          const articles = state.articles.concat(response.data.articles);
          return {
            articles,
          };
        });
      })
    })
  }

  async componentDidMount(){
    await this.getArticles()
  }



  render() {
    var swipeoutBtns = [
      {
        text: 'Lu',
        onPress : async () => {

        }
      }
    ]
    const { navigation } = this.props;
    return(
      <View>
        <FlatList
          data={this.state.articles}
          renderItem={({item}) =>
          // <Swipeout right={swipeoutBtns} onOpen={(sectionID, rowID) => {
          //   // console.log(sectionID,rowID)
          //   // this.setState({rowSelect: rowID})
          // }}>
            <View style={ styles.row }>
              <Text style={{color: 'white'}}>{item.author}</Text>
              <Text style={{color: 'white'}}>{item.publishedAt}</Text>
              {/* <Text style={{color: 'white'}}>{item.source.name}</Text> */}
              <Image source={ { uri: item.urlToImage } } style={ { width: 100, height: 100 } }/>
              <Icon style={{color: 'yellow'}} size={25} name={'ios-add'} onPress={() => {
                  this.props.navigation.push('NewsDetailScreen', {
                    otherParam: JSON.stringify(item),
                  })
                }}></Icon>
            </View>
          // </Swipeout>
          }
          // keyExtractor={item => item.description}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.toggleFavorite.categories
  }
}

export default connect(mapStateToProps)(NewsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#003f5c"
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#003f5c",
    marginBottom: 20
  }
});