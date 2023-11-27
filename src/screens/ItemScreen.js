import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Colors from '../theme/Colors';
import BackButton from '../components/BackButton';
import Fonts from '../theme/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import NutritionalLists from '../components/NutritionalLists';
import OfferItem from '../components/Home/OfferItem';
import RecipeItem from '../components/Home/RecipeItem';
import BottomModal from '../components/Modal/BottomModal';
import Images from '../theme/Images';

import { useDispatch, useSelector } from 'react-redux';
import { getOffer } from '../redux/offers/actions';
import { getRecipes } from '../redux/recipes/actions';

const ItemScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const offer = useSelector(state => state.offers.offer);
    const recipes = useSelector(state => state.recipes.recipes);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [readMoreDesc, setReadMoreDesc] = useState(false);
    const [readMoreHealth, setReadMoreHealth] = useState(false);
    // const [offerItems, setOfferItems] = useState(offerItemLists);
    const onBackClick = () => {
        navigation.goBack();
    }
    const onAddShoppingClick = () => {
        setShowModal(true);
    }
    const onFavouriteIconClick = () => {

    }

    const onFavouriteClick = (state, productId, index) => {
        // offerItems[index].favouriteState = state;
        // setOfferItems([...offerItems]);
    };
    const onOfferDetailPress = (product_id) => {
        navigation.push('Item', { productId: product_id });
    }

    const [showModal, setShowModal] = useState(false);
    const toggleModal = (value) => {
        setShowModal(value);
    }

    useEffect(() => {
        var offerId = route.params.offerId;
        console.log('OfferId Props ', offerId);
        dispatch(getOffer({ offerId: offerId }));
        dispatch(getRecipes());
    }, []);
    return offer && (
        <>
        <ScrollView style={styles.container}>
            
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <BackButton
                    type="dark"
                    rightIcon1="add_shopping_dark"
                    rightIcon2="favouriteHeader"
                    onPress={() => onBackClick()}
                    onPressIcon1={() => onAddShoppingClick()}
                    onPressIcon2={() => onFavouriteIconClick()}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: offer?.offer?.Product?.samples }} />
            </View>
            <View style={styles.itemBox}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: Colors.Black100, borderBottomWidth: 1, paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end', flex: 8 }}>
                        <Text style={{ color: Colors.Black400, fontSize: 9, fontFamily: Fonts.NexaBold}}>{offer?.offer?.Product?.packageSize}</Text>
                        <Text style={{ marginTop: 3, color: Colors.Black400, fontSize: 13, fontFamily: Fonts.NexaHeavy}}>{offer?.offer?.Product?.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end', flex: 2 }}>
                        <Text style={{ color: Colors.Black400, fontSize: 9, fontFamily: Fonts.NexaBook}}>Barcode</Text>
                        <Text style={{ color: Colors.Black300, fontSize: 9, fontFamily: Fonts.NexaBook}}>{offer?.offer?.Product?.barcode}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                    <Text style={{ color: Colors.Black400, fontFamily: Fonts.NexaBook, fontSize: 11, lineHeight: 15 }}>
                        {readMoreDesc ? offer?.offer?.Product?.description : (offer?.offer?.Product?.description).slice(0, 100).concat('...')}
                    </Text>
                    <TouchableOpacity onPress={() => {setReadMoreDesc(!readMoreDesc)}}>
                        <Text style={styles.readMoreText}>{readMoreDesc ? 'Less' : 'React More'}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.offerBox}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20, borderBottomColor: Colors.White, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={{ color: Colors.PrimaryPurple500, fontSize: 14, fontFamily: Fonts.NexaBold }}>
                            Offer
                        </Text>
                        <View style={{ marginTop: 4, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Icon name='currency-eur' style={{ fontSize: 15, color: Colors.PrimaryPurple500 }} />
                            <Text style={{ fontFamily: Fonts.NexaBook, fontSize: 12, color: Colors.Black400 }}>
                                Save <Text style={{ fontFamily: Fonts.NexaBold }}>{offer?.offer?.Product?.price}</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={styles.trendingTime}>{offer?.offer?.Product?.createdAt}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ marginTop: 10, color: Colors.PrimaryPurple500, fontSize: 14, fontFamily: Fonts.NexaBold }}>
                        Offer Terms
                    </Text>
                    {((offer.offer.condition).split('\n')).map((item, index) => {
                        if(index !== (offer.offer.condition).split('\n').length-1) {
                            return (
                                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} key={index}>
                                    <EntypoIcon name='chevron-right' style={{ fontSize: 14, color: Colors.PrimaryPurple500 }} />
                                    <Text style={{ marginLeft: 5, fontFamily: Fonts.NexaBook, fontSize: 12, color: Colors.Black400 }}>
                                        {item.replace('-\t', '')}
                                    </Text>
                                </View>
                            )
                        }
                    })}
                </View>
            </View>

            <View style={styles.healthBox}>
                <Text style={styles.healthBoxTitle}>Health Info</Text>
                <Text style={styles.healthBoxComment}>
                    {readMoreHealth ? 
                        JSON.parse(offer?.offer?.Product?.additionalInfo).HealthInfo : 
                        (JSON.parse(offer?.offer?.Product?.additionalInfo).HealthInfo).slice(0, 100).concat('...')
                    }
                </Text>
                <TouchableOpacity onPress={() => {setReadMoreHealth(!readMoreHealth)}}>
                    <Text style={styles.readMoreText}>{readMoreHealth ? 'Less' : 'React More'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.nutritionalBox}>
                <Text style={styles.nutritionalBoxTitle}>Nutritional Info</Text>
                <View style={{ marginTop: 10 }}>
                    <NutritionalLists lists={JSON.parse(offer?.offer?.Product?.additionalInfo).NutritionalInfo} />
                </View>
            </View>

            <View style={{ paddingVertical: 15, paddingHorizontal: 20, backgroundColor: Colors.White }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.offerText}>Similar Products</Text>
                    <Text style={styles.viewText}>view all</Text>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                    {offer.similarOffers.map((item, index) => (
                        <View style={[styles.offerItemBox, {padding: 1}]} key={index}>
                            <OfferItem 
                                index={index}
                                isAuthenticated={isAuthenticated} 
                                id={item.Product.id} 
                                thumbnail={item.Product.thumbnail}
                                packageSize={item.Product.packageSize}
                                favouriteState={false}
                                name={item.Product.name}
                                saveAmount={item.saveAmount}
                                extraAmount={item.extraAmount}
                                onFavouritePress={(state, productId, index) => onFavouriteClick(state, productId, index)} 
                                onOfferDetailPress={(id) => onOfferDetailPress(id)}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={{ paddingVertical: 15, paddingHorizontal: 20, backgroundColor: Colors.White }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.offerText}>Recipes</Text>
                    <Text style={styles.viewText}>view all</Text>
                </View>
                <View>
                    {recipes && recipes.map((item, index) => (
                        <View key={index}><RecipeItem item={item} /></View>
                    ))}
                </View>
            </View>
        </ScrollView>

        <BottomModal 
            title="Add to" 
            btnLabel1="Active Shopping List" 
            btnLabel2="Template Name" 
            btnLabel3="Template Name" 
            btnLabel4="Template Name" 
            btnLabel5="Template Name" 
            state={showModal} 
            toggleModal={(value) => toggleModal(value)} 
        />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        flexDirection: 'column',
    },
    itemBox: {
        marginTop: 20,
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    offerBox: {
        marginTop: 20,
        backgroundColor: '#f6f7fe',
        paddingHorizontal: 20,
        paddingVertical: 14,
        flexDirection: 'column',
    },
    trendingTime: {
        fontSize: 11,
        color: Colors.White,
        fontFamily: Fonts.NexaBook,
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: Colors.PrimaryPurple500,
        borderRadius: 50,
    },
    healthBox: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    healthBoxTitle: {
        color: Colors.Black, 
        fontSize: 14, 
        fontFamily: Fonts.NexaBold
    },
    healthBoxComment: {
        marginTop: 10,
        color: Colors.Black400, 
        fontSize: 12, 
        fontFamily: Fonts.NexaBook,
        lineHeight: 15
    },
    readMoreText: {
        marginTop: 5,
        color: Colors.PrimaryPurple500, 
        fontFamily: Fonts.NexaBook, 
        fontSize: 11, 
        textDecorationLine: 'underline'
    },
    nutritionalBox: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'column',
    },
    nutritionalBoxTitle: {
        color: Colors.Black, 
        fontSize: 14, 
        fontFamily: Fonts.NexaBold
    },
    offerText: {
        paddingBottom: 15,
        color: Colors.Black500,
        fontFamily: Fonts.NexaHeavy,
        fontSize: 13,
    },
    viewText: {
        color: Colors.PrimaryPurple300,
        fontFamily: Fonts.NexaBold,
        fontSize: 10,
    },
    offerItemBox: {
        marginRight: 10,
        paddingBottom: 10,
    },
})

export default ItemScreen;