import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import BackButton from '../../../../components/BackButton';
import Colors from '../../../../theme/Colors';
import Fonts from '../../../../theme/Fonts';
import Images from '../../../../theme/Images';
import OfferItem from '../../../../components/Home/OfferItem';
import Section from '../../../../components/SideMenu/Loyalty/Section';
import EventItem from '../../../../components/SideMenu/Loyalty/EventItem';
import PeopleItem from '../../../../components/SideMenu/Loyalty/PeopleItem';
import RecipeItem from '../../../../components/Home/RecipeItem';

const productsList = [
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
];

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

const LoyaltySchemeDetailScreen = ({ navigation }) => {
    const [loginState, setLoginState] = useState(true);
    const [productItems, setProductItems] = useState(productsList);
    // products
    const onProductsFavouriteClick = (state, productId, index) => {
        productItems[index].favouriteState = state;
        setProductItems([...productItems]);
    }
    const onProductsDetailPress = (product_id) => {
        console.log(product_id);
    }
    // products end

    // Section
    const onLoyaltyProgramClick = () => {
        navigation.push("LoyaltyProgram");
    }
    const onOurValuesClick = () => {
        navigation.push("OurValues");
    }
    const onOurHistoryClick = () => {
        navigation.push("OurHistory");
    }
    // Section end
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <BackButton type="white" onPress={() => {navigation.goBack()}} />
                <View style={styles.imgBox}><Image style={styles.loyaltyDetailImg} source={Images.loyalty_detail_img} /></View>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Alphamega</Text>
                <Text style={styles.subTitle}>
                    Lorem lpsum is simply dummy text of the printing and typesetting industry, Lorem lpsum has been the industry's standard 
                    <Text style={styles.learnMoreTextStyle}>  Learn more</Text>
                </Text>
                {/* product */}
                <View style={{ paddingTop: 15 }}>
                    {/* vegetables & fruits */}
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.offerText}>Products</Text>
                            <TouchableOpacity onPress={() => {navigation.push('Products')}}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                            {productItems.map((item, index) => (
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
                                        onPress={(state, productId, index) => onProductsFavouriteClick(state, productId, index)} 
                                        onOfferDetailPress={(id) => onProductsDetailPress(id)}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    {/* vegetables fruits end */}
                </View>
                {/* product end */}

                {/* Loyalty Programs */}
                <View style={{ marginTop: 20 }}>
                    <Section 
                        title="Loyalty Programs" 
                        comment="Lorem lpsum is simply dummy text of the printing and typesetting industry, Lorem lpsum has been the industry's standard... "
                        onPress={() => onLoyaltyProgramClick()}
                    />
                </View>
                {/* Loaylty Programs end */}
                {/* Our Values */}
                <View style={{ marginTop: 20 }}>
                    <Section 
                        title="Our Values" 
                        comment="Lorem lpsum is simply dummy text of the printing and typesetting industry, Lorem lpsum has been the industry's standard... "
                        images={true}
                        onPress={() => onOurValuesClick()}
                    />
                </View>
                {/* Our Values end */}
                {/* Our History */}
                <View style={{ marginTop: 20 }}>
                    <Section 
                        title="Our History" 
                        comment="Lorem lpsum is simply dummy text of the printing and typesetting industry, Lorem lpsum has been the industry's standard... "
                        onPress={() => onOurHistoryClick()}
                    />
                </View>
                {/* Our History end */}

                {/* Events */}
                <View style={{ paddingTop: 15 }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.offerText}>Events</Text>
                            <TouchableOpacity onPress={() => {navigation.push('Events')}}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <EventItem />
                        <EventItem />
                    </View>
                </View>
                {/* Events end */}

                {/* Our People */}
                <View style={{ paddingTop: 15 }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.offerText}>Our People</Text>
                            <TouchableOpacity onPress={() => {navigation.push('OurPeople')}}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView horizontal={true} style={{ paddingVertical: 15 }}>
                        {peopleItems.map((item, index) => (
                            <View key={index} style={{ marginRight: 10 }}><PeopleItem imageName={item.imageName} title={item.title} comment={item.comment} phone={item.phone} /></View>
                        ))}
                    </ScrollView>
                </View>
                {/* Our People end */}

                {/* Recipes */}
                <View style={{ paddingTop: 15 }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.offerText}>Recipes</Text>
                            <Text style={styles.viewText}>view all</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View><RecipeItem title="Shrimp noodles" chefName="John Doe" imageName="recipe" /></View>
                    </View>
                </View>
                {/* Recipes end */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.PrimaryPurple500,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    imgBox: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loyaltyDetailImg: {
        width: 100,
        height: 100,
        marginBottom: -30,
        marginTop: -20,
    },
    body: {
        padding: 20,
        backgroundColor: Colors.White,
        flex: 1,
        zIndex: -1,
    },
    title: {
        paddingTop: 20,
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBlack,
        fontSize: 22,
    },
    subTitle: {
        paddingTop: 5,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBook,
        fontSize: 11,
        lineHeight: 18,
    },
    learnMoreTextStyle: {
        color: Colors.PrimaryPurple500,
        fontFamily: Fonts.NexaBold,
        fontSize: 13,
        borderBottomWidth: 1,
        textDecorationLine: 'underline',
    },
    offerText: {
        // paddingBottom: 15,
        color: Colors.Black500,
        fontFamily: Fonts.NexaHeavy,
        fontSize: 15,
    },
    viewText: {
        color: Colors.Black400,
        fontFamily: Fonts.NexaBold,
        fontSize: 10,
    },
    offerItemBox: {
        marginRight: 8,
        marginLeft: 2,
        paddingTop: 10,
        paddingBottom: 10,
    },
})

export default LoyaltySchemeDetailScreen;