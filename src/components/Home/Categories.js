import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const Categories = ({ categories,mainText, activeText }) => {
    return (
        <View>
            <ScrollView horizontal={true} style={{ paddingBottom: 5 }} >
                <TouchableOpacity style={styles.mainBox}>
                    <View style={styles.dotIconBox}>
                        <Icon style={styles.dotIcon1} name='dots-two-vertical' />
                        <Icon style={styles.dotIcon2} name='dots-two-vertical' />
                    </View>
                    <Text style={styles.mainText}>{mainText}</Text>
                </TouchableOpacity>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} style={{ marginTop: 8 }}>
                        <Text style={item === activeText ? (styles.activeCategory) : (styles.unactiveCategory)}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: '#52006A',  
        elevation: 20,
        width: 120,  
        paddingVertical: 5,
        marginRight: 10,
        marginLeft: -5,
        // margin: 10,
    },  
    mainText: {
        fontFamily: Fonts.NexaHeavy,
        fontSize: 13,
        color: Colors.PrimaryPurple500,
        marginLeft: 5,
        marginTop: -4,
    },
    dotIconBox: {
        position: 'relative',
        width: 25,
        height: 25,
    },
    dotIcon1: {
        fontSize: 20,
        color: Colors.PrimaryPurple500,
    },
    dotIcon2: {
        position: 'absolute',
        left: 10,
        top: 0,
        fontSize: 20,
        color: Colors.PrimaryPurple500,
    },
    activeCategory: {
        fontSize: 13,
        fontFamily: Fonts.NexaBold,
        color: Colors.PrimaryPurple500,
        marginRight: 10,
        borderBottomColor: Colors.PrimaryPurple500,
        borderBottomWidth: 1,
    },
    unactiveCategory: {
        fontSize: 13,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black300,
        marginRight: 10,
    },
})

export default Categories;