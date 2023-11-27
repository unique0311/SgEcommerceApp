import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../theme/Colors';
import BackButton from '../../components/BackButton';
import Fonts from '../../theme/Fonts';
import Images from '../../theme/Images';
import RewardsTopBar from '../../components/Rewards/RewardsTopBar';
import PieChart from 'react-native-pie-chart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PieChartItem from '../../components/Rewards/PieChartItem';
import PaymentFilterModal from '../../components/Modal/PaymentFilterModal';
import CheckBox from '../../components/CheckBox';

const categories = [
    "Loyalty",
    "Category"
]

const loyaltyLists = [
    {
        title: 'Loyalty Name',
        price: '80',
        color: '#F44336',
        borderTop: true,
    },
    {
        title: 'Loyalty Name',
        price: '90',
        color: '#2196F3',
        borderTop: false,
    },
    {
        title: 'Loyalty Name',
        price: '100',
        color: '#FFEB3B',
        borderTop: false,
    },
    {
        title: 'Loyalty Name',
        price: '70',
        color: '#4CAF50',
        borderTop: false,
    },
    {
        title: 'Loyalty Name',
        price: '80',
        color: '#FF9800',
        borderTop: false,
    }
]

const cagetoryLists = [
    {
        title: 'Beverages',
        price: '80',
        color: '#F44336',
        borderTop: true,
    },
    {
        title: 'Canned Food',
        price: '90',
        color: '#2196F3',
        borderTop: false,
    },
    {
        title: 'Candies',
        price: '80',
        color: '#FFEB3B',
        borderTop: false,
    },
    {
        title: 'Dairy',
        price: '100',
        color: '#4CAF50',
        borderTop: false,
    },
    {
        title: 'Crackers',
        price: '80',
        color: '#FF9800',
        borderTop: false,
    }
]

const LoyaltyScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [formCheck, setFormCheck] = useState({
        pointCheck: false,
        amountCheck: false
    })
    const [currentPage, setCurrentPage] = useState(categories[0]);

    const widthAndHeight = 127;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800'];

    return (
        <>
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <BackButton type="dark" onPress={() => { navigation.goBack() }} />
                <View style={styles.titleBox}>
                    <View><Text style={styles.title}>Loyalty</Text></View>
                    <TouchableOpacity onPress={() => {setShowModal(true)}}><Image style={styles.filterDarkIconStyle} source={Images.filter_dark_icon} /></TouchableOpacity>
                </View>
            </View>
            <View>
                <RewardsTopBar 
                    categories={categories} 
                    currentPage={currentPage} 
                    onChange={(page) => {setCurrentPage(page)}} 
                />
                {currentPage == 'Loyalty' && 
                    <>
                        <View style={styles.checkPanel}>                        
                            <View style={styles.checkItem}>
                                <CheckBox value={formCheck.pointCheck} onChange = {() => { setFormCheck({ ...formCheck, pointCheck: !formCheck.pointCheck }) }} /> 
                                <Text style={styles.checkLabel}>Sort by Points</Text>
                            </View>
                            <View style={styles.checkItem}>
                                <CheckBox value={formCheck.amountCheck} onChange = {() => { setFormCheck({ ...formCheck, amountCheck: !formCheck.amountCheck }) }} /> 
                                <Text style={styles.checkLabel}>Sort by Amounts</Text>
                            </View>
                        </View>

                        <ScrollView>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'relative', marginVertical: 20 }}>
                                <Text style={styles.totalPrice}>15.60 pts</Text>
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={series}
                                    sliceColor={sliceColor}
                                    doughnut={true}
                                    coverRadius={0.7}
                                    coverFill={'#FFF'}
                                />
                            </View>
                        </ScrollView>
                        <View>
                            {loyaltyLists.map((item, index) => (
                                <PieChartItem 
                                    key={index} 
                                    title={item.title} 
                                    price={item.price} 
                                    color={item.color} 
                                    borderTop={item.borderTop} 
                                    currency={'pts'}
                                />
                            ))}
                        </View>
                    </>
                }
                {currentPage == 'Category' && 
                    <>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'relative', marginVertical: 20 }}>
                                <Text style={styles.totalPrice}>15.60 pts</Text>
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={series}
                                    sliceColor={sliceColor}
                                    doughnut={true}
                                    coverRadius={0.7}
                                    coverFill={'#FFF'}
                                />
                            </View>
                        </ScrollView>
                        <View>
                            {cagetoryLists.map((item, index) => (
                                <PieChartItem 
                                    key={index} 
                                    title={item.title} 
                                    price={item.price} 
                                    color={item.color} 
                                    borderTop={item.borderTop}
                                    currency={'pts'}
                                />
                            ))}
                        </View>
                    </>
                }
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
    },
    titleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontFamily: Fonts.NexaBlack,
        fontSize: 20,
        color: Colors.PrimaryPurple500
    },
    filterDarkIconStyle: {
        width: 28,
        height: 28
    },
    totalPrice: {
        position: 'absolute',
        zIndex: 100,
        top: 55,
        fontFamily: Fonts.NexaBold,
        fontSize: 14,
        color: Colors.Black,
    },
    checkPanel: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    checkItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkLabel: {
        marginLeft: 10,
        fontSize: 11,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black400
    }
})

export default LoyaltyScreen;