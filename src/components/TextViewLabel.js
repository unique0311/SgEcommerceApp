import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';

const TextViewLabel = ({ placeholder, value, onChangeText, topLabel, editable, onPressIn }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{topLabel}</Text>
            <TextInput 
                value={value}
                onPressIn={onPressIn} 
                style={[styles.inputStyle, editable ? {} : {backgroundColor: '#faf9f9'}]}
                placeholder={placeholder} 
                onChangeText={onChangeText} 
                // editable={editable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    textStyle: {
        fontSize: 9,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black400,
        position: 'absolute',
        top: 2,
        left: 15,
        zIndex: 100
    },
    inputStyle: {
        fontSize: 12,
        color: Colors.Black500,
        fontFamily: Fonts.NexaBook,
        backgroundColor: Colors.InputBackground,
        width: '100%',
        borderRadius: 7,
        height: 42,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        textAlignVertical: "center",
        zIndex: -1
    },
})

export default TextViewLabel;