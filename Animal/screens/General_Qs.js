import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOruentationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';

export default class QuestionOne extends React.Component {
  static navigationOptions = ({ navigation }) => ({

  });

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{ padding: wp('5%') }} />
        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Let's start with...</Text>
        </View>
        <View style={{ padding: wp('3%') }} />
        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Does this animal fly?</Text>
        </View>
        <View style={{ padding: wp('3%') }} />
        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Does this animal lay eggs?</Text>
        </View>
        <View style={{ padding: wp('3%') }} />
        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Does this animal have scales?</Text>
        </View>
        <View style={{ padding: wp('3%') }} />
        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Does this animal have gills?</Text>
        </View>
        <View style={{ padding: wp('3%') }} />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>

            <Button onPress={() => { this.props.navigation.navigate('Home') }} />
          </View>



        </ScrollView>


      </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'left',
    marginHorizontal: 150,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 60,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
