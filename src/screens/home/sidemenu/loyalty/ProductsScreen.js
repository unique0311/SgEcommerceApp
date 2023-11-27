import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import Colors from '../../../../theme/Colors';
import OfferItem from '../../../../components/Home/OfferItem';
import BackButton from '../../../../components/BackButton';
import Fonts from '../../../../theme/Fonts';

const width = Dimensions.get('window').width;

const favouriteItemsList = [
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
    ]

const ProductsScreen = ({ navigation }) => {
    const [loginState, setLoginState] = useState(true);
    const [favouriteItems, setFavouriteItems] = useState(favouriteItemsList);
    const onBackClick = () => {
        navigation.goBack();
    }
    // Vegetables
    const onFavouriteClick = (state, productId, index) => {
        favouriteItems[index].favouriteState = state;
        setFavouriteItems([...favouriteItems]);
    }
    const onDetailPress = (product_id) => {
        console.log(product_id);
    }
    // Vegetables end
    return (
        <ScrollView style={styles.container}>
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <BackButton type="dark" onPress={() => onBackClick()} />
                <Text style={styles.title}>Products</Text>
            </View>
            
            <View style={{ paddingTop: 5, paddingBottom: 30, paddingHorizontal: 20 }}>
                {/* favourite items */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {favouriteItems.map((item, index) => (
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
                                onPress={(state, productId, index) => onFavouriteClick(state, productId, index)} 
                                onOfferDetailPress={(id) => onDetailPress(id)}
                            />
                        </View>
                    ))}
                </View>
                {/* favourite items end */}
            </View>
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
        paddingTop: 15,
    },
    offerItemBox: {
        marginRight: 8,
        marginLeft: 2,
        paddingTop: 10,
        paddingBottom: 10,
        width: (width - 60) / 2,
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

export default ProductsScreen;