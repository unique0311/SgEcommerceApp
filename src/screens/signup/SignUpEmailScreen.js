import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
import BackButton from '../../components/BackButton';
import TextView from '../../components/TextView';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
import Dot from '../../components/Dot';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

import {useDispatch, useSelector} from 'react-redux';
import {
  register,
  saveSignUpEmailStep1,
  loadToken,
} from '../../redux/auth/actions';
import {
  AlertNotificationRoot,
  ALERT_TYPE,
  Toast,
} from 'react-native-alert-notification';

const SignUpEmailScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const registerForm = useSelector(state => state.auth.registerForm);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phoneNumber: '',
    birthday: '1998-04-15',
    gender: 'MALE',
    familyCode: 'KASMOD',
  });

  useEffect(() => {
    // dispatch(loadToken());
    if (route.params) {
      const {state} = route.params;
      state ? setChecked(true) : setChecked(false);
    } else {
      setChecked(false);
    }
  }, []);

  useEffect(() => {
    setFormData(registerForm);
  }, [registerForm]);

  const onBackClick = () => {
    console.log('Back Button Clicked');
    navigation.goBack();
  };
  const onSignInClick = () => {
    console.log('Sign In button clicked');
    navigation.push('SignIn');
  };
  const onSignUpClick = async () => {
    console.log('Sign Up button clicked');
    if (!checked) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Please check the Terms & Conditions and Privacy Policy',
      });
      return;
    }
    if (!formData.firstName) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning',
            textBody: 'Please input the firstname',
        });
        return;
    }
    if (!formData.lastName) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning',
            textBody: 'Please input the lastname',
        });
        return;
    }
    if (!formData.email) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning',
            textBody: 'Please input the email',
        });
        return;
    }
    if (!formData.phoneNumber) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning',
            textBody: 'Please input the phone number',
        });
        return;
    }
    if (!formData.password) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning',
            textBody: 'Please input the password',
        });
        return;
    }
    if (!formData.passwordConfirmation) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning',
            textBody: 'Please input the password confirmation',
        });
        return;
    }
    if (formData.password != formData.passwordConfirmation) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: `Passwords don't match`,
      });
      return;
    }

    console.log(formData);
    const res_data = await dispatch(register({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
      phoneNumber: formData.phoneNumber
    }));
    //navigation 4.7
    if(res_data) {
        navigation.push('EmailVerify');
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: `Something went wrong`,
      });
    }
  };
  const onCheckBoxClick = async selected => {
    if (!selected) {
      setChecked(selected);
    } else {
      console.log('check box clicked' + selected);
      //navigate the terms and conditions screen
      await dispatch(saveSignUpEmailStep1(formData));
      navigation.push('Term');
    }
  };
  return (
    <AlertNotificationRoot>
      <View style={{flex: 1, position: 'relative'}}>
        <BackgroundImage name="main_bg3" />
        <View style={styles.container}>
          <View style={styles.boxTop}>
            <BackButton type="white" onPress={() => onBackClick()} />
            <Text style={styles.signUpText}>Sign Up</Text>
            <View style={styles.textViewPaddingBottom}>
              <TextView
                placeholder="First Name*"
                value={formData.firstName}
                onChangeText={value => {
                  setFormData({...formData, firstName: value});
                }}
              />
            </View>
            <View style={styles.textViewPaddingBottom}>
              <TextView
                placeholder="Last Name*"
                value={formData.lastName}
                onChangeText={value => {
                  setFormData({...formData, lastName: value});
                }}
              />
            </View>
            <View style={styles.textViewPaddingBottom}>
              <TextView
                type={'email'}
                placeholder="E-mail Address*"
                value={formData.email}
                onChangeText={value => {
                  setFormData({...formData, email: value});
                }}
              />
            </View>
            <View style={styles.textViewPaddingBottom}>
              <TextView
                type={'number'}
                placeholder="Phone Number*"
                value={formData.phoneNumber}
                onChangeText={value => {
                  setFormData({...formData, phoneNumber: value});
                }}
              />
            </View>
            <View style={styles.textViewPaddingBottom}>
              <TextView
                type={'password'}
                placeholder="Password*"
                value={formData.password}
                onChangeText={value => {
                  setFormData({...formData, password: value});
                }}
              />
            </View>
            <View style={styles.textViewPaddingBottom}>
              <TextView
                type={'password'}
                placeholder="Password Confirmation*"
                value={formData.passwordConfirmation}
                onChangeText={value => {
                  setFormData({...formData, passwordConfirmation: value});
                }}
              />
            </View>
            <View style={styles.checkBox}>
              <View>
                <CheckBox
                  value={checked}
                  onChange={selected => onCheckBoxClick(selected)}
                />
              </View>
              <Text style={styles.checkBoxText}>
                I agree to the{' '}
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontFamily: Fonts.NexaBold,
                  }}>
                  terms and conditions
                </Text>{' '}
                {'\n'}and{' '}
                <Text
                  style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                    fontFamily: Fonts.NexaBold,
                  }}>
                  privacy policy
                </Text>
              </Text>
            </View>
            <View style={{paddingTop: 22}}>
              <Button
                title="Sign Up"
                color={Colors.WhiteButton}
                backColor={Colors.PrimaryPurple500}
                style={{borderRadius: 50}}
                onPress={() => onSignUpClick()}
                disabled={false}
                font={Fonts.NexaBold}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <View style={{marginRight: 8}}>
                <Dot active={true} />
              </View>
              <View style={{marginRight: 8}}>
                <Dot active={false} />
              </View>
              <View style={{marginRight: 8}}>
                <Dot active={false} />
              </View>
              <View style={{marginRight: 8}}>
                <Dot active={false} />
              </View>
              <View>
                <Dot active={false} />
              </View>
            </View>
          </View>
          <View style={styles.boxBottom}>
            <Text style={styles.boxBottomText}>Already have an account?</Text>
            <View style={{paddingTop: 5}}>
              <Button
                title="Sign In"
                color={Colors.WhiteButton}
                backColor="transparent"
                style={{
                  borderRadius: 50,
                  borderWidth: 1.5,
                  borderColor: '#8c89b3',
                }}
                onPress={() => onSignInClick()}
                disabled={false}
                font={Fonts.NexaBold}
              />
            </View>
          </View>
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  boxTop: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  checkBox: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 17,
    fontFamily: Fonts.NexaBook,
  },
  signUpText: {
    paddingTop: 10,
    paddingBottom: 15,
    color: Colors.White,
    fontFamily: Fonts.NexaBlack,
    fontSize: 20,
  },
  textViewPaddingBottom: {
    paddingBottom: 8,
  },
  boxBottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  boxBottomText: {
    color: Colors.White100,
    fontFamily: Fonts.NexaBook,
    fontSize: 9,
    textAlign: 'center',
  },
});

export default SignUpEmailScreen;
