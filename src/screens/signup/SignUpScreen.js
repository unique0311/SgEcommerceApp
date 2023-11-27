import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
import BackButton from '../../components/BackButton';
import Images from '../../theme/Images';
import Button from '../../components/Button';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

const SignUpScreen = ({ route, navigation }) => {
    const [closeBtnShow, setCloseBtnShow] = useState(false);
    const onFacebookClick = () => {
        console.log("Facebook clicked");
    }
    const onGoogleClick = () => {
        console.log("Google clicked");
    }
    const onAppleClick = () => {
        console.log("Apple clicked");
    }
    const onSignInClick = () => {
        console.log("Sign In Clicked");
        navigation.push('SignIn');
    }
    const onSignUpEmailClick = () => {
        console.log('Sign Up Email Clicked');
        navigation.push('SignUpEmail');
    }
    const onSkipClick = () => {
        navigation.push('Home', {
            loginState: false,
            userName: null
        })
    }
    const onCloseClick = () => {
        navigation.goBack();
    }
    useEffect(() => {
        if(route.params) {
            const { show } = route.params;
            show ? setCloseBtnShow(true) : setCloseBtnShow(false);
        } else {
            setCloseBtnShow(false);
        }
    }, []);
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <BackgroundImage name="main_bg" />
            <View style={styles.container}>
                <View style={styles.topBox}>
                    {closeBtnShow ? (
                        <BackButton rightIcon1="close_white" onPressIcon1={() => onCloseClick()} />
                    ) : (<></>)}
                    <Image style={styles.whitelogo} source={Images.white_logo} />
                    <Text style={styles.signUpText}>Sign Up</Text>
                    <View><Button title="Sign Up with Facebook" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50 }} onPress={() => onFacebookClick()} icon="facebook" disabled={false} font={Fonts.NexaBold} /></View>
                    <View style={{ paddingTop: 10 }}><Button title="Sign Up with Google" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50 }} onPress={() => onGoogleClick()} icon="google" disabled={false} font={Fonts.NexaBold} /></View>
                    <View style={{ paddingTop: 10 }}><Button title="Sign Up with Apple" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50 }} onPress={() => onAppleClick()} icon="apple" disabled={false} font={Fonts.NexaBold} /></View>
                    <Text style={styles.signUpSubText}>or you can Sign up with</Text>
                    <Button title="Sign Up with Email" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50 }} onPress={() => onSignUpEmailClick()} disabled={false} font={Fonts.NexaBold} />
                </View>
                <View style={styles.bottomBox}>
                    <View style={{ backgroundColor: Colors.White, paddingTop: 20, paddingBottom: 20 }}>
                        <Text style={styles.bottomBoxText}>Already have an account?</Text>
                        <View style={{ paddingLeft: 20, paddingRight: 20 }}><Button title="Sign In" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderWidth: 1, borderColor: '#9693b7' }} onPress={() => onSignInClick()} disabled={false} font={Fonts.NexaBold} /></View>
                    </View>
                    <TouchableOpacity style={{ paddingTop: 15 }}><Text style={styles.skipText} onPress={() => onSkipClick()}>Skip</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topBox: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    whitelogo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    signUpText: {
        paddingTop: 15,
        paddingBottom: 17,
        color: Colors.White,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
    },
    signUpSubText: {
        paddingTop: 20,
        paddingBottom: 20,
        color: Colors.White100,
        fontFamily: Fonts.NexaBold,
        fontSize: 9,
        textAlign: 'center',
    },
    bottomBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    bottomBoxText: {
        paddingBottom: 8,
        textAlign: 'center',
        fontSize: 9,
        color: Colors.PrimaryPurple400,
        fontFamily: Fonts.NexaBook,
    },
    skipText: {
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 10,
        color: Colors.White,
        fontFamily: Fonts.NexaBook,
        textDecorationLine: 'underline',
    },
})

export default SignUpScreen;