import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

const FlayerItem = ({ item }) => {
    var imageSrc = Images.loyalty_img;
    return (
        <View style={styles.container}>
            <Image style={styles.imgStyle} source={imageSrc} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.comment}>{'Valid until 15 Aug, 2021'}</Text>
            </View>
        </View>
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
    comment: {
        marginLeft: 10,
        marginRight: 20,
        color: Colors.Black300,
        fontFamily: Fonts.NexaBook,
        fontSize: 12,
    },
})

export default FlayerItem;