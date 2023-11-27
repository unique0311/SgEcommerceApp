import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const PaymentItem = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.title1}>Payment Reward</Text>
                <Text style={styles.title2}>2.50 <Icon name='currency-eur' /></Text>
            </View>
            <View>
                <Text style={styles.title3}>01 June 2021</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        borderBottomColor: Colors.Black200,
        borderBottomWidth: 1
    },
    title1: {
        fontSize: 10,
        color: Colors.Black,
        fontFamily: Fonts.NexaBook
    },
    title2: {
        fontSize: 12,
        color: Colors.Black,
        fontFamily: Fonts.NexaBold
    },
    title3: {
        fontSize: 11,
        color: Colors.Black300,
        fontFamily: Fonts.NexaBook
    }
})

export default PaymentItem;