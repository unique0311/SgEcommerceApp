import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import Images from '../../theme/Images';

const ShoppingListDetailItem = ({ active, title, amount }) => {
    return (
        <View style={styles.container}>
            {active ? (
                <>
                <View style={styles.leftBox}>
                    <View><Image style={styles.imgStyle} source={Images.approve_icon} /></View>
                    <Text style={[styles.title1, { marginLeft: 10 }]}>{title}</Text>
                </View>
                <Text style={styles.title2}>{amount}</Text>
                </>
            ) : (
                <>
                <View style={styles.leftBox}>
                    <View><Image style={styles.imgStyleNone} source={Images.none_approve_icon} /></View>
                    <Text style={[styles.activeText1, { marginLeft: 10 }]}>{title}</Text>
                </View>
                <Text style={styles.activeText2}>{amount}</Text>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomColor: Colors.Black200,
        borderBottomWidth: 1
    },
    leftBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imgStyle: {
        width: 28,
        height: 28
    },
    imgStyleNone: {
        width: 28,
        height: 28
    },
    title1: {
        textDecorationLine: 'line-through',
        color: Colors.Black300,
        fontSize: 12,
        fontFamily: Fonts.NexaBook
    },
    title2: {
        textDecorationLine: 'line-through',
        color: Colors.Black300,
        fontSize: 12,
        fontFamily: Fonts.NexaBold
    },
    activeText1: {
        color: Colors.Black400,
        fontSize: 12,
        fontFamily: Fonts.NexaBold
    },
    activeText2: {
        color: Colors.PrimaryPurple500,
        fontSize: 12,
        fontFamily: Fonts.NexaBold
    }
})

export default ShoppingListDetailItem;