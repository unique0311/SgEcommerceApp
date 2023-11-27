import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedbackComponent, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const SelectedReceiptItem = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.leftBox}>
                <Text style={styles.title}>Retailer Name</Text>
                <Text style={styles.price}>2.50 <Icon name='currency-eur' /></Text>
            </View>
            <View style={styles.rightBox}>
                <Text style={styles.date}>01 June 2021</Text>
                <EntypoIcon style={styles.rightIcon} name='chevron-right' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Colors.Black200,
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    leftBox: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 11,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black400
    },
    price: {
        fontSize: 13,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black400
    },
    rightBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    date: {
        fontSize: 12,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black300
    },
    rightIcon: {
        marginLeft: 20,
        fontSize: 17
    }
})

export default SelectedReceiptItem;