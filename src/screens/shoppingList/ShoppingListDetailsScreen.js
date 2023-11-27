import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import BackButton from '../../components/BackButton';
import ShoppingListDetailItem from '../../components/ShoppingList/ShoppingListDetailItem';

const shoppingListItemLists = [
    {
        active: true,
        title: 'Eggs',
        amount: 1
    },
    {
        active: false,
        title: 'Laundry Detergent',
        amount: 2
    },
    {
        active: false,
        title: 'Orange Juice',
        amount: 4
    },
    {
        active: true,
        title: 'Nutella',
        amount: 1
    },
]

export const ShoppingListDetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackButton 
                type="dark" 
                rightIcon1="delete_dark" 
                rightIcon2="edit_dark" 
                onPress={() => {navigation.goBack()}}
                onPressIcon1={() => {}} 
                onPressIcon2={() => {navigation.push('ShoppingListEdit')}} 
            />
            <View style={{ marginTop: 20 }}>
                {shoppingListItemLists.map((item, index) => (
                    <View key={index}>
                        <ShoppingListDetailItem active={item.active} title={item.title} amount={item.amount} />
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20
    }
})

export default ShoppingListDetailsScreen;