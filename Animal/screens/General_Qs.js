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

import { MonoText } from '../components/StyledText';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOruentationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';
import { tsTypeAliasDeclaration } from '@babel/types';

export default class QuestionOne extends React.Component {
  static navigationOptions = ({ navigation }) => ({

  });

  constructor(props) {
    super(props);

    this.state = {
      selectedOne: false,
      selectedTwo: false,
      selectedThree: false,
      selectedFour: false,
    }

  }
  render() {
    var response1 = this.state.selectedOne;
    var response2 = this.state.selectedTwo;
    var response3 = this.state.selectedThree;
    var response4 = this.state.selectedFour;


    return (
      <ScrollView style={styles.container}>
        <View style={{ padding: wp('5%') }} />
        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Let's start with...</Text>
        </View>

        <View style={{ padding: wp('3%') }} />

        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Does this animal fly?</Text>

          <View style={{ flexDirection: 'row', paddingTop: hp('2%') }}>
            <TouchableOpacity onPress={() => { this.setState({selectedOne: true}) }} style={styles.yesButton}>
              <Text style={styles.nextText}>Yes</Text>
            </TouchableOpacity>

            <View style={{ padding: wp('2%') }} />

            <TouchableOpacity onPress={() => { this.setState({selectedOne: false}) }} style={styles.noButton}>
              <Text style={styles.nextText}>No</Text>
            </TouchableOpacity>

            <View style={{ padding: wp('2%') }} />


            {this.state.selectedOne == true && <Text style={styles.getStartedText}>Yes</Text>}
            {this.state.selectedOne == false && <Text style={styles.getStartedText}>No</Text>}

          </View>


        </View>

        <View style={{ padding: wp('3%') }} />

        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Does this animal lay eggs?</Text>
          
          <View style={{ flexDirection: 'row', paddingTop: hp('2%') }}>
            <TouchableOpacity onPress={() => { this.setState({selectedTwo: true}) }} style={styles.yesButton}>
              <Text style={styles.nextText}>Yes</Text>
            </TouchableOpacity>

            <View style={{ padding: wp('2%') }} />

            <TouchableOpacity onPress={() => { this.setState({selectedTwo: false}) }} style={styles.noButton}>
              <Text style={styles.nextText}>No</Text>
            </TouchableOpacity>

            <View style={{ padding: wp('2%') }} />


            {this.state.selectedTwo == true && <Text style={styles.getStartedText}>Yes</Text>}
            {this.state.selectedTwo == false && <Text style={styles.getStartedText}>No</Text>}

          </View>
          
        </View>

        <View style={{ padding: wp('3%') }} />

        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Does this animal have scales?</Text>

          <View style={{ flexDirection: 'row', paddingTop: hp('2%') }}>
            <TouchableOpacity onPress={() => { this.setState({selectedThree: true}) }} style={styles.yesButton}>
              <Text style={styles.nextText}>Yes</Text>
            </TouchableOpacity>

            <View style={{ padding: wp('2%') }} />

            <TouchableOpacity onPress={() => { this.setState({selectedThree: false}) }} style={styles.noButton}>
              <Text style={styles.nextText}>No</Text>
            </TouchableOpacity>

            <View style={{ padding: wp('2%') }} />


            {this.state.selectedThree == true && <Text style={styles.getStartedText}>Yes</Text>}
            {this.state.selectedThree == false && <Text style={styles.getStartedText}>No</Text>}

          </View>

        </View>

        <View style={{ padding: wp('3%') }} />

        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Does this animal have gills?</Text>

          <View style={{ flexDirection: 'row', paddingTop: hp('2%') }}>
            <TouchableOpacity onPress={() => { this.setState({selectedFour: true}) }} style={styles.yesButton}>
              <Text style={styles.nextText}>Yes</Text>
            </TouchableOpacity>

            <View style={{ padding: wp('2%') }} />

            <TouchableOpacity onPress={() => { this.setState({selectedFour: false}) }} style={styles.noButton}>
              <Text style={styles.nextText}>No</Text>
            </TouchableOpacity>

            <View style={{ padding: wp('2%') }} />


            {this.state.selectedFour == true && <Text style={styles.getStartedText}>Yes</Text>}
            {this.state.selectedFour == false && <Text style={styles.getStartedText}>No</Text>}

          </View>

        </View>
        <View style={{ padding: wp('3%') }} />



        <View style={{ alignItems: 'center' }}>

          <TouchableOpacity onPress={() => { if(response2 === true && response3 === false && response4 === false) {
            this.props.navigation.navigate('Bird')
          } 
          else if (response1 === false && response2 === true && response4 === true) {
            this.props.navigation.navigate('Fish')
          }
          else if (response1 === false && response2 === false && response3 === false && response4 === false) {
            this.props.navigation.navigate('Mammal')
          }
          else if (response1 === false && response2 === true && response3 === false) {
            this.props.navigation.navigate('Amphibian')
          }
          else if (response1 === false && response2 === true && response3 === true && response4 === false) {
            this.props.navigation.navigate('Reptile')
          }
          else {
            this.props.navigation.navigate('Bird')
          }

          }} style={styles.nextButton}>
            <Text style={styles.nextText}>Next</Text>
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
    alignItems: 'flex-start',
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


