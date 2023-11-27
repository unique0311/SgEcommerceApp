import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';

const TextView = ({ placeholder, onPressIn, value, onChangeText, type="text" }) => {
    return (
        <>
            {
                (type === "text")
                ? <TextInput
                    value={value}
                    onPressIn={onPressIn} 
                    style={styles.inputStyle}
                    placeholder={placeholder} 
                    onChangeText={onChangeText}
                /> 
                : null
            }
            {
                (type === "password")
                ? <TextInput
                    secureTextEntry={true}
                    value={value}
                    onPressIn={onPressIn} 
                    style={styles.inputStyle}
                    placeholder={placeholder} 
                    onChangeText={onChangeText}
                /> 
                : null
            }
            {
                (type === "number")
                ? <TextInput
                    keyboardType={'numeric'}
                    value={value}
                    onPressIn={onPressIn} 
                    style={styles.inputStyle}
                    placeholder={placeholder} 
                    onChangeText={onChangeText}
                /> 
                : null
            }
            {
                (type === "email")
                ? <TextInput
                    keyboardType={'email-address'}
                    value={value}
                    onPressIn={onPressIn} 
                    style={styles.inputStyle}
                    placeholder={placeholder} 
                    onChangeText={onChangeText}
                /> 
                : null
            }
        </>
        // <TextInput
        //     value={value}
        //     onPressIn={onPressIn} 
        //     style={styles.inputStyle}
        //     placeholder={placeholder} 
        //     onChangeText={onChangeText}
        // />
    )
}

const styles = StyleSheet.create({
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
        paddingTop: 10,
        paddingBottom: 10,
        textAlignVertical: "center",
    },
})

export default TextView;