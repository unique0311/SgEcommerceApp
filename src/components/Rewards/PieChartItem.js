import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const PieChartItem = ({ title, price, color, borderTop, currency }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={[styles.leftBox, {backgroundColor: color}]}></View>
            <View style={[{ paddingHorizontal: 20 }, borderTop ? styles.borderTop : '']}>
                <View style={styles.panel}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={styles.price}>{price}&nbsp;
                            {currency == 'euro' ? (
                                <Icon name='currency-eur' />
                            ) : (
                                'pts'
                            )}
                        </Text>
                        <EntypoIcon style={styles.rightIcon} name='chevron-right' />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 50,
    },
    leftBox: {
        position: 'absolute',
        width: 10,
        height: 50,
        left: 0
    },
    price: {
        fontFamily: Fonts.NexaBold,
        fontSize: 14,
        color: Colors.Black,
    },
    borderTop: {
        borderTopColor: Colors.Black200,
        borderTopWidth: 1,
    },
    panel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderBottomColor: Colors.Black200,
        borderBottomWidth: 1
    },
    title: {
        fontFamily: Fonts.NexaBold,
        fontSize: 11,
        color: Colors.Black400
    },
    rightIcon: {
        fontSize: 16,
        color: Colors.Black,
        marginLeft: 15
    }
})

export default PieChartItem;