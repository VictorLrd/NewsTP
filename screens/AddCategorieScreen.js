import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, CheckBox } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { connect } from 'react-redux'


class AddCategorieScreen extends Component {

  static navigationOptions = (e) => {
    return {
      title: 'Ajouter une categorie'
    }
  }

  constructor(props) {
    super(props)
    this.toggleCategorieCheck = this.toggleCategorieCheck.bind(this)
  }

  state = {
    value: '',
    categories: []
  }

  componentDidMount() {
    // console.log("componentDidUpdate : ")
    this.setState({categories: this.props.categories.categories})
  }

  toggleCategorieCheck(item) {
    const categorie = {value: item.value, checked: !item.checked}
    console.log(item.value,item.checked)
    const action = { type: "TOGGLE_CATEGORIE", value: categorie }
    this.props.dispatch(action)
    this.setState({categories: this.props.categories.categories})
    console.log(this.props.categories)
  }

  render() {
    console.log("rerender")
    return(
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'red'}}>
        <FlatList
          data={this.state.categories}
          renderItem={({item}) =>
            <View style={{marginTop: 30}}>
              <Text style={{color: 'white'}}>{item.value}</Text>
              <CheckBox
                value={item.checked}
                onChange={() => this.toggleCategorieCheck(item)}
              />
            </View>
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

export default connect(mapStateToProps)(AddCategorieScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#003f5c"
  }
});