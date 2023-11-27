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

const categories = [
    "Retailer",
    "Category"
]

const retailerLists = [
    {
        title: 'Alphamega',
        price: '2.50',
        color: '#F44336',
        borderTop: true,
    },
    {
        title: 'Athientis',
        price: '2.50',
        color: '#2196F3',
        borderTop: false,
    },
    {
        title: 'Retailer Name',
        price: '2.50',
        color: '#FFEB3B',
        borderTop: false,
    },
    {
        title: 'Retailer Name',
        price: '2.50',
        color: '#4CAF50',
        borderTop: false,
    },
    {
        title: 'Retailer Name',
        price: '2.50',
        color: '#FF9800',
        borderTop: false,
    }
]

const cagetoryLists = [
    {
        title: 'Beverages',
        price: '2.50',
        color: '#F44336',
        borderTop: true,
    },
    {
        title: 'Canned Food',
        price: '9.45',
        color: '#2196F3',
        borderTop: false,
    },
    {
        title: 'Candies',
        price: '2.50',
        color: '#FFEB3B',
        borderTop: false,
    },
    {
        title: 'Dairy',
        price: '5.50',
        color: '#4CAF50',
        borderTop: false,
    },
    {
        title: 'Crackers',
        price: '2.50',
        color: '#FF9800',
        borderTop: false,
    }
]

const RewardsSpentScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
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
                    <View><Text style={styles.title}>Spent</Text></View>
                    <TouchableOpacity onPress={() => {setShowModal(true)}}><Image style={styles.filterDarkIconStyle} source={Images.filter_dark_icon} /></TouchableOpacity>
                </View>
            </View>
            <View>
                <RewardsTopBar 
                    categories={categories} 
                    currentPage={currentPage} 
                    onChange={(page) => {setCurrentPage(page)}} 
                />
                {currentPage == 'Retailer' && 
                    <>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'relative', marginVertical: 20 }}>
                                <Text style={styles.totalPrice}>15.60 <Icon name='currency-eur' /></Text>
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
                            {retailerLists.map((item, index) => (
                                <PieChartItem 
                                    key={index} 
                                    title={item.title} 
                                    price={item.price} 
                                    color={item.color} 
                                    borderTop={item.borderTop} 
                                    currency={'euro'}
                                />
                            ))}
                        </View>
                    </>
                }
                {currentPage == 'Category' && 
                    <>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'relative', marginVertical: 20 }}>
                                <Text style={styles.totalPrice}>15.60 <Icon name='currency-eur' /></Text>
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
                                    currency={'euro'}
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
    }
})

export default RewardsSpentScreen;