import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Images from '../theme/Images';

const BackButton = ({ type, rightIcon1, rightIcon2, rightIcon3, onPress, onPressIcon1, onPressIcon2, onPressIcon3 }) => {
    var iconImage = null;
    var rightIconImage1 = null;
    var rightIconImage2 = null;
    var rightIconImage3 = null;
    switch(type) {
        case 'white': iconImage = Images.back_white; break;
        case 'dark': iconImage = Images.back_dark; break;
        case 'menu': iconImage = Images.menu_icon; break;
        default: break;
    }
    switch(rightIcon1) {
        case 'close_white': rightIconImage1 = Images.close_white; break;
        case 'close_dark': rightIconImage1 = Images.close_dark; break;
        case 'favouriteHeader': rightIconImage1 = Images.favouriteHeader_icon; break;
        case 'notification': rightIconImage1 = Images.notification_icon; break;
        case 'search_dark': rightIconImage1 = Images.search_dark_icon; break;
        case 'add_shopping_dark': rightIconImage1 = Images.add_shopping_dark; break;
        case 'more': rightIconImage1 = Images.more_icon; break;
        case 'filter_dark': rightIconImage1 = Images.filter_dark_icon; break;
        case 'delete_dark': rightIconImage1 = Images.delete_dark_icon; break;
        case 'edit_dark': rightIconImage1 = Images.edit_icon; break;
        case 'import_dark': rightIconImage1 = Images.import_dark_icon; break;
        case 'scan_dark': rightIconImage1 = Images.scan_dark_icon; break;
        default: break;
    }
    switch(rightIcon2) {
        case 'close_white': rightIconImage2 = Images.close_white; break;
        case 'close_dark': rightIconImage2 = Images.close_dark; break;
        case 'favouriteHeader':rightIconImage2 = Images.favouriteHeader_icon; break;
        case 'notification': rightIconImage2 = Images.notification_icon; break;
        case 'search_dark': rightIconImage2 = Images.search_dark_icon; break;
        case 'add_shopping_dark': rightIconImage2 = Images.add_shopping_dark; break;
        case 'more': rightIconImage2 = Images.more_icon; break;
        case 'filter_dark': rightIconImage2 = Images.filter_dark_icon; break;
        case 'delete_dark': rightIconImage2 = Images.delete_dark_icon; break;
        case 'edit_dark': rightIconImage2 = Images.edit_icon; break;
        case 'import_dark': rightIconImage2 = Images.import_dark_icon; break;
        case 'scan_dark': rightIconImage2 = Images.scan_dark_icon; break;
        default: break;
    }
    switch(rightIcon3) {
        case 'close_white': rightIconImage3 = Images.close_white; break;
        case 'close_dark': rightIconImage3 = Images.close_dark; break;
        case 'favouriteHeader':rightIconImage3 = Images.favouriteHeader_icon; break;
        case 'notification': rightIconImage3 = Images.notification_icon; break;
        case 'search_dark': rightIconImage3 = Images.search_dark_icon; break;
        case 'add_shopping_dark': rightIconImage3 = Images.add_shopping_dark; break;
        case 'more': rightIconImage3 = Images.more_icon; break;
        case 'filter_dark': rightIconImage3 = Images.filter_dark_icon; break;
        case 'delete_dark': rightIconImage3 = Images.delete_dark_icon; break;
        case 'edit_dark': rightIconImage3 = Images.edit_icon; break;
        case 'import_dark': rightIconImage3 = Images.import_dark_icon; break;
        case 'scan_dark': rightIconImage3 = Images.scan_dark_icon; break;
        default: break;
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={onPress}>
                    {iconImage ? (
                        <Image style={styles.backIcon} source={iconImage} />
                    ) : (<></>)} 
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {rightIconImage3 ? (
                        <TouchableOpacity onPress={onPressIcon3}><Image style={[styles.backIcon, {marginRight: 5}]} source={rightIconImage3} /></TouchableOpacity>
                    ) : (<></>)}
                    {rightIconImage2 ? (
                        <TouchableOpacity onPress={onPressIcon2}><Image style={[styles.backIcon, {marginRight: 5}]} source={rightIconImage2} /></TouchableOpacity>
                    ) : (<></>)}
                    {rightIconImage1 ? (
                        <TouchableOpacity onPress={onPressIcon1}><Image style={[styles.backIcon]} source={rightIconImage1} /></TouchableOpacity>
                    ): (<></>)}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backIcon: {
        width: 28,
        height: 28,
    },
})

export default BackButton;