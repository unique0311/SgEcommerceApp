import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OfferItem = ({ 
            index,
            isAuthenticated, 
            offerId,
            id, 
            thumbnail,
            packageSize,
            favouriteState, 
            name,
            saveAmount,
            extraAmount,
            onFavouritePress,
            onOfferDetailPress
        }) => {
            name.length > 40 ? name = name.slice(0, 40).concat('...') : name;
    return (
        <View style={styles.container}>
            <View style={styles.productImageContainer} ><Image style={styles.productImage} source={{ uri: thumbnail }} /></View>
            {isAuthenticated ? (
                <TouchableOpacity style={styles.addFavouriteIconBox} onPress={() => onFavouritePress(!favouriteState, id, index)}>
                    {favouriteState ? (
                        <Image style={styles.addFavouriteIcon} source={Images.favourite_dark_icon} />
                    ): (
                        <Image style={styles.addFavouriteIcon} source={Images.favourite_white_icon} />
                    )}
                </TouchableOpacity>
            ) : (<></>)}
            
            <TouchableOpacity style={styles.addIconBox} onPress={() => onOfferDetailPress(offerId)}><Image style={styles.addIcon} source={Images.add_shopping} /></TouchableOpacity>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 85 }}>
                <View>
                    <Text style={styles.countText}>{packageSize}</Text>
                    <Text style={styles.titleText}>{name}</Text>
                </View>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 3 }}>
                        <Text style={styles.saveText}>{saveAmount} <Icon style={styles.currency} name='currency-eur' /></Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={styles.paySaveText}>
                            {extraAmount} <Icon style={styles.currencyPay} name='currency-eur' />&nbsp;
                            <Image style={{ width: 50, height: 10 }} source={Images.pay_icon} />
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: Colors.White,
        width: 140,
        paddingBottom: 10,
        borderRadius: 5,
        shadowColor: '#52006A',  
        elevation: 2,   
    },
    productImageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    productImage: {
        width: 80,
        height: 80,
    },
    addIconBox: {  
        position: 'absolute',
        top: 30,
        right: 5,
    },
    addFavouriteIconBox: {  
        position: 'absolute',
        top: 5,
        right: 5,
    },
    addIcon: {
        width: 28,
        height: 28,
    },
    addFavouriteIcon: {
        width: 25,
        height: 25,
    },
    countText: {
        marginLeft: 10,
        fontSize: 10,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black400,
    },
    titleText: {
        paddingHorizontal: 10,
        fontSize: 10,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black500,
        lineHeight: 14,
    },
    saveText: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        backgroundColor: '#7cdfff',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        fontSize: 9,
        fontFamily: Fonts.NexaBold,
        flexDirection: 'row',
        alignItems: 'center',
    },
    paySaveText: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        color: Colors.PrimaryPurple400,
        backgroundColor: '#f4f3f3',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        fontSize: 9,
        fontFamily: Fonts.NexaBold,
        flexDirection: 'row',
        alignItems: 'center',
    },
    currency: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        backgroundColor: '#7cdfff',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        fontSize: 9,
        fontFamily: Fonts.NexaBold,
    },
    
    currencyPay: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        backgroundColor: '#f4f3f3',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        fontSize: 9,
        fontFamily: Fonts.NexaBold,
    },
})

export default OfferItem;
