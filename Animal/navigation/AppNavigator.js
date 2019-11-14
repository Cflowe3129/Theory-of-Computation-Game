import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Question_One from '../screens/Question_One';
import HomeScreen from '../screens/HomeScreen'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Home: HomeScreen,
    QuestionOne: Question_One,
    Main: MainTabNavigator,
  })
);

