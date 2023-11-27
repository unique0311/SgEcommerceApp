import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const RewardsTopBar = ({ categories, currentPage, onChange }) => {
    return (
        <View style={styles.container}>
            {categories.map((item, index) => (
            <TouchableOpacity key={index} style={{ flex: 1 }} onPress={() => onChange(item)}>
                    <Text style={[styles.menu, currentPage === item ? styles.active : '']}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu: {
        fontSize: 11,
        color: Colors.Black300,
        fontFamily: Fonts.NexaBook,
        textAlign: 'center',
        borderColor: Colors.Black200,
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 4
    },
    active: {
        color: Colors.White,
        fontFamily: Fonts.NexaBold,
        backgroundColor: Colors.PrimaryPurple500,
        borderColor: Colors.PrimaryPurple500,
        borderWidth: 1
    }
})

export default RewardsTopBar;