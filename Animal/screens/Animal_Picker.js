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
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOruentationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';

export default class AnimalPicker extends React.Component {
  static navigationOptions = ({ navigation }) => ({

  });


  constructor(props) {
    super(props);


  }
  render() {
    return (

      <View style={styles.container}>

        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Choose your animal</Text>
        </View>

        <View style={{ padding: wp('5%') }} />


        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

          <View style={{ alignItems: 'flex-start', paddingLeft: wp('5%'), flexDirection: 'column' }} >

            <TouchableOpacity style={styles.animalButton}>
              <Text style={styles.animalText}>Penguin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Komodo Dragon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Great White Shark</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Frog</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Gorilla</Text>
            </TouchableOpacity>

          </View>

          <View style={{ padding: wp('5%') }} />
          <View style={{ alignItems: 'flex-end', paddingRight: wp('5%'), flexDirection: 'column' }} >

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Toucan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Snake</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Swordfish</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Salamander</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.animalButton}>
            <Text style={styles.animalText}>Lion</Text>
            </TouchableOpacity>

          </View>
        </View>




      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  animalButton: {
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
  getStartedText: {
    fontSize: 80,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 100,
    textAlign: 'center',
  },
  animalText: {
    fontSize: 50,
    color: 'black',
    lineHeight: 100,
    textAlign: 'center',
  },
});
