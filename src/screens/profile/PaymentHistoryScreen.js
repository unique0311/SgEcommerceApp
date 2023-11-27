import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BackButton from '../../components/BackButton';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import PaymentItem from '../../components/Profile/PaymentItem';
import PaymentFilterModal from '../../components/Modal/PaymentFilterModal';

const PaymentHistoryScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <View style={styles.container}>
            <BackButton 
                type="dark" 
                rightIcon1="filter_dark" 
                onPress={() => {navigation.goBack()}} 
                onPressIcon1={() => {setShowModal(true)}} 
            />
            <Text style={styles.title}>Payment History</Text>
            <View style={{ marginTop: 30 }}>
                <PaymentItem />
                <PaymentItem />
                <PaymentItem />
                <PaymentItem />
            </View>
        </View>
        <PaymentFilterModal 
            state={showModal} 
            toggleModal={(value) => {setShowModal(value)}} 
            onDeactive={() => {}}
        />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        flexDirection: 'column',
        padding: 20
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500
    }
})

export default PaymentHistoryScreen;