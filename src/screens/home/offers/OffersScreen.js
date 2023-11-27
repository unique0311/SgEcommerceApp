import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import BackButton from '../../../components/BackButton';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import CategoryItem from '../../../components/Home/CategoryItem';
import OfferItem from '../../../components/Home/OfferItem';

import { getCategories } from '../../../redux/categories/actions';
import { getOffers } from '../../../redux/offers/actions';
import { useDispatch, useSelector } from 'react-redux';

const beveragesItemLists = {
    softDrinks: [
        {
            id: '245',
            imageName: 'softdrinks_img1',
            count: '150mL',
            favouriteState: false,
            comment: 'Pepsi Can',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '895',
            imageName: 'softdrinks_img1',
            count: '150mL',
            favouriteState: false,
            comment: 'Diet Seven Up Can',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '45',
            imageName: 'softdrinks_img1',
            count: '150mL',
            favouriteState: false,
            comment: 'Pepsi Can',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '695',
            imageName: 'softdrinks_img1',
            count: '150mL',
            favouriteState: false,
            comment: 'Diet Seven Up Can',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
    ],
    alcohol: [
        {
            id: '245',
            imageName: 'alcohol_img1',
            count: '375mL',
            favouriteState: false,
            comment: `Jack Daniel's Old${'\n'}No.7 Tennessee W...`,
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '895',
            imageName: 'alcohol_img1',
            count: '750mL',
            favouriteState: false,
            comment: 'Absolut Vodka',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '25',
            imageName: 'alcohol_img1',
            count: '375mL',
            favouriteState: false,
            comment: `Jack Daniel's Old${'\n'}No.7 Tennessee W...`,
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
        {
            id: '95',
            imageName: 'alcohol_img1',
            count: '750mL',
            favouriteState: false,
            comment: 'Absolut Vodka',
            price1: 'save 5.00',
            price2: 'save 5.00'
        },
    ]
}

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

const OffersScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);
    const loginState = useSelector(state => state.auth.isAuthenticated);
    const [softdrinksItems, setSoftdrinksItems] = useState(beveragesItemLists.softDrinks);
    const [alcoholItems, setAlcoholItems] = useState(beveragesItemLists.alcohol);
    const [vegetablesItems, setVegetablesItems] = useState(cannedFoodItemLists.vegetableFruits);
    const onBackClick = () => {
        console.log("Back Icon Clicked");
        navigation.goBack();
    }
    const onSearchClick = () => {
        console.log("Search Icon Clicked");
    }
    const onCategoriesViewAllClick = () => {
        navigation.push('Categories');
    }
    // Soft Drinks
    const onSoftdrinksFavouriteClick = (state, productId, index) => {
        softdrinksItems[index].favouriteState = state;
        setSoftdrinksItems([...softdrinksItems]);
    }
    const onSoftdrinksDetailPress = (product_id) => {
        console.log(product_id);
    }
    // Soft Drinks end

    // Alcohol
    const onAlcoholFavouriteClick = (state, productId, index) => {
        alcoholItems[index].favouriteState = state;
        setAlcoholItems([...alcoholItems]);
    }
    const onAlcoholDetailPress = (product_id) => {
        console.log(product_id);
    }
    // Alcohol end

    // Vegetables
    const onVegetablesFavouriteClick = (state, productId, index) => {
        vegetablesItems[index].favouriteState = state;
        setVegetablesItems([...vegetablesItems]);
    }
    const onVegetablesDetailPress = (product_id) => {
        console.log(product_id);
    }
    // Vegetables end

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <ScrollView style={styles.container}>
            <BackButton type="dark" rightIcon1="search_dark" onPress={() => onBackClick()} onPressIcon1={() => onSearchClick()} />
            <Text style={styles.headerText}>Offers</Text>

            <View style={{ paddingTop: 15, paddingBottom: 15, backgroundColor: Colors.White }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.offerText}>Categories</Text>
                    <TouchableOpacity onPress={() => onCategoriesViewAllClick()}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{ paddingBottom: 10, paddingTop: 10 }}>
                    {categories && categories.map((item, index) => (
                        <View key={index} style={{ marginRight: 10 }}><CategoryItem imageName={item.image} comment={item.name} onPress={() => {navigation.push('MainCategory')}} /></View>
                    ))}
                </ScrollView>
            </View>

            <View>
                <Text style={styles.categoryName}>Beverages</Text>
                {/* Soft Drinks */}
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.offerText}>Soft Drinks</Text>
                        <Text style={styles.viewText}>view all</Text>
                    </View>
                    <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                        {softdrinksItems.map((item, index) => (
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
                                    onPress={(state, productId, index) => onSoftdrinksFavouriteClick(state, productId, index)} 
                                    onOfferDetailPress={(id) => onSoftdrinksDetailPress(id)}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>
                {/* Soft Drinks end */}

                {/* Alcohol */}
                <View style={{ paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.offerText}>Alcohol</Text>
                        <Text style={styles.viewText}>view all</Text>
                    </View>
                    <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                        {alcoholItems.map((item, index) => (
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
                                    onPress={(state, productId, index) => onAlcoholFavouriteClick(state, productId, index)} 
                                    onOfferDetailPress={(id) => onAlcoholDetailPress(id)}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>
                {/* Soft Drinks end */}
            </View>


            <View style={{ paddingTop: 15, paddingBottom: 30 }}>
                <Text style={styles.categoryName}>Canned Food</Text>
                {/* vegetables & fruits */}
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.offerText}>Vegetables &amp; Fruits</Text>
                        <Text style={styles.viewText}>view all</Text>
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

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.White,
        padding: 20,
    },
    headerText: {
        paddingTop: 7,
        fontFamily: Fonts.NexaBlack,
        fontSize: 22,
        color: Colors.PrimaryPurple500,
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
    offerItemBox: {
        marginRight: 8,
        marginLeft: 2,
        paddingTop: 10,
        paddingBottom: 10,
    },
})

export default OffersScreen;