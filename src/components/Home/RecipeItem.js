import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import Images from '../../theme/Images';

const RecipeItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.product}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 25, height: 25 }} source={Images.chef_icon} />
                <Text style={styles.name}>{item.chef}</Text>
                <View style={{ position: 'absolute', bottom: -32, right: 20 }}><Image style={styles.recipeImg} source={{ uri: item.photo }} /></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        position: 'relative',
        backgroundColor: Colors.White,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#52006A',  
        elevation: 2,   
    },
    product: {
        fontSize: 13,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black500,
    },
    name: {
        fontSize: 11,
        fontFamily: Fonts.NexaBook,
        color: Colors.PrimaryPurple300,
    },
    recipeImg: {
        width: 90,
        height: 90,
    },
})

export default RecipeItem;