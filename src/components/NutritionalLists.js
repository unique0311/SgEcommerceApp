import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

const NutritionalLists = ({ lists }) => {
    return (
        <View style={styles.container}>
            {lists.map((item, index) => {
                if(index !== lists.length-1) {
                    return (
                        <View style={[styles.box, { borderBottomColor: Colors.Black200, borderBottomWidth: 1 }]} key={index}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={styles.title1}>{item.name}</Text>
                                <Text style={styles.title2}>{item.value1}</Text>
                            </View>
                            <Text style={styles.title1}>{item.value2}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={[styles.box]} key={index}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={styles.title1}>{item.name}</Text>
                                <Text style={styles.title2}>{item.amount}</Text>
                            </View>
                            <Text style={styles.title1}>{item.percent}</Text>
                        </View>
                    )
                }
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderColor: Colors.Black200,
        borderWidth: 1,
        borderRadius: 5,
    },
    box: {
        paddingVertical: 7,
        paddingHorizontal: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title1: {
        color: Colors.Black, 
        fontSize: 12, 
        fontFamily: Fonts.NexaBold
    },
    title2: {
        marginLeft: 10,
        color: Colors.Black, 
        fontSize: 12, 
        fontFamily: Fonts.NexaBook
    }
})

export default NutritionalLists;