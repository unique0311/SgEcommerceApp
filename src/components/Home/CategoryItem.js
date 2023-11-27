import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import Images from '../../theme/Images';

const CategoryItem = ({ imageName, comment, onPress }) => {
    if(comment.length > 10) {
        comment = comment.slice(0, 10).concat('...');
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.imageStyle} source={{uri: imageName}} />
            <Text style={styles.comment}>{comment}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageStyle: {
        width: 90,
        height: 90,
        borderColor: Colors.Black200,
        borderRadius: 10,
        borderWidth: 1,
    },
    comment: {
        paddingTop: 5,
        color: Colors.Black400,
        fontSize: 12,
        fontFamily: Fonts.NexaBold,
    },
})

export default CategoryItem;