import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Images from '../theme/Images';
import Button from '../components/Button';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';

const WelcomeScreen = ({ navigation }) => {

    const onSignUpClick = () => {
        console.log("Sing Up Clicked");
        navigation.push('SignUp');
    }
    const onSignInClick = () => {
        console.log("Sign In Clicked");
        navigation.push('SignIn');
    }
    const onSkipClick = () => {
        navigation.push('Home', {
            loginState: false,
            userName: null
        })
    }

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <BackgroundImage name="main_bg2" />
            <View style={styles.container}>
                <View style={styles.boxTop}>
                    <Image style={styles.blackLogo} source={Images.black_logo} />
                    <Text style={styles.boxTopText}>Earn Points for{'\n'}Shopping</Text>
                </View>
                <View style={styles.boxBottom}>
                    <View><Button title="Sign Up" color={Colors.White} backColor="transparent" style={{ borderColor: Colors.WhiteBorder, borderWidth: 1, borderRadius: 50 }} onPress={() => onSignUpClick()} disabled={false} font={Fonts.NexaBold} /></View>
                    <View style={{ paddingTop: 8 }}><Button title="Sign In" color={Colors.White} backColor="transparent" style={{ borderColor: Colors.WhiteBorder, borderWidth: 1, borderRadius: 50 }} onPress={() => onSignInClick()} disabled={false} font={Fonts.NexaBold} /></View>
                    <Text style={styles.boxBottomText1}>Skip and Navigate through the Application</Text>
                    <TouchableOpacity onPress={() => onSkipClick()}><Text style={styles.boxBottomText2}>Skip</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    boxTop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    blackLogo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    boxTopText: {
        fontSize: 20,
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBlack,
        lineHeight: 27,
        paddingBottom: 40,
    },
    boxBottom: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    boxBottomText1: {
        paddingTop: 22,
        color: Colors.White100,
        fontFamily: Fonts.NexaBook,
        fontSize: 11,
        textAlign: 'center',
    },
    boxBottomText2: {
        paddingTop: 10,
        color: Colors.White200,
        fontFamily: Fonts.NexaBook,
        fontSize: 11,
        textDecorationLine: "underline",
        textAlign: 'center',
    },
})

export default WelcomeScreen;