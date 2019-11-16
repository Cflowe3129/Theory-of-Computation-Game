import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './navigation/MainTabNavigator';
import QuestionOne from './screens/General_Qs';
import BirdScreen from './screens/Bird_Qs';
import ReptileScreen from './screens/Reptile_Qs';
import FishScreen from './screens/Fish_Qs';
import AmphibianScreen from './screens/Amphibian_Qs';
import MammalScreen from './screens/Mammal_Qs';
import HomeScreen from './screens/HomeScreen';
import AnimalPicker from './screens/Animal_Picker';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    QOne: QuestionOne,
    Mammal: MammalScreen,
    Amphibian: AmphibianScreen,
    Fish: FishScreen,
    Reptile: ReptileScreen,
    Bird: BirdScreen,
    Home: HomeScreen,
    Picker: AnimalPicker,
    Main: MainTabNavigator,
  })
);





// export default createAppContainer(createSwitchNavigator({
//   Home: HomeScreen,
//   Q_one: QuestionOne,
// }))