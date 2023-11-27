import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../theme/Colors';
import BackButton from '../../components/BackButton';
import Fonts from '../../theme/Fonts';
import TopTabBar from '../../components/Home/TopTabBar';
import ReceiptAccordion from '../../components/Receipts/ReceiptAccordion';

const categories = [
    "Accepted(4)",
    "In Progress(2)",
    "Rejected(30)"
]

const ReceiptsScreen = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(categories[0]);
    return (
        <View style={styles.container}>
            <BackButton 
                type="dark" 
                rightIcon1="filter_dark" 
                onPress={() => {navigation.goBack()}} 
                onPressIcon1={() => {}}
            />
            <Text style={styles.title}>My Receipts</Text>
            <View style={{ marginTop: 10 }}><TopTabBar theme="type2" categories={categories} currentPage={currentPage} onSelectPage={(selectedPage) => {setCurrentPage(selectedPage)}} /></View>
            {currentPage === 'Accepted(4)' && 
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 15 }}>
                    <ReceiptAccordion title="12 Jan 2021" data="There?" />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500,
    }
})

export default ReceiptsScreen;