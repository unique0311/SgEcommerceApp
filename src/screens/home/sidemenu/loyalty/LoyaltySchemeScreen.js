import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import Colors from '../../../../theme/Colors';
import Fonts from '../../../../theme/Fonts';
import BackButton from '../../../../components/BackButton';
import LoyaltyItem from '../../../../components/Home/LoyaltyItem';

const width = Dimensions.get('window').width;

const loyaltyItems = [
    {
        imageName: 'loyalty',
        text: 'Alphamega1'
    },
    {
        imageName: 'loyalty',
        text: 'Alphamega2'
    },
    {
        imageName: 'loyalty',
        text: 'Alphamega3'
    },
    {
        imageName: 'loyalty',
        text: 'Alphamega4'
    },
    {
        imageName: 'loyalty',
        text: 'Alphamega5'
    }
]

const LoyaltySchemeScreen = ({ navigation }) => {
    const onLoyaltyClick = (text) => {
        navigation.push('LoyaltySchemeDetail');
    }
    return (
        <View style={styles.container}>
            <BackButton type="dark" onPress={() => {navigation.goBack()}} />
            <Text style={styles.title}>Loyalty Scheme</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {loyaltyItems.map((item, index) => (
                    <View key={index} style={styles.loyalty}>
                        <LoyaltyItem imageName={item.imageName} text={item.text} onPress={(text) => onLoyaltyClick(text)} />
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        padding: 20,
        flex: 1,
    },
    title: {
        paddingVertical: 10,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500,
    },
    loyalty: {
        padding: 5,
        width: (width - 40) / 2,
    },
})

export default LoyaltySchemeScreen;