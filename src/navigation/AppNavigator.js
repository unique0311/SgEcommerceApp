import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';
//signup screens
import SignUpScreen from '../screens/signup/SignUpScreen';
import SignUpEmailScreen from '../screens/signup/SignUpEmailScreen';
import TermScreen from '../screens/signup/TermScreen';
import PrivacyPolicyScreen from '../screens/signup/PrivacyPolicyScreen';
import EmailVerifyScreen from '../screens/signup/EmailVerifyScreen';
import PhoneVerifyScreen from '../screens/signup/PhoneVerifyScreen';
import TellUsScreen from '../screens/signup/TellUsScreen';
import PreferenceScreen from '../screens/signup/PreferenceScreen';
// Home screens
import HomeScreen from '../screens/home/HomeScreen';
import Notification from '../screens/home/NotificationScreen';
import ItemScreen from '../screens/ItemScreen';
// Home screens end

// recipe
import RecipesScreen from '../screens/recipe/RecipesScreen';
import RecipeIngredientScreen from '../screens/recipe/RecipeIngredientScreen';
// recipe end

// profile
import MyProfileScreen from '../screens/profile/MyProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import ChangePasswordScreen from '../screens/profile/ChangePasswordScreen';
import EWalletScreen from '../screens/profile/EWalletScreen';
import PaymentHistoryScreen from '../screens/profile/PaymentHistoryScreen';
// profile end

// rewards
import MyRewardsScreen from '../screens/rewards/MyRewardsScreen';
import ReceiptsScreen from '../screens/rewards/ReceiptsScreen';
import FilterRewardsResultsScreen from '../screens/rewards/FilterRewardsResultsScreen';
import RewardsSpentScreen from '../screens/rewards/RewardsSpentScreen';
import SpentSubCategoryScreen from '../screens/rewards/SpentSubCategoryScreen';
import SelectedReceiptsScreen from '../screens/rewards/SelectedReceiptsScreen';
import LoyaltyScreen from '../screens/rewards/LoyaltyScreen';
// rewards end

// Home/offers
import OffersScreen from '../screens/home/offers/OffersScreen';
import CategoriesScreen from '../screens/home/offers/CategoriesScreen';
import MainCategoryScreen from '../screens/home/offers/categories/MainCategoryScreen';
import SubCategoryScreen from '../screens/home/offers/categories/SubCategoryScreen';
import FavouriteScreen from '../screens/home/FavouriteScreen';
import SearchScreen from '../screens/home/SearchScreen';
// Home/offers end

// Home/sidemenu
import SideMenuScreen from '../screens/home/sidemenu/SideMenuScreen';
import SettingsScreen from '../screens/home/sidemenu/SettingsScreen';
import FlayersScreen from '../screens/home/sidemenu/FlayersScreen';
import AboutAppScreen from '../screens/home/sidemenu/AboutAppScreen';
import ContactUsScreen from '../screens/home/sidemenu/ContactUsScreen';
import SupportScreen from '../screens/home/sidemenu/SupportScreen';
import FAQScreen from '../screens/home/sidemenu/FAQScreen';
import TermSideMenuScreen from '../screens/home/sidemenu/TermSideMenuScreen';
import PrivacySideMenuScreen from '../screens/home/sidemenu/PrivacySideMenuScreen';
// Home/sidemenu end

// Home/sidemenu/loyalty
import LoyaltySchemeScreen from '../screens/home/sidemenu/loyalty/LoyaltySchemeScreen';
import LoyaltySchemeDetailScreen from '../screens/home/sidemenu/loyalty/LoyaltySchemeDetailScreen';
import LoyaltyProgramScreen from '../screens/home/sidemenu/loyalty/LoyaltyProgramScreen';
import EventsScreen from '../screens/home/sidemenu/loyalty/EventsScreen';
import OurValuesScreen from '../screens/home/sidemenu/loyalty/OurValuesScreen';
import OurHistoryScreen from '../screens/home/sidemenu/loyalty/OurHistoryScreen';
import ProductsScreen from '../screens/home/sidemenu/loyalty/ProductsScreen';
import OurPeopleScreen from '../screens/home/sidemenu/loyalty/OurPeopleScreen';
// Home/sidemenu/loyalty end

