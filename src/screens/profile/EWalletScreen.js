import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import BackButton from '../../components/BackButton';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../theme/Images';
import Button from '../../components/Button';

const EWalletScreen = ({ navigation }) => {
    const onRequestBtn = () => {
        console.log("Request Btn Clicked");
    }
    return (
        <View style={styles.container}>
            <BackButton type="dark" onPress={() => {navigation.goBack()}} />
            <Text style={styles.title}>E-wallet</Text>
            <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: 10 }}>
                <Text style={styles.topText}>You currently have</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.amount}>15.60</Text>
                    <Icon style={styles.currency} name='currency-eur' />
                </View>
            </View>
            <View style={{ backgroundColor: Colors.Black200, padding: 20, borderRadius: 10 }}>
                <Text style={styles.userText}>Jessica Jones</Text>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginTop: 20 }}>
                    <Text style={styles.walletNum1}>**** ***** ***** 6378</Text>
                    <Text style={styles.walletNum2}>CVC 438</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <Text style={styles.dateStyle}>12/2021</Text>
                    <Image style={{ width: 50, height: 15 }} source={Images.visa_icon} />
                </View>
            </View>
            <View style={{ marginTop: 70 }}>
                <Button 
                    title="Request Card" 
                    color={Colors.WhiteButton} 
                    backColor={Colors.PrimaryPurple500} 
                    style={{ borderRadius: 50 }}  
                    onPress={() => onRequestBtn()} 
                    disabled={false} 
                    font={Fonts.NexaBold} 
                />
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
        justifyContent: 'flex-start',
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500
    },
    topText: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black500
    },
    amount: {
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.Black,
        marginRight: 10
    },
    currency: {
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.Black,
    },
    userText: {
        fontSize: 13,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black
    },
    walletNum1: {
        fontFamily: Fonts.NexaBold,
        fontSize: 13,
        color: Colors.Black
    },
    walletNum2: {
        fontFamily: Fonts.NexaBook,
        fontSize: 12,
        color: Colors.Black 
    },
    dateStyle: {
        fontFamily: Fonts.NexaBook,
        fontSize: 12,
        color: Colors.Black 
    }
})

export default EWalletScreen;