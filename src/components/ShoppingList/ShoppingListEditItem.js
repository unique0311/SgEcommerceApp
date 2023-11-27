import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import EntypoIcon from "react-native-vector-icons/Entypo";

const ShoppingListEditItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <View><Icon style={styles.menuIconStyle} name='menu' /></View>
                <View><Text style={styles.title}>Laundry Detergent</Text></View>
            </View>

            <View style={styles.rightBox}>
                <TouchableOpacity>
                    <Text style={styles.rightBoxMinus}><EntypoIcon name={'minus'} size={12} /></Text>
                </TouchableOpacity>
                <TextInput
                    // value={value}
                    style={styles.inputStyle}
                /> 
                <TouchableOpacity>
                    <Text style={styles.rightBoxPlus}><EntypoIcon name={'plus'} size={12} /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Colors.Black200,
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    leftBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rightBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rightBoxMinus: {
        backgroundColor: Colors.Black100,
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBold,
        width: 25,
        height: 25,
        flexDirection: 'column',
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,
        marginRight: 5
    },
    inputStyle: {
        fontSize: 12,
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBold,
        backgroundColor: Colors.White,
        borderColor: Colors.PrimaryPurple500,
        borderWidth: 1,
        width: '100%',
        borderRadius: 7,
        height: 25,
        width: 40,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        textAlignVertical: "center",
    },
    rightBoxPlus: {
        backgroundColor: Colors.Black100,
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBold,
        width: 25,
        height: 25,
        flexDirection: 'column',
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,
        marginLeft: 5
    },
    menuIconStyle: {
        fontSize: 20,
    },
    title: {
        marginLeft: 5,
        color: Colors.Black400,
        fontSize: 13,
        fontFamily: Fonts.NexaBold,
    }
})

export default ShoppingListEditItem;