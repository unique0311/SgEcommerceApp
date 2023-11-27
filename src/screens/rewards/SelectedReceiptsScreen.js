import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BackButton from '../../components/BackButton';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import SelectedReceiptItem from '../../components/Rewards/SelectedReceiptItem';

const SelectedReceiptsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackButton type="dark" onPress={() => {navigation.goBack()}} />
            <Text style={styles.title}>Selected Receipts</Text>
            <View style={{ marginTop: 10 }}>
                <SelectedReceiptItem />
                <SelectedReceiptItem />
                <SelectedReceiptItem />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: Colors.White
    },
    title: {
        fontSize: 20,
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBlack,
        marginTop: 5
    }
})

export default SelectedReceiptsScreen;