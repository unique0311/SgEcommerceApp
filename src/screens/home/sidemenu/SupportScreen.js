import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BackButton from '../../../components/BackButton';
import Fonts from '../../../theme/Fonts';
import Colors from '../../../theme/Colors';

const SupportScreen = ({ navigation }) => {
    const onBackClick = () => {
        console.log('Back button clicked');
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <BackButton type="white" onPress={() => onBackClick()} />
            <Text style={styles.title}>Support Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // backgroundColor: Colors.White,
        padding: 20,
    },
    title: {
        paddingTop: 20,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500,
    },
})

export default SupportScreen;