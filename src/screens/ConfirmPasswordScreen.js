import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import CodeInput from '../components/CodeInput';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import {AlertNotificationRoot} from 'react-native-alert-notification';

import {useDispatch, useSelector} from 'react-redux';
import {confirmPasswordAction, forgotPassword} from '../redux/auth/actions';

const ConfirmPassword = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [confirmCode, setConfirmCode] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
  });
  const [email, setEmail] = useState('');
  const onBackClick = () => {
    navigation.goBack();
  };
  const onNextClick = async () => {
    var getConfirmCode =
      confirmCode.first +
      confirmCode.second +
      confirmCode.third +
      confirmCode.fourth +
      confirmCode.fifth;
    const resultConfirmState = await dispatch(
      confirmPasswordAction({code: getConfirmCode, email: email}),
    );
    if (resultConfirmState) {
      console.log('success confirmed password code');
      navigation.push('ResetPassword', {
        emailProps: email,
        codeProps: getConfirmCode,
      });
    } else {
      console.log('failed confirme password code');
    }
  };
  const resendBtnClick = async () => {
    const result = await dispatch(forgotPassword({email: email}));
  };
  const changeEmailBtnClick = () => {
    navigation.push('ForgotPassword');
  };
  useEffect(() => {
    setEmail(route.params.emailProps);
  }, []);
  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <View style={styles.topBox}>
          <BackButton type="dark" onPress={() => onBackClick()} />
          <Text style={styles.verifyText}>Confirm the password code</Text>
          <Text style={styles.verifySubText}>
            Enter the confirm code sent to{'\n'}
            <Text style={{fontWeight: 'bold'}}>{email}</Text>
          </Text>
          <View
            style={{
              paddingTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <CodeInput
              value={confirmCode.first}
              onChange={value => {
                setConfirmCode({...confirmCode, first: value});
              }}
            />
            <CodeInput
              value={confirmCode.second}
              onChange={value => {
                setConfirmCode({...confirmCode, second: value});
              }}
            />
            <CodeInput
              value={confirmCode.third}
              onChange={value => {
                setConfirmCode({...confirmCode, third: value});
              }}
            />
            <CodeInput
              value={confirmCode.fourth}
              onChange={value => {
                setConfirmCode({...confirmCode, fourth: value});
              }}
            />
            <CodeInput
              value={confirmCode.fifth}
              onChange={value => {
                setConfirmCode({...confirmCode, fifth: value});
              }}
            />
          </View>
          <Text style={styles.receiveText}>Didn't receive an email?</Text>
          <View style={styles.resendText}>
            <TouchableOpacity onPress={() => resendBtnClick()}>
              <Text style={styles.resendBoldText}>Resend</Text>
            </TouchableOpacity>
            <Text> or </Text>
            <TouchableOpacity onPress={() => changeEmailBtnClick()}>
              <Text style={styles.resendBoldText}>Change Email</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <View>
            <Button
              title="Confirm Password Code"
              color={Colors.White}
              backColor={Colors.PrimaryPurple500}
              style={{borderRadius: 50}}
              onPress={() => onNextClick()}
              disabled={false}
              font={Fonts.NexaBold}
            />
          </View>
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  resendBoldText: {
    color: '#0b0b0b',
    fontSize: 13,
    // color: Colors.Black500,
    fontFamily: Fonts.NexaHeavy,
    textDecorationLine: 'underline',
  },
  bottomBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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

export default ConfirmPassword;
