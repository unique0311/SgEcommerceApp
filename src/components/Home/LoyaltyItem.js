import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

const LoyaltyItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(item.title)}>
            <Image style={styles.imgStyle} source={{ uri: item.Customer.logo }} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 2,
        borderRadius: 5,
        backgroundColor: Colors.White,
        shadowColor: '#52006A',  
        elevation: 2,   
        // width: 200,
        margin: 5
    },
    imgStyle: {
        width: 54,
        height: 54,
    },
    title: {
        marginLeft: 10,
        marginRight: 20,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBold,
        fontSize: 12,
    },
})

export default LoyaltyItem;