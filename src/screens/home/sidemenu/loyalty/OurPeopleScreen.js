import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../../theme/Colors';
import Fonts from '../../../../theme/Fonts';
import PeopleItem from '../../../../components/SideMenu/Loyalty/PeopleItem';
import BackButton from '../../../../components/BackButton';
import TopTabBar from '../../../../components/Home/TopTabBar';

const peopleItems = [
    {
        imageName: 'user1',
        title: 'loyalty',
        comment: 'Alphamega1',
        phone: '+357 123 456'
    },
    {
        imageName: 'user1',
        title: 'loyalty',
        comment: 'Alphamega1',
        phone: '+357 123 456'
    },
    {
        imageName: 'user1',
        title: 'loyalty',
        comment: 'Alphamega1',
        phone: '+357 123 456'
    },
]

const categories = [
    "Managers(4)",
    "Sales(2)",
    "Another type(30)"
]

const OurPeopleScreen = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(categories[0]);
    return (
        <View style={styles.container}>
            <BackButton type="dark" onPress={() => {navigation.goBack()}} />
            <Text style={styles.title}>Our People</Text>
            <View style={{ marginTop: 10 }}><TopTabBar theme="type2" categories={categories} currentPage={currentPage} onSelectPage={(selectedPage) => {setCurrentPage(selectedPage)}} /></View>
            {currentPage === 'Managers(4)' && <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 15 }}>
                {peopleItems.map((item, index) => (
                    <View key={index} style={{ width: '100%', marginBottom: 10 }}>
                        <PeopleItem imageName={item.imageName} title={item.title} comment={item.comment} phone={item.phone} />
                    </View>
                ))}
            </View>}
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
        marginTop: 15,
        color: Colors.PrimaryPurple500,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
    },
})

export default OurPeopleScreen;