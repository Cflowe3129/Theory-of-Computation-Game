import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './navigation/MainTabNavigator';
import QuestionOne from './screens/Question_One';
import HomeScreen from './screens/HomeScreen';
import AnimalPicker from './screens/Animal_Picker';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Picker: AnimalPicker,
    Main: MainTabNavigator,
    QOne: QuestionOne,
    Home: HomeScreen,
  })
);





// export default createAppContainer(createSwitchNavigator({
//   Home: HomeScreen,
//   Q_one: QuestionOne,
// }))