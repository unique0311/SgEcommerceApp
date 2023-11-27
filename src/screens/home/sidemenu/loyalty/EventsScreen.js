import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BackButton from '../../../../components/BackButton';
import Fonts from '../../../../theme/Fonts';
import Colors from '../../../../theme/Colors';
import EventItem from '../../../../components/SideMenu/Loyalty/EventItem';

const EventsScreen = ({ navigation }) => {
    const onBackClick = () => {
        console.log('Back button clicked');
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <View style={{ backgroundColor: Colors.White, flex: 1 }}>
                    <View style={styles.topBoxTitlePanel}>
                        <BackButton type="dark" onPress={() => onBackClick()} />
                        <Text style={styles.termsText}>Events</Text>
                    </View>
                    <View style={styles.termsContentBox}>
                        <EventItem />
                        <EventItem />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    topBox: {
        flex: 1,
        flexDirection: 'column',
    },
    topBoxTitlePanel: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flex: 1,
    },
    termsText: {
        paddingTop: 10,
        color: Colors.PrimaryPurple500,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
    },
    termsContentBox: {
        backgroundColor: Colors.White,
        paddingHorizontal: 20,
        flex: 8,
    },
})

export default EventsScreen;