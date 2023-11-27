import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import Colors from '../../../theme/Colors';
import BackButton from '../../../components/BackButton';
import CategoryItem from '../../../components/Home/CategoryItem';
import Fonts from '../../../theme/Fonts';

const categoryItemLists = [
    {
        imageName: 'beverages_category',
        comment: 'Beverages'
    },
    {
        imageName: 'cannedFood_category',
        comment: 'Canned Food'
    },
    {
        imageName: 'beverages_category',
        comment: 'Beverages'
    },
    {
        imageName: 'cannedFood_category',
        comment: 'Canned Food'
    },
    {
        imageName: 'beverages_category',
        comment: 'Beverages'
    },
    {
        imageName: 'cannedFood_category',
        comment: 'Canned Food'
    },
    {
        imageName: 'beverages_category',
        comment: 'Beverages'
    },
    {
        imageName: 'cannedFood_category',
        comment: 'Canned Food'
    },
    {
        imageName: 'beverages_category',
        comment: 'Beverages'
    },
    {
        imageName: 'cannedFood_category',
        comment: 'Canned Food'
    }
]

const width = Dimensions.get('window').width;

const CategoriesScreen = ({ navigation }) => {
    const onBackClick = () => {
        navigation.goBack();
    }
    const onSearchClick = () => {
        console.log("Search Icon Clicked");
    }
    return (
        <ScrollView style={styles.container}>
            <BackButton type="dark" rightIcon1="search_dark" onPress={() => onBackClick()} onPressIcon1={() => onSearchClick()} />
            <View style={{ paddingTop: 15, paddingBottom: 15, backgroundColor: Colors.White }}>
                <Text style={styles.title}>Categories</Text>
                <View style={{ paddingBottom: 10, paddingTop: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {categoryItemLists.map((item, index) => (
                        <View key={index} style={{ marginRight: 10, marginBottom: 10, width: (width - 70) / 3 }}>
                            <CategoryItem imageName={item.imageName} comment={item.comment} />
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.White,
        padding: 20,
    },
    title: {
        fontSize: 23,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500,
    },
})

export default CategoriesScreen;