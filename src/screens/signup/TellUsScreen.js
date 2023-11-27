import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Dot from '../../components/Dot';
import Dropdown from '../../components/Dropdown';
import TextView from '../../components/TextView';
import {genders} from '../../constants';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

const TellUsScreen = ({navigation}) => {
  const [dateState, setDateState] = useState(false);
  const [dateText, setDateText] = useState('');
  const [familyCode, setFamilyCode] = useState('');
  const onBackClick = () => {
    navigation.goBack();
  };

  //datePicker
  const onDateInputPress = () => {
    console.log('date time input clicked');
    setDateState(true);
  };
  const onChangeOpened = openedState => {
    setDateState(openedState);
  };
  const onSetDateText = value => {
    console.log('on set Date Text:  ' + value);
    setDateText(value);
  };
  //datePicker end

  //dropdown
  const itemClick = (selectedItem, index) => {
    console.log('props back:  ', selectedItem, index);
  };
  //dropdown end

  //family code
  const onChangeText = text => {
    console.log(text);
    setFamilyCode(text);
  };

  //next button
  const onNextClick = () => {
    //navigate to the Preference screen
    navigation.push('Preference');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <BackButton type="dark" onPress={() => onBackClick()} />
        <Text style={styles.tellUsText}>Tell us more</Text>
        <View>
          <Text style={styles.title}>When is your birthday?</Text>
          <TextView
            value={dateText}
            placeholder="Date of Birth"
            onPressIn={() => { setDateState(false) }}
          />
          <View>
            <DatePicker
              opened={dateState}
              onConfirm={text => { setDateText(text); setDateState(false); }}
              onClose={() => { setDateState(false); }}
            />
          </View>
        </View>
        <View style={{paddingTop: 15}}>
          <Text style={styles.title}>How do you identify?</Text>
          <Dropdown
            defaultText="Gender"
            data={genders}
            itemSelected={(selectedItem, index) =>
              itemClick(selectedItem, index)
            }
          />
        </View>
        <View style={{paddingTop: 15}}>
          <Text style={[styles.title, {paddingBottom: 3}]}>
            Do you have a family code?
          </Text>
          <TextView
            value={familyCode}
            placeholder="Family Code"
            onChangeText={text => onChangeText(text)}
          />
        </View>
      </View>
      <View style={styles.bottomBox}>
        <View>
          <Button
            title="Next"
            color={Colors.WhiteButton}
            backColor={Colors.PrimaryPurple500}
            style={{borderRadius: 50}}
            onPress={() => onNextClick()}
            disabled={false} 
            font={Fonts.NexaBold}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 30,
            paddingTop: 20
          }}>
          <View style={{marginRight: 5}}>
            <Dot active={true} />
          </View>
          <View style={{marginRight: 5}}>
            <Dot active={true} />
          </View>
          <View style={{marginRight: 5}}>
            <Dot active={true} />
          </View>
          <View style={{marginRight: 5}}>
            <Dot active={true} />
          </View>
          <View>
            <Dot active={false} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'space-between',
  },
  topBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  tellUsText: {
    color: Colors.PrimaryPurple500,
    fontFamily: Fonts.NexaBlack,
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 20,
  },
  title: {
    fontSize: 11,
    marginLeft: 20,
    marginBottom: 10,
    fontFamily: Fonts.NexaBold,
    color: Colors.Black400,
  },
  bottomBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default TellUsScreen;
