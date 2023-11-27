import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Images from '../../../theme/Images';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';

const width = Dimensions.get('window').width;

const EventItem = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.leftImg} source={Images.events1_img} />
            <View style={styles.boxRight}>
                <View>
                    <Text style={styles.eventTitle}>Event Name goes here</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image style={styles.iconImg} source={Images.date_icon} />
                        <Text style={styles.iconText}>Date and time goes here</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image style={styles.iconImg} source={Images.location_icon} />
                        <Text style={styles.iconText}>Location goes here</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.requestText}>Request to attend</Text>
                    <Icon style={styles.rightIcon} name='chevron-right' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 15,
        borderBottomColor: Colors.Black200,
        borderBottomWidth: 1,
    },
    leftImg: {
        width: 80,
        height: 120,
    },
    boxRight: {
        width: width - 80 - 40 - 20,
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    eventTitle: {
        color: Colors.Black500,
        fontFamily: Fonts.NexaHeavy,
        fontSize: 14,
    },
    iconImg: {
        marginLeft: -5,
        width: 30,
        height: 30,
    },
    iconText: {
        color: Colors.Black300,
        fontFamily: Fonts.NexaBook,
        fontSize: 12,
    },
    requestText: {
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBold,
        fontSize: 12,
    },
    rightIcon: {
        color: Colors.Black,
        fontSize: 20,
    },
})

export default EventItem;