import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
const ContactItem = ({ text, subText, icon, onPress }) => {
    var iconImage = null;
    switch(icon) {
        case 'phone':
            iconImage = Images.phone_icon;
            break;
        case 'email':
            iconImage = Images.email_icon;
            break;
        case 'web':
            iconImage = Images.web_icon;
            break;
        default:
            break;
    }
    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Text style={styles.phoneText}>{text}</Text>
                <Text style={styles.phoneNumText}>{subText}</Text>
            </View>
            <View style={styles.rightBox}>
                <TouchableOpacity onPress={() => onPress(text)}><Image style={styles.iconStyle} source={iconImage} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#bc7eb7',
        borderBottomWidth: 1,
    },
    leftBox: {
        flexDirection: 'column', 
        justifyContent: 'flex-start',
    },
    phoneText: {
        fontSize: 12,
        color: Colors.White,
        fontFamily: Fonts.NexaBold,
    },
    phoneNumText: {
        fontSize: 12,
        color: Colors.White,
        fontFamily: Fonts.NexaBook,
    },
    rightBox: {
        textAlignVertical: 'center',
    },
    iconStyle: {
        width: 45,
        height: 45,
    },
})

export default ContactItem;