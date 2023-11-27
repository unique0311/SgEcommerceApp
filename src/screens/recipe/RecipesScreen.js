import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BackButton from '../../components/BackButton';
import RecipePanel from '../../components/RecipePanel';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import RecipeItem from '../../components/Home/RecipeItem';

const recipePanelLists = [
    {
        imageName: 'recipe1',
        title: 'Avocado Toast',
        chef: 'John Doe'
    },
    {
        imageName: 'recipe1',
        title: 'Avocado Toast',
        chef: 'John Doe'
    },
    {
        imageName: 'recipe1',
        title: 'Avocado Toast',
        chef: 'John Doe'
    }
]

const recipeItemLists = [
    {
      title: 'Shrimp noodles',
      chefName: 'John Doe',
      imageName: 'recipe'
    },
    {
        title: 'Shrimp noodles',
        chefName: 'John Doe',
        imageName: 'recipe'
    },
    {
        title: 'Shrimp noodles',
        chefName: 'John Doe',
        imageName: 'recipe'
    },
    {
        title: 'Shrimp noodles',
        chefName: 'John Doe',
        imageName: 'recipe'
    }
]

const RecipesScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <BackButton type="dark" onPress={() => {navigation.goBack()}} />
            <Text style={styles.title}>Recipes</Text>
            <ScrollView horizontal={true} style={{ paddingBottom: 5, marginTop: 10 }}>
                {recipePanelLists.map((item, index) => (
                    <View key={index} style={{ marginRight: 15 }}>
                        <RecipePanel imageName={item.imageName} title={item.title} chef={item.chef} />
                    </View>
                ))}
            </ScrollView>
            <View style={{ flexDirection: 'column', paddingBottom: 20 }}>
                <Text style={styles.quickText}>Quick Recipes</Text>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ marginTop: 20 }}>
                        {recipeItemLists.map((item, index) => (
                            <View key={index} style={{ padding: 1, marginBottom: 20 }}><RecipeItem title={item.title} chefName={item.chefName} imageName={item.imageName} /></View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20
    },
    title: {
        marginTop: 5,
        color: Colors.PrimaryPurple500,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack
    },
    quickText: {
        marginTop: 15,
        color: Colors.Black400,
        fontSize: 12,
        fontFamily: Fonts.NexaHeavy
    }
});

export default RecipesScreen;