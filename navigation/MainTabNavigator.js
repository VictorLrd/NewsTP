import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AddCategorieScreen from '../screens/AddCategorieScreen';
import NewsScreen from '../screens/NewsScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';

const FavoritesNavigator = createStackNavigator( {
  NewsScreen: { screen: NewsScreen },
  NewsDetailScreen: { screen: NewsDetailScreen}
},
  {
    initialRouteParams: 'Favorites',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'green'
      },
      headerTintColor: 'yellow',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const MainTabNavigator = createMaterialBottomTabNavigator( {
  Home: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ( { tintColor } ) => (
        <Icon color={ tintColor } size={ 25 } name={ 'ios-home' } />
      ),
      barStyle: { backgroundColor: '#003f5c' }
    }
  },
  Categorie: {
    screen: AddCategorieScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ( { tintColor } ) => (
        <Icon color={ tintColor } size={ 25 } name={ 'ios-star' } />
      ),
      barStyle: { backgroundColor: '#003f5c' }
    }
  }
},
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer( MainTabNavigator );