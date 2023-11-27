import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BackButton from '../../../components/BackButton';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';
import Fonts from '../../../theme/Fonts';
import Colors from '../../../theme/Colors';

const SettingsScreen = ({ navigation }) => {
    const [surveyChecked, setSurveyChecked] = useState(false);
    const [marketingChecked, setMarketingChecked] = useState(false);
  const onBackClick = () => {
    navigation.goBack();
  };
  const onSaveClick = () => {
    console.log('save button clicked');
  }
  const onCheckBoxSurveyClick = (selected) => {
    setSurveyChecked(selected);
  }
  const onCheckBoxMarketingClick = (selected) => {
    setMarketingChecked(selected);
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <BackButton type="dark" onPress={() => onBackClick()} />
        <Text style={styles.title}>Settings</Text>
        <View style={styles.checkBox}>
            <View><CheckBox value={surveyChecked} onChange={(selected) => onCheckBoxSurveyClick(selected)} /></View>
            <Text style={styles.checkBoxText}>Receive Survey Notifications</Text>
        </View>
        <View style={styles.checkBox}>
            <View><CheckBox value={marketingChecked} onChange={(selected) => onCheckBoxMarketingClick(selected)} /></View>
            <Text style={styles.checkBoxText}>Receive Marketing Notifications</Text>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <View>
          <Button
            title="Save"
            color={Colors.WhiteButton}
            backColor={Colors.PrimaryPurple500}
            style={{borderRadius: 50}}
            onPress={() => onSaveClick()}
            disabled={false} 
            font={Fonts.NexaBold}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: Colors.White,
  },
  topBox: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: Colors.PrimaryPurple500,
    fontFamily: Fonts.NexaBlack,
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 5,
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
    color: Colors.Black500,
  },
  bottomBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default SettingsScreen;
