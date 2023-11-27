import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Images from '../theme/Images';

const Button = ({ title, color, backColor, style, onPress, icon, disabled, font }) => {
    if(icon) {
        var iconImage = '';
        switch(icon) {
            case 'facebook':
                iconImage = Images.facebook_icon;
                break;
            case 'google':
                iconImage = Images.google_icon;
                break;
            case 'apple':
                iconImage = Images.apple_icon;
                break;
            default:
                break;
        }
    }
    return (
        <TouchableOpacity disabled={ disabled } style={[
                style ? style : '', 
                styles.buttonContainer, 
                backColor ? {backgroundColor: backColor} : '',
                disabled ? { backgroundColor: '#bfbdd3' } : null,
                icon ? {position: 'relative'} : ''
            ]} onPress={onPress}
            >
            {icon ? (
                <Image style={styles.buttonIcon} source={iconImage} />
            ) : <></>}
            <Text style={[
                style ? style : '', 
                styles.textLabel, 
                color ? {color: color} : '',
                disabled ? { color: '#928eb4' } : null,
                font ? { fontFamily: font } : null
            ]}
            >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'center',
	},
    buttonIcon: {
        position: 'absolute',
        left: 10,
        top: 5,
        width: 22,
        height: 22,
    },
	textLabel: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		fontSize: 12,
		color: 'white',
        padding: 7,
        borderWidth: 0
	},
});

export default Button;