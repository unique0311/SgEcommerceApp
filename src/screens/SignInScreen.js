import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Images from '../theme/Images';
import TextView from '../components/TextView';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';

import {useDispatch, useSelector} from 'react-redux';
import { login } from '../redux/auth/actions';

import { AlertNotificationRoot } from 'react-native-alert-notification';

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onSignInClick = async () => {
    console.log('Sign In clicked');

    const result = await dispatch(login({
        email: formData.email,
        password: formData.password
    }));
    if (result) {
      navigation.push('Home');
    }
  };
  const onSignUpClick = () => {
    console.log('Sign Up clicked');
    navigation.push('SignUp');
  };
  const onForgotClick = () => {
    console.log('Forgot Clicked');
    navigation.push('ForgotPassword');
  };

  useEffect(() => {

  }, []);

  return (
    <AlertNotificationRoot>
    <View style={{flex: 1, position: 'relative'}}>
      <BackgroundImage name="main_bg3" />
      <View style={styles.container}>
        <View style={styles.topBox}>
          <Image style={styles.whiteLogo} source={Images.white_logo} />
          <Text style={styles.signInText}>Sign In</Text>
          <View style={{paddingTop: 17}}>
            <TextView
              placeholder="E-mail Address"
              value={formData.email}
              onChangeText={value => {
                setFormData({...formData, email: value});
              }}
            />
          </View>
          <View style={{paddingTop: 6}}>
            <TextView
              placeholder="Password"
              type={'password'}
              value={formData.password}
              onChangeText={value => {
                setFormData({...formData, password: value});
              }}
            />
          </View>
          <View style={styles.rememberBox}>
            <View style={styles.rememberBoxLeft}>
              <CheckBox
                value={checked}
                onChange={selected => {
                  setChecked(selected);
                }}
              />
              <Text style={styles.rememberBoxLeftText}>Remember Me</Text>
            </View>
            <View style={styles.rememberBoxRight}>
              <Text
                style={styles.rememberBoxRightText} 
                onPress={() => onForgotClick()}>
                Forgot Password
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <View style={{paddingTop: 35}}>
            <Button
              title="Sign In"
              color={Colors.WhiteButton}
              backColor={Colors.PrimaryPurple500}
              style={{borderRadius: 50}}
              onPress={() => onSignInClick()}
              disabled={false}
              font={Fonts.NexaBold}
            />
          </View>
          <View style={styles.bottomBoxSignUpPanel}>
            <View>
              <Text style={styles.bottomBoxSignUpPanelText1}>
                Don't have an account?
              </Text>
            </View>
            <View style={{padding: 5}}>
              <Button
                title="Sign Up"
                color={Colors.WhiteButton}
                backColor="transparent"
                style={{
                  borderColor: Colors.WhiteBorder,
                  borderWidth: 1,
                  borderRadius: 50,
                }}
                onPress={() => onSignUpClick()}
                disabled={false}
                font={Fonts.NexaBold}
              />
            </View>
            <View>
              <Text style={styles.bottomBoxSignUpPanelText2}>Skip</Text>
            </View>
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
  topBox: {
    flex: 1,
    flexDirection: 'column',
  },
  whiteLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  signInText: {
    paddingTop: 5,
    color: Colors.White,
    fontSize: 20,
    fontFamily: Fonts.NexaBlack,
  },
  rememberBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberBoxLeft: {
    flexDirection: 'row',
  },
  rememberBoxLeftText: {
    marginLeft: 10,
    color: Colors.Black400,
    fontFamily: Fonts.NexaBook,
    fontSize: 11,
    textAlignVertical: 'center',
  },
  rememberBoxRight: {},
  rememberBoxRightText: {
    color: Colors.Black400,
    fontFamily: Fonts.NexaBook,
    fontSize: 11,
  },
  bottomBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomBoxSignUpPanel: {},
  bottomBoxSignUpPanelText1: {
    color: Colors.White100,
    fontSize: 8,
    fontFamily: Fonts.NexaBook,
    textAlign: 'center',
  },
  bottomBoxSignUpPanelText2: {
    paddingTop: 10,
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
