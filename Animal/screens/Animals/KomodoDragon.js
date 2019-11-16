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
  Alert,
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOruentationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';

export default class KomodoDragon extends React.Component {
  static navigationOptions = ({ navigation }) => ({

  });

  constructor(props) {
    super(props);



  }
  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={{ padding: wp('5%') }} />
        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Is this your animal?</Text>
          <Text style={styles.getStartedText}>*insert komodo dragon image</Text>

        </View>

        <View style={{ padding: wp('3%') }} />





        <View style={{ alignItems: 'center' }}>

          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Home')

          }} style={styles.nextButton}>
            <Text style={styles.nextText}>Finish</Text>
          </TouchableOpacity>

        </View>


      </ScrollView>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 150,
  },
  getStartedText: {
    fontSize: 60,
    color: 'black',
    lineHeight: 24,
    textAlign: 'left',
    padding: hp('2%')
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: wp('30%'),
    height: hp('10%'),
    borderRadius: 5,
    backgroundColor: 'rgb(29, 185, 84)',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  yesButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: wp('13%'),
    height: hp('10%'),
    borderRadius: 5,
    backgroundColor: 'rgb(72, 221, 255)',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    fontWeight: 'bold',
  },
  noButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: wp('13%'),
    height: hp('10%'),
    borderRadius: 5,
    backgroundColor: 'rgb(255, 101, 101)',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    fontWeight: 'bold',
  },
  nextText: {
    fontSize: 50,
    color: 'black',
    lineHeight: 100,
    textAlign: 'center',
  },
});

