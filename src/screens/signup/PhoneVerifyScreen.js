import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Dot from '../../components/Dot';
import CodeInput from '../../components/CodeInput';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

import { useSelector, useDispatch } from 'react-redux';
import {sendCode, confirmCodeAction} from '../../redux/auth/actions';

const PhoneVerifyScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector(state => state.auth.registerForm.phoneNumber);
  const [confirmCode, setConfirmCode] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: ''
  });
    const onBackClick = () => {
        navigation.goBack();
    }
    const onNextClick = async () => {
      var getConfirmCode = confirmCode.first+confirmCode.second+confirmCode.third+confirmCode.fourth+confirmCode.fifth;
      // navigate to the phone verify screen when retuns true about the confirm the code
      const resultConfirmState = await dispatch(confirmCodeAction({ type: 'phone', code: getConfirmCode, value: phoneNumber }));
      if(resultConfirmState) {
        navigation.push('TellUs');
        console.log('success phone verified');
      } else {
        console.log('failed phone verified');
      }
    }
    useEffect(() => {
      dispatch(sendCode({ type: 'phone', value: phoneNumber }));
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <BackButton type="dark" onPress={() => onBackClick()} />
                <Text style={styles.verifyText}>Phone Verification</Text>
                <Text style={styles.verifySubText}>Enter the code sent to{'\n'}<Text style={{ fontWeight: 'bold' }}>{phoneNumber}</Text></Text>
                <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <CodeInput value={confirmCode.first} onChange={(value) => {setConfirmCode({ ...confirmCode, first: value })}} />
                  <CodeInput value={confirmCode.second} onChange={(value) => {setConfirmCode({ ...confirmCode, second: value })}} />
                  <CodeInput value={confirmCode.third} onChange={(value) => {setConfirmCode({ ...confirmCode, third: value })}} />
                  <CodeInput value={confirmCode.fourth} onChange={(value) => {setConfirmCode({ ...confirmCode, fourth: value })}} />
                  <CodeInput value={confirmCode.fifth} onChange={(value) => {setConfirmCode({ ...confirmCode, fifth: value })}} />
                </View>
                <Text style={styles.receiveText}>Didn't receive an OTP?</Text>
                <Text style={styles.resendText}><Text style={styles.resendBoldText}>Resend</Text> or <Text style={styles.resendBoldText}>Change Phone Number</Text></Text>
            </View>
            <View style={styles.bottomBox}>
                {/* <Text style={styles.bottomBoxText}>The e-mail verification process will be decided at a large stage of the development</Text> */}
                <View>
                    <Button title="Next" color={Colors.WhiteButton} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50 }}  onPress={() => onNextClick()} disabled={false} font={Fonts.NexaBold} />
                    <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ marginRight: 5 }}><Dot active={true} /></View>
                        <View style={{ marginRight: 5 }}><Dot active={true} /></View>
                        <View style={{ marginRight: 5 }}><Dot active={true} /></View>
                        <View style={{ marginRight: 5 }}><Dot active={false} /></View>
                        <View><Dot active={false} /></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'column',
      padding: 20,
    },
    topBox: {
      flex: 1,
      flexDirection: 'column',
    },
    verifyText: {
      paddingTop: 5,
      fontSize: 20,
      color: Colors.PrimaryPurple500,
      fontFamily: Fonts.NexaBlack,
    },
    verifySubText: {
      paddingTop: 3,
      fontSize: 13,
      color: Colors.Black400,
      fontFamily: Fonts.NexaBook,
      lineHeight: 18,
    },
    receiveText: {
      paddingTop: 7,
      color: Colors.Black400,
      fontFamily: Fonts.NexaBook,
      fontSize: 11,
    },
    resendText: {
      paddingTop: 3,
      color: Colors.Black400,
      fontFamily: Fonts.NexaBook,
      fontSize: 11,
    },
    resendBoldText: {
      color: '#0b0b0b',
      fontSize: 13,
      color: Colors.Black500,
      fontFamily: Fonts.NexaHeavy,
      textDecorationLine: 'underline',
    },
    bottomBox: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    bottomBoxText: {
      color: '#df5f5f',
      fontFamily: Fonts.NexaBook,
      fontSize: 12,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 100,
    },
  });

export default PhoneVerifyScreen;