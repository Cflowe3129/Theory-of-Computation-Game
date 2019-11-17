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
        <View style={styles.container}>
        <View style={{ padding: wp('5%') }} />

        <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Is this your animal?</Text>
        </View>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
                <Image
                    source={
                        require('./animalpics/dragon.png')
                    }
                    style={styles.welcomeImage}
                />
            </View>
            <View style={{ alignItems: 'center' }}>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} style={styles.nextButton}>
                    <Text style={styles.nextText}>Finish</Text>
                </TouchableOpacity>

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
getStartedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 150,
},
contentContainer: {
    paddingTop: 30,
},
getStartedText: {
    fontSize: 60,
    color: 'black',
    lineHeight: 45,
    textAlign: 'left',
    padding: hp('2%')
},
welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
welcomeImage: {
    width: 350,
    height: 280,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
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