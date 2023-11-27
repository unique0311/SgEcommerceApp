/* eslint-disable no-undef */
import React from 'react';
import {View, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, Image, Text} from 'react-native';
const {width} = Dimensions.get('window');
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';

export default Dropdown = ({ defaultText, data, itemSelected, topLabel }) => {
  return (
    <SafeAreaView >
      <Text style={styles.topLabelStyle}>{topLabel}</Text>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}>
          <SelectDropdown
            data={data}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              itemSelected(selectedItem, index);
            }}
            defaultButtonText={defaultText}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              // return <Image source={isOpened ? Images.minus_icon : Images.plus_icon} />;
              return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={Colors.Black500} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            search
            searchInputStyle={styles.dropdown1searchInputStyleStyle}
            searchPlaceHolder={'Search here'}
            searchPlaceHolderColor={'darkgrey'}
            renderSearchInputLeftIcon={() => {
              return <Icon name='search' color={Colors.Black500} />;
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropdown1BtnStyle: {
    width: '100%',
    height: 42,
    backgroundColor: '#f4f3f3',
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {
    color: '#444', 
    textAlign: 'left', 
    fontSize: 13, 
    fontFamily: Fonts.NexaBook,
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF', 
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: '#444', 
    textAlign: 'left', 
    fontSize: 13, 
    fontFamily: Fonts.NexaBook,
  },
  dropdown1SelectedRowStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    fontSize: 13,
    fontFamily: Fonts.NexaBook,
  },
  topLabelStyle: {
    position: 'absolute',
    top: 2,
    left: 15,
    fontSize: 9,
    zIndex: 1,
    color: Colors.Black400,
    fontFamily: Fonts.NexaBook
  }
});