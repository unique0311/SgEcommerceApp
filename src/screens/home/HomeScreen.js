import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import BackButton from '../../components/BackButton';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import TrendingItem from '../../components/Home/TrendingItem';
import OfferItem from '../../components/Home/OfferItem';
import RecipeItem from '../../components/Home/RecipeItem';
import LoyaltyItem from '../../components/Home/LoyaltyItem';
import FlayerItem from '../../components/Home/FlayerItem';
import BottomBar from '../../components/Home/BottomBar';
import SurveyItem from '../../components/Home/SurveyItem';

import { useDispatch, useSelector } from 'react-redux';
import { getOffers } from '../../redux/offers/actions';
import { getRecipes } from '../../redux/recipes/actions';
import { getLoyalties } from '../../redux/loyalties/actions';
import { getFlayers } from '../../redux/flayers/actions';

const trendingItemLists = [
  {
    imageName: 'trending',
    text: `Fill your basket ${'\n'}& save more!`
  },
  {
    imageName: 'trending',
    text: `Fill your basket ${'\n'}& save more!`
  },
  {
    imageName: 'trending',
    text: `Fill your basket ${'\n'}& save more!`
  },
]

const surveyItemLists = [
  {
    imageName: 'survey',
    text: 'Survey Name',
    comment: '+6 '
  },
  {
    imageName: 'survey',
    text: 'Survey Name',
    comment: '+6 '
  },
  {
    imageName: 'survey',
    text: 'Survey Name',
    comment: '+6 '
  }
]

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const offers = useSelector(state => state.offers.offers);
  const recipes = useSelector(state => state.recipes.recipes);
  const loyalties = useSelector(state => state.loyalties.loyalties);
  const flayers = useSelector(state => state.flayers.flayers);
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // const [offerItems, setOfferItems] = useState(offerItemLists);

  const onMenuClick = () => {
    console.log('Menu Clicked!');
    if(isAuthenticated) {
      navigation.push('SideMenu');
    } else {
      navigation.push('SignUp', {
        show: true
      })
    }
  };

  const onNotiClick = () => {
    console.log('Notification Clicked');
    if(isAuthenticated) {

    } else {
      navigation.push('SignUp', {
        show: true
      })
    }
  };
  const onFavouriteIconClick = () => {
    console.log('Favourite Icon Clicked');
    if(isAuthenticated) {
      navigation.push('Favourite');
    } else {
      navigation.push('SignUp', {
        show: true
      })
    }
  }

  const onFavouriteClick = (state, productId, index) => {
    // offerItems[index].favouriteState = state;
    // setOfferItems([...offerItems]);
  };
  const onOfferDetailPress = (offer_id) => {
    console.log("OfferID Click: ", offer_id);
    navigation.push('Item', { offerId: offer_id });
  }

  useEffect(() => {
    dispatch(getOffers({ pageSize: 10, pageIndex: 1 }));
    dispatch(getRecipes());
    dispatch(getLoyalties());
    dispatch(getFlayers({ pageSize: 10, pageIndex: 1}));
  }, []);

  return (
    <View style={styles.container}>      
      <ScrollView>
        <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
          <BackButton
            type="menu"
            rightIcon1="notification"
            rightIcon2="favouriteHeader"
            onPress={() => onMenuClick()}
            onPressIcon1={() => onNotiClick()}
            onPressIcon2={() => onFavouriteIconClick()}
          />
        </View>
        <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
          <Text style={styles.title}>Hi, {isAuthenticated ? user.firstName : <></>}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image style={styles.trendingImage} source={Images.trending_icon} />
                  <Text style={styles.trendingText}>Trending Now</Text>
              </View>
              <Text style={styles.trendingTime}>7d:12h</Text>
          </View>
          <ScrollView horizontal={true} style={{ marginTop: -15 }}>
            {trendingItemLists.map((item, index) => (
              <View key={index} style={styles.trendingBox}>
                <TrendingItem imageName={item.imageName} text={item.text} />
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ paddingVertical: 15, paddingHorizontal: 20, backgroundColor: '#f6f7fe' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.offerText}>Offers</Text>
            <TouchableOpacity><Text style={styles.viewText}>view all</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
            {offers && offers.map((item, index) => (
              <View style={styles.offerItemBox} key={index}>
                <OfferItem 
                  index={index}
                  isAuthenticated={isAuthenticated} 
                  offerId={item.id}
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
        {!isAuthenticated ? (
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
        ) : (<></>)}
        
        <View style={styles.spaceHeight}></View>

        <View style={{ paddingTop: 15, paddingBottom: 15, paddingHorizontal: 20, backgroundColor: Colors.White }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.offerText}>Loyalty Scheme</Text>
            <TouchableOpacity onPress={() => {navigation.push('LoyaltyScheme')}}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal={true} >
            {loyalties && loyalties.map((item, index) => (
              <View key={index}><LoyaltyItem item={item} onPress={(text) => {navigation.push('LoyaltySchemeDetail')}} /></View>
            ))}
          </ScrollView>
        </View>

        {isAuthenticated ? (<View style={styles.spaceHeight}></View>) : (<></>) }

        <View style={{ paddingTop: 15, paddingBottom: 15, paddingHorizontal: 20, backgroundColor: Colors.White }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.offerText}>Flayers</Text>
            <TouchableOpacity onPress={() => {navigation.push('Flayers')}}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            {flayers && flayers.list.map((item, index) => (
              <View key={index} style={{ paddingTop: 2, paddingRight: 8, paddingLeft: 2, paddingBottom: 10 }}><FlayerItem item={item} /></View>
            ))}
          </ScrollView>
        </View>

        {isAuthenticated ? (<View style={styles.spaceHeight}></View>) : (<></>) }

        <View style={{ paddingTop: 15, paddingBottom: 50, paddingHorizontal: 20, backgroundColor: Colors.White }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.offerText}>Surveys</Text>
            <TouchableOpacity onPress={() => {navigation.push('SurveysList')}}><Text style={styles.viewText}>view all</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            {surveyItemLists.map((item, index) => (
              <View key={index} style={{ paddingTop: 2, paddingRight: 8, paddingLeft: 2, paddingBottom: 10 }}><SurveyItem imageName={item.imageName} text={item.text} comment={item.comment} /></View>
            ))}
          </ScrollView>
        </View>

      </ScrollView>

      <BottomBar 
        home={true} 
        shopping={false} 
        favourite={false} 
        profile={false} 
        onHomeClick={() => {navigation.push('Home')}} 
        onShoppingClick={() => {navigation.push('MyShoppingExperience')}}
        onProfileClick={() => {navigation.push('MyProfile')}} 
        onRewardsClick={() => {navigation.push('MyRewards')}} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    
  },
  title: {
    fontSize: 18, 
    color: Colors.PrimaryPurple500,
    fontFamily: Fonts.NexaBlack,
  },
  trendingImage: {
    width: 28, 
    height: 28, 
    marginLeft: -8,
  },
  trendingText: {
    fontSize: 12,
    color: Colors.Black400,
    fontFamily: Fonts.NexaHeavy,
  },
  trendingTime: {
    fontSize: 12,
    color: Colors.Black400,
    fontFamily: Fonts.NexaBold,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: Colors.Black100,
    borderRadius: 50,
  },
  trendingBox: {
    marginRight: 10,
  },
  // offer
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
  spaceHeight: {
    height: 10,
    backgroundColor: '#f6f7fe',
  },
});

export default HomeScreen;
