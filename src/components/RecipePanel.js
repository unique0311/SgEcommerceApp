import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Images from '../theme/Images';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

const RecipePanel = ({ imageName, title, chef }) => {
    var imgSrc = null;
    switch(imgSrc) {
        case 'recipe1': imgSrc = Images.recipe1; break;
        default: imgSrc = Images.recipe1; break;
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imgStyle} source={imgSrc} />
            <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: 10, bottom: 10, marginLeft: -5 }}>
                <Image style={{ width: 25, height: 25 }} source={Images.chef_icon} />
                <Text style={styles.name}>{chef}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        position: 'relative'
    },
    imgStyle: {
        width: 200,
        height: 300,
        borderRadius: 10
    },
    title: {
        position: 'absolute',
        left: 10,
        bottom: 35,
        fontSize: 13,
        color: Colors.White,
        fontFamily: Fonts.NexaBold
    },
    name: {
        fontSize: 11,
        fontFamily: Fonts.NexaBook,
        color: Colors.White,
    },
})

export default RecipePanel;