// Home/sidemenu/surveys
import SurveysListScreen from '../screens/home/sidemenu/surveys/SurveysListScreen';
import DisclaimerScreen from '../screens/home/sidemenu/surveys/DisclaimerScreen';
import SurveyProgressScreen from '../screens/home/sidemenu/surveys/SurveyProgressScreen';
// Home/sidemenu/surveys end

// Shopping Lists
import MyShoppingExperienceScreen from '../screens/shoppingList/MyShoppingExperienceScreen';
import ShoppingListDetailsScreen from '../screens/shoppingList/ShoppingListDetailsScreen';
import ShoppingListEditScreen from '../screens/shoppingList/ShoppingListEditScreen';  // current working screen
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ConfirmPassword from '../screens/ConfirmPasswordScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='ConfirmPassword' component={ConfirmPassword} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='SignUpEmail' component={SignUpEmailScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Term' component={TermScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicyScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='EmailVerify' component={EmailVerifyScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='PhoneVerify' component={PhoneVerifyScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='TellUs' component={TellUsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Preference' component={PreferenceScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* home */}
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Favourite' component={FavouriteScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Item' component={ItemScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* home end */}

                {/* recipe */}
                <Stack.Screen name='Recipes' component={RecipesScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='RecipeIngredient' component={RecipeIngredientScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* recipe end */}

                {/* profile */}
                <Stack.Screen name='MyProfile' component={MyProfileScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='EditProfile' component={EditProfileScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='EWallet' component={EWalletScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='PaymentHistory' component={PaymentHistoryScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* profile end */}

                {/* rewards */}
                <Stack.Screen name='MyRewards' component={MyRewardsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Receipts' component={ReceiptsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='FilterRewardsResults' component={FilterRewardsResultsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='RewardsSpent' component={RewardsSpentScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='SpentSubCategory' component={SpentSubCategoryScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='SelectedReceipts' component={SelectedReceiptsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Loyalty' component={LoyaltyScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* rewards end */}

                {/* home/sidemenu */}
                <Stack.Screen name='SideMenu' component={SideMenuScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Settings' component={SettingsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Flayers' component={FlayersScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='AboutApp' component={AboutAppScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='ContactUs' component={ContactUsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Support' component={SupportScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='FAQ' component={FAQScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='TermSideMenu' component={TermSideMenuScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='PrivacySideMenu' component={PrivacySideMenuScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* home/sidemenu end */}

                {/* home/sidemenu/loyalty */}
                <Stack.Screen name='LoyaltyScheme' component={LoyaltySchemeScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='LoyaltySchemeDetail' component={LoyaltySchemeDetailScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='LoyaltyProgram' component={LoyaltyProgramScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Events' component={EventsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='OurValues' component={OurValuesScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='OurHistory' component={OurHistoryScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Products' component={ProductsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='OurPeople' component={OurPeopleScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* home/sidemenu/loyalty end */}

                {/* home/sidemenu/surveys */}
                <Stack.Screen name='SurveysList' component={SurveysListScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Disclaimer' component={DisclaimerScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='SurveyProgress' component={SurveyProgressScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* home/sidemenu/surveys end */}

                {/* home/offers */}
                <Stack.Screen name='Offers' component={OffersScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='Categories' component={CategoriesScreen} options={{ headerShown: false, gestureEnabled: false }} />
                
                {/* Canned Food Category */}
                <Stack.Screen name='MainCategory' component={MainCategoryScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='SubCategory' component={SubCategoryScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* home/offers end */}

                {/* Shopping Lists */}
                <Stack.Screen name='MyShoppingExperience' component={MyShoppingExperienceScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='ShoppingListDetails' component={ShoppingListDetailsScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name='ShoppingListEdit' component={ShoppingListEditScreen} options={{ headerShown: false, gestureEnabled: false }} />
                {/* Shopping Lists end */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;