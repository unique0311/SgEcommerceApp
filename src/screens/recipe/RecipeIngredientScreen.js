import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import BackButton from '../../components/BackButton';
import Colors from '../../theme/Colors';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import TopTabBar from '../../components/Home/TopTabBar';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import RecipeItem from '../../components/Home/RecipeItem';

const width = Dimensions.get('window').width;

const categories = [
    "Ingredients",
    "Instructions",
    "Similar Recipes"
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
    }
]

const ingredientsList = [
    {
        name: 'All purpose flour',
        amount: '200g',
        state: true
    },
    {
        name: 'Sugar',
        amount: '100g',
        state: false
    },
    {
        name: 'Vanilla Extract',
        amount: '1tbsp',
        state: true
    },
]

const RecipeIngredientScreen = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(categories[0]);
    const [ingredients, setIngredients] = useState(ingredientsList)
    const onClearClick = () => {
        ingredients.forEach((item, index) => {
            ingredients[index].state = false;
        });
        setIngredients([...ingredients]);
    }
    const onAddShoppingClick = () => {
        
    }
    const onPlayClick = () => {
        console.log('Play Icon Clicked');
    }
    return (
        <View style={styles.container}>
            <ScrollView>            
                <View style={styles.headerBox}>            
                    <Image style={styles.imgStyle} source={Images.recipe1} />
                    <View style={styles.closeBtnStyle}><BackButton rightIcon1="close_white" onPressIcon1={() => {navigation.goBack()}} /></View>
                </View>
                <View style={styles.mainBox}>
                    <TouchableOpacity style={styles.playImgStylePos} onPress={() => onPlayClick()}><Image style={styles.playImgStyle} source={Images.play_icon} /></TouchableOpacity>
                    <Text style={styles.title}>Rose Water Macarons</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -5 }}>
                        <Image style={{ width: 25, height: 25 }} source={Images.chef_icon} />
                        <Text style={styles.chefStyle}>John Doe</Text>
                    </View>
                    <Text style={styles.commentText}>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: Colors.Black200, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <View style={styles.pairBox}>
                            <Image style={styles.pairImg} source={Images.time_icon} />
                            <Text style={styles.pairText}>40 min</Text>
                        </View>
                        <View style={styles.pairBox}>
                            <Image style={styles.pairImg} source={Images.pot_icon} />
                            <Text style={styles.pairText}>15 min</Text>
                        </View>
                        <View style={styles.pairBox}>
                            <Image style={styles.pairImg} source={Images.eat_icon} />
                            <Text style={styles.pairText}>2 servings</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TopTabBar theme="type2" categories={categories} currentPage={currentPage} onSelectPage={(selectedPage) => {setCurrentPage(selectedPage)}} />
                    </View>

                    {currentPage === 'Ingredients' && 
                        <View style={{ flexDirection: 'column', marginTop: 15, height: 100 }}>
                            {ingredients.map((item, index) => (
                                <View style={styles.ingredientBox} key={index}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <CheckBox value={ingredients[index].state} onChange={(state) => {
                                            ingredients[index].state = state;
                                            setIngredients([...ingredients]);
                                        }}  />
                                        <Text style={styles.ingredientName}>{ingredients[index].name}</Text>
                                    </View>
                                    <Text style={styles.ingredientAmount}>{ingredients[index].amount}</Text>
                                </View>
                            ))}
                        </View>
                    }
                    {currentPage === 'Instructions' && 
                        <View style={{ flexDirection: 'column', marginTop: 15 }}>
                            <Text style={styles.instructionText}>
                                Make the macarons: In the bowl of a food processor, combine the powdered sugar, almond four,
                                and 1/2 teaspoon of salt, and process on low speed, until extra fine. Sift the almond four mixture
                                through a fine-mesh sieve into a large bowl.
                            </Text>
                            <Text style={styles.instructionText}>
                                Make the macarons: In the bowl of a food processor, combine the powdered sugar, almond four,
                                and 1/2 teaspoon of salt, and process on low speed, until extra fine. Sift the almond four mixture
                                through a fine-mesh sieve into a large bowl.
                            </Text>
                            <Text style={styles.instructionText}>
                                Make the macarons: In the bowl of a food processor, combine the powdered sugar, almond four,
                                and 1/2 teaspoon of salt, and process on low speed, until extra fine. Sift the almond four mixture
                                through a fine-mesh sieve into a large bowl.
                            </Text>
                        </View>
                    }
                    {currentPage === 'Similar Recipes' && 
                        <View style={{ flexDirection: 'column', marginTop: 35 }}>
                            {recipeItemLists.map((item, index) => (
                                <View key={index} style={{ padding:1, marginBottom: 20 }}><RecipeItem title={item.title} chefName={item.chefName} imageName={item.imageName} /></View>
                            ))}
                        </View>
                    }
                </View>
                
                <View style={{ height: 50 }}></View>
            </ScrollView>


            {/* bottom panel */}
            <View style={styles.bottomBox}>
                <View style={{ flex: 1, paddingRight: 5 }}><Button title="Clear Selection" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderColor: Colors.PrimaryPurple500, borderWidth: 1 }}  onPress={() => onClearClick()} disabled={false} font={Fonts.NexaBold} /></View>
                <View style={{ flex: 1, paddingLeft: 5 }}><Button title="Add to shopping list" color={Colors.White} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50 }}  onPress={() => onAddShoppingClick()} disabled={false} font={Fonts.NexaBold} /></View>
            </View>
            {/* bottom panel end */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        position: 'relative'
    },
    headerBox: {
        position: 'relative',
        height: 220
    },
    imgStyle: {
        position: 'absolute',
        width: width,
        height: '100%'
    },
    closeBtnStyle: {
        top: 20,
        right: 20
    },
    mainBox: {
        position: 'relative',
        marginTop: -20,
        padding: 20,
        backgroundColor: Colors.White,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black400,
    },
    chefStyle: {
        fontSize: 11,
        fontFamily: Fonts.NexaBook,
        color: Colors.PrimaryPurple300,
    },
    commentText: {
        marginTop: 5,
        fontSize: 11,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black400,
    },
    pairBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    pairImg: {
        width: 45,
        height: 45
    },
    pairText: {
        marginTop: 5,
        fontSize: 11,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black300,
    },
    bottomBox: {
        borderTopColor: Colors.Black200,
        borderTopWidth: 1,
        flexDirection: 'row', 
        padding: 20,
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.White,
    },
    ingredientBox: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ingredientName: {
        marginLeft: 10,
        fontSize: 11,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black400,
    },
    ingredientAmount: {
        fontSize: 10,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black400,
    },
    instructionText: {
        fontSize: 10,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black400,
        marginBottom: 10,
    },
    playImgStyle: {
        width: 50,
        height: 50
    },
    playImgStylePos: {
        position: 'absolute',
        top: -25,
        right: 10,
    }
})

export default RecipeIngredientScreen;