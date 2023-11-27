import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../../theme/Colors';
import BackButton from '../../../../components/BackButton';
import Fonts from '../../../../theme/Fonts';
import Button from '../../../../components/Button';

const DisclaimerScreen = ({ navigation }) => {
    const onAcceptClick = () => {
        console.log('Accept Button Clicked');
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <View>
                    <BackButton rightIcon1="close_dark" onPressIcon1={() => {navigation.goBack()}} />
                    <Text style={styles.title}>Disclaimer</Text>
                    <Text style={styles.subTitle}>You are about to complete a survey by xycompany</Text>
                </View>
                <View>
                    <Button title="Accept" color={Colors.White} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50 }}  onPress={() => onAcceptClick()} disabled={false} font={Fonts.NexaBold} />
                </View>
            </View>
            <View style={styles.bottomBox}>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20,
        flexDirection: 'column',
    },
    topBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBlack,
        fontSize: 20
    },
    subTitle: {
        marginTop: 5,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBook,
        fontSize: 12
    },
    bottomBox: {
        flex: 1,
    },
})

export default DisclaimerScreen;