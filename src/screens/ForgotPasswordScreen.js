import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import TextView from '../components/TextView';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';

import { AlertNotificationRoot, Toast, ALERT_TYPE } from 'react-native-alert-notification';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../redux/auth/actions';

const ForgotPassword = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const onSendResetClick = async () => {
        console.log('Send Reset Button Clicked');
        const result = await dispatch(forgotPassword({ email: email }));
        if(result) {
            // navigate to the Reset Password Screen
            navigation.push('ConfirmPassword', {
                emailProps: email
            });
        } else {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Warning',
                textBody: "Something went wrong, please try again",
            })
        }
    }
    const onBackClick = () => {
        console.log('Back Button clicked');
        navigation.goBack();
    }

    return (
        <AlertNotificationRoot>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <BackButton type="dark" onPress={() => onBackClick()} />
                    <Text style={styles.topBoxText1}>Forgot Password</Text>
                    <Text style={styles.topBoxText2}>Enter the email you registerd with</Text>
                    <TextView placeholder={'E-mail Address'} type={'email'} value={email} onChangeText={(value) => {setEmail(value)}} />
                    <Text style={styles.topBoxText3}>We will send you an email with the instructions to reset your password</Text>
                </View>
                <View style={styles.bottomBox}>
                    <Button title="Send Reset Link" color={Colors.WhiteButton} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50 }} onPress={() => onSendResetClick()} disabled={false} font={Fonts.NexaBold} />
                </View>
            </View>
        </View>
        </AlertNotificationRoot>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 20,
    },
    topBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    topBoxText1: {
        marginTop: 7,
        fontSize: 21,
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBlack,
    },
    topBoxText2: {
        marginTop: 7,
        marginBottom: 7,
        fontSize: 12,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBook,
    },
    
    topBoxText3: {
        marginTop: 7,
        fontSize: 10,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBook,
    },
    bottomBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
})

export default ForgotPassword;