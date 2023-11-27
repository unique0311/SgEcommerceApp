import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import BottomBar from '../../components/Home/BottomBar';

const MyRewardsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <Text style={styles.title}>My Rewards</Text>
            </View>
            <View style={styles.bodyPanel}>
                <TouchableOpacity style={styles.itemBox}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.itemBoxTitle1}>Redeemeed</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.itemBoxTitle2}>12.10 <Icon name='currency-eur' /></Text>
                            <Text style={styles.itemBoxTitle3}>9600 Points</Text>
                        </View>
                        <EntypoIcon style={styles.rightIcon} name='chevron-right' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemBox}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.itemBoxTitle1}>Remain</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.itemBoxTitle2}>2.50 <Icon name='currency-eur' /></Text>
                            <Text style={styles.itemBoxTitle3}>1800 Points</Text>
                        </View>
                        <EntypoIcon style={styles.rightIcon} name='chevron-right' />
                    </View>
                </TouchableOpacity>
                <View style={styles.transferBox}>
                    <Text style={styles.transferBoxText1}>Next Transfer Date</Text>
                    <Text style={styles.transferBoxText2}>09, July 2021</Text>
                </View>
            </View>
          
            <TouchableOpacity style={[styles.itemBox, styles.cardBoxBack, { alignItems: 'center' }]} onPress={() => {navigation.push('Loyalty')}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.itemBoxTitle1, { color: Colors.White, fontSize: 12 }]}>TOTAL</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View>
                        <Text style={[styles.itemBoxTitle2, { color: Colors.White }]}>14.60 <Icon name='currency-eur' /></Text>
                        <Text style={[styles.itemBoxTitle3, { color: Colors.White }]}>1800 Points</Text>
                    </View>
                    <EntypoIcon style={[styles.rightIcon, { color: Colors.White }]} name='chevron-right' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemBox, styles.cardBoxBack, { alignItems: 'center' }]} onPress={() => {navigation.push('RewardsSpent')}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.itemBoxTitle1, { color: Colors.White, fontSize: 12 }]}>My Spending</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View>
                        <Text style={[styles.itemBoxTitle3, { color: Colors.White }]}>You spent</Text>
                        <Text style={[styles.itemBoxTitle2, { color: Colors.White }]}>1500.60 <Icon name='currency-eur' /></Text>
                    </View>
                    <EntypoIcon style={[styles.rightIcon, { color: Colors.White }]} name='chevron-right' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemBox, styles.cardBoxBack, { alignItems: 'center', paddingVertical: 10 }]} onPress={() => {navigation.push('Receipts')}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.itemBoxTitle1, { color: Colors.White, fontSize: 12 }]}>My Receipts</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={[styles.itemBoxTitle2, { color: Colors.White }]}>50</Text>
                        <Text style={[styles.itemBoxTitle3, { color: Colors.White, marginLeft: 5 }]}>total</Text>
                    </View>
                    <EntypoIcon style={[styles.rightIcon, { color: Colors.White }]} name='chevron-right' />
                </View>
            </TouchableOpacity>
            <BottomBar 
                home={false} 
                shopping={false} 
                favourite={true} 
                profile={false} 
                onHomeClick={() => {navigation.push('Home')}} 
                onShoppingClick={() => {navigation.push('MyShoppingExperience')}}
                onProfileClick={() => {navigation.push('MyProfile')}} 
                onRewardsClick={() => {navigation.push('MyRewards')}} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: Colors.White,
    },
    headerTop: {
        backgroundColor: Colors.PrimaryPurple500,
        height: 70,
        padding: 20
    },
    title: {
        fontSize: 20,
        color: Colors.White,
        fontFamily: Fonts.NexaBlack,
    },
    bodyPanel: {
        paddingHorizontal: 20,
    },
    itemBox: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    itemBoxTitle1: {
        fontFamily: Fonts.NexaBold,
        fontSize: 11,
        color: Colors.Black
    },
    itemBoxTitle2: {
        fontFamily: Fonts.NexaBold,
        fontSize: 13,
        color: Colors.Black,
        textAlign: 'right'
    },
    itemBoxTitle3: {
        textAlign: 'right',
        fontFamily: Fonts.NexaBook,
        fontSize: 11,
        color: Colors.Black500
    },
    rightIcon: {
        color: Colors.Black,
        fontSize: 20,
        marginLeft: 15
    },
    transferBox: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    transferBoxText1: {
        fontFamily: Fonts.NexaBook,
        fontSize: 11,
        color: Colors.Black400
    },
    transferBoxText2: {        
        fontFamily: Fonts.NexaBook,
        fontSize: 11,
        color: Colors.Black300,
        marginRight: 30,
    },
    cardBoxBack: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: Colors.PrimaryPurple500
    }
})


export default MyRewardsScreen;