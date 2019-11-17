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

import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOruentationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';

export default class NoGuess extends React.Component {
    static navigationOptions = ({ navigation }) => ({

    });


    constructor(props) {
        super(props);


    }
    render() {
        return (

            <View style={styles.container}>

                <View style={styles.getStartedContainer}>

                    <Text style={styles.getStartedText}>The Genie could not guess your animal. You win!</Text>
                </View>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={
                                require('../assets/images/genie.png')
                            }
                            style={styles.welcomeImage}
                        />
                        <Image
                            source={
                                require('../assets/images/lamp.png')
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
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
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
        width: 200,
        height: 180,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
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
        fontSize: 80,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 100,
        textAlign: 'center',
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
    nextText: {
        fontSize: 50,
        color: 'black',
        lineHeight: 100,
        textAlign: 'center',
    },
});
