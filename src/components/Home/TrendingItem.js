import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Images from '../../theme/Images';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const TrendingItem = ({ imageName, text }) => {
    var imageSrc = null;
    switch(imageName) {
        case 'trending': imageSrc = Images.treding; break;
        default: break;
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={imageSrc} />
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        position: 'relative',
    },
    imageStyle: {
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        zIndex: 100,
        position: 'absolute',
        top: 25,
        left: 10,
        fontFamily: Fonts.NexaBold,
        fontSize: 13,
        color: Colors.White,
        lineHeight: 18,
    },
})

export default TrendingItem;