import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';

const NotificationItem = ({ items, modalState, onPress }) => {
    return (
        <View>
            {items.map((item, index) => (
                <TouchableOpacity key={index} style={styles.container} onPress={() => onPress(item.text, !modalState)}>
                    <Text style={styles.textStyle1}>{item.text}</Text>
                    <Text style={styles.textStyle2}>{item.time}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        borderBottomColor: Colors.Black200, 
        borderBottomWidth: 1,
    },
    textStyle1: {
        paddingTop: 10,
        fontSize: 12,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black400,
    },
    textStyle2: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 11,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black300,
    },
    textBold: {
        fontFamily: Fonts.NexaBold,
    },
})

export default NotificationItem;