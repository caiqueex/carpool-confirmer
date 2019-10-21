import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import HomeScreenView from '../views/HomeScreen/HomeScreen';
  
  const AppRouteConfigs = createStackNavigator({
    HomeScreen: {
      screen: HomeScreenView,
      navigationOptions: ({ navigation }) => ({
          header: null
      })
    },

  });
  
  export default (AppContainer = createAppContainer(AppRouteConfigs)); 