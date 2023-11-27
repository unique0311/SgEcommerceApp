import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import TextView from '../components/TextView';

import { AlertNotificationRoot } from 'react-native-alert-notification';
import {useDispatch, useSelector} from 'react-redux';
import {resetPasswordAction} from '../redux/auth/actions';

const ResetPassword = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const onBackClick = () => {
    navigation.goBack();
  };
  const onNextClick = async () => {
    const resultConfirmState = await dispatch(resetPasswordAction({ code: code, email: email, password: password }));
    if(resultConfirmState) {
      console.log('success reset password');
    } else {
      console.log('failed reset password');
    }
  };
  useEffect(() => {
    setEmail(route.params.emailProps);
    setCode(route.params.codeProps);
  }, []);
  return (
    <AlertNotificationRoot>
    <View style={styles.container}>
      <View style={styles.topBox}>
        <BackButton type="dark" onPress={() => onBackClick()} />
        <Text style={styles.verifyText}>Reset the password</Text>
        <TextView placeholder={'Password'} type={'password'} value={password} onChangeText={(value) => {setPassword(value)}} />
      </View>
      <View style={styles.bottomBox}>
        <View>
          <Button
            title="Reset Password"
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
    paddingBottom: 10,
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

export default ResetPassword;
