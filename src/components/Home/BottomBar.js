import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../../theme/Colors';
import Images from '../../theme/Images';

const BottomBar = ({ home, shopping, favourite, profile, onHomeClick, onShoppingClick, onProfileClick, onRewardsClick }) => {
    var homeImage = null;
    var shoppingImage = null;
    var favouriteImage = null;
    var profileImage = null;
    home ? homeImage=Images.home_selected_icon : homeImage=Images.home_icon;
    shopping ? shoppingImage=Images.shopping_selected_icon : shoppingImage=Images.shopping_icon;
    favourite ? favouriteImage=Images.favourite_selected_icon : favouriteImage=Images.favourite_icon;
    profile ? profileImage=Images.profile_selected_icon : profileImage=Images.profile_icon;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onHomeClick}><Image style={styles.imgStyle} source={homeImage} /></TouchableOpacity>
            <TouchableOpacity onPress={onShoppingClick}><Image style={styles.imgStyle} source={shoppingImage} /></TouchableOpacity>
            <TouchableOpacity><Image style={[styles.imgCameraStyle, {marginTop: -45}]} source={Images.camera_icon} /></TouchableOpacity>
            <TouchableOpacity onPress={onRewardsClick}><Image style={styles.imgStyle} source={favouriteImage} /></TouchableOpacity>
            <TouchableOpacity onPress={onProfileClick}><Image style={styles.imgStyle} source={profileImage} /></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 5, 
        // height: 50,
        position: 'absolute',
        width: '100%',
        borderTopColor: Colors.Black200,
        borderTopWidth: 1,
        bottom: 0,
        left: 0,
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.White
    },
    imgStyle: {
        width: 40,
        height: 40,
    },
    imgCameraStyle: {
        width: 50,
        height: 50,
    },
})

export default BottomBar;