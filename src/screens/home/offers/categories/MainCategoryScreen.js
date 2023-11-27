import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../../../theme/Colors';
import OfferItem from '../../../../components/Home/OfferItem';
import BackButton from '../../../../components/BackButton';
import TopTabBar from '../../../../components/Home/TopTabBar';
import Fonts from '../../../../theme/Fonts';

const categories = [
    "Beverages",
    "Canned Food",
    "Candies",
]

const cannedFoodItemLists = {
    vegetableFruits: [
        {
            id: '245',
            imageName: 'vegetableFruits_img1',
            count: '500g',
            favouriteState: false,
            comment: 'Extra Sweet Niblets sweet corn',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '895',
            imageName: 'vegetableFruits_img1',
            count: '250g',
            favouriteState: false,
            comment: 'Nutella Hazeinput spread',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '65',
            imageName: 'vegetableFruits_img1',
            count: '500g',
            favouriteState: false,
            comment: 'Extra Sweet Niblets sweet corn',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '874',
            imageName: 'vegetableFruits_img1',
            count: '250g',
            favouriteState: false,
            comment: 'Nutella Hazeinput spread',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
    ],
}

const MainCategoryScreen = ({ navigation }) => {
    const [loginState, setLoginState] = useState(true);
    const [vegetablesItems, setVegetablesItems] = useState(cannedFoodItemLists.vegetableFruits);
    const [currentPage, setCurrentPage] = useState("Canned Food");
    const onBackClick = () => {
        navigation.goBack();
    }
    const onSearchClick = () => {
        console.log("Seach Icon Clicked");
    }
    // Vegetables
    const onVegetablesFavouriteClick = (state, productId, index) => {
        vegetablesItems[index].favouriteState = state;
        setVegetablesItems([...vegetablesItems]);
    }
    const onVegetablesDetailPress = (product_id) => {
        console.log(product_id);
    }
    // Vegetables end
    return (
        <ScrollView style={styles.container}>
            <View style={{ borderBottomColor: Colors.Black200, borderBottomWidth: 1, paddingHorizontal: 20, paddingTop: 20 }}>
                <BackButton type="dark" rightIcon1="search_dark" onPress={() => onBackClick()} onPressIcon1={() => onSearchClick()} />
                <Text style={styles.title}>Offers</Text>
                <TopTabBar theme="type1" categories={categories} mainText="Categories" currentPage={currentPage} onSelectPage={(selectedPage) => {setCurrentPage(selectedPage)}} />
            </View>

            {
                currentPage === 'Beverages' && 
                <View style={{ paddingTop: 15, paddingBottom: 30, paddingHorizontal: 20 }}>
                    <Text style={styles.categoryName}>Beverages</Text>
                    {/* vegetables & fruits */}
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.offerText}>Soft Drinks</Text>
                            <TouchableOpacity onPress={() => {navigation.push('SubCategory')}}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
                        </View>
                    </View>
                    {/* vegetables fruits end */}
                </View>
            }

            {
                currentPage === 'Canned Food' && 
                <View style={{ paddingTop: 15, paddingBottom: 30, paddingHorizontal: 20 }}>
                    <Text style={styles.categoryName}>Canned Food</Text>
                    {/* vegetables & fruits */}
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.offerText}>Vegetables &amp; Fruits</Text>
                            <TouchableOpacity onPress={() => {navigation.push('SubCategory')}}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                            {vegetablesItems.map((item, index) => (
                                <View style={styles.offerItemBox} key={index}>
                                    <OfferItem 
                                        index={index}
                                        loginState={loginState} 
                                        id={item.id} 
                                        imageName={item.imageName}
                                        count={item.count}
                                        favouriteState={item.favouriteState}
                                        comment={item.comment}
                                        price1={item.price1}
                                        price2={item.price2}
                                        onPress={(state, productId, index) => onVegetablesFavouriteClick(state, productId, index)} 
                                        onOfferDetailPress={(id) => onVegetablesDetailPress(id)}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    {/* vegetables fruits end */}
                </View>
            }
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontFamily: Fonts.NexaBlack,
        fontSize: 22,
        color: Colors.PrimaryPurple500,
        paddingTop: 5,
    },
    offerItemBox: {
        marginRight: 8,
        marginLeft: 2,
        paddingTop: 10,
        paddingBottom: 10,
    },
    offerText: {
        // paddingBottom: 15,
        color: Colors.Black500,
        fontFamily: Fonts.NexaHeavy,
        fontSize: 13,
    },
    viewText: {
        color: Colors.Black400,
        fontFamily: Fonts.NexaBold,
        fontSize: 10,
    },
    categoryName: {
        paddingBottom: 15,
        color: '#6c65ca',
        fontFamily: Fonts.NexaHeavy,
        fontSize: 13,
    },
})

export default MainCategoryScreen;