import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Images from '../theme/Images';

const BackgroundImage = ({ name }) => {
    var backgroundImage = "";
    switch(name) {
        case 'main_bg':
            backgroundImage = Images.main_bg;
            break;
        case 'main_bg2':
            backgroundImage = Images.main_bg2;
            break;
        case 'main_bg3':
            backgroundImage = Images.main_bg3;
            break;
        default:
            break;
    }
    return (
        <Image style={styles.backgroundImage} source={backgroundImage} />
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
})

export default BackgroundImage;