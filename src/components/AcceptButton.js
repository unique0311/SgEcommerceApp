import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import CheckBox from './CheckBox';
import Colors from '../theme/Colors';

const AcceptButton = ({ title, value, color, backColor, style, onPress, icon, font }) => {
    return (
        <TouchableOpacity style={[
                style ? style : '', 
                styles.buttonContainer, 
                backColor ? {backgroundColor: backColor} : '',
                value ? {backgroundColor: '#f4f3f3'} : {backgroundColor: '#2b266d'},
                icon ? {position: 'relative'} : ''
            ]} onPress={() => onPress(!value)}
            >
            <CheckBox value={value} onChange = {() => onPress(!value)} />
            <Text style={[
                styles.textLabel, 
                color ? {color: color} : '',
                value ? {color: '#2b266d'} : {color: '#f4f3f3'},
                font ? {fontFamily: font} : null,
            ]}
            >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
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
		fontSize: 13,
		color: Colors.White,
        padding: 7,
	},
});

export default AcceptButton;