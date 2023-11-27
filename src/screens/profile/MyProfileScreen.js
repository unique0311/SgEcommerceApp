import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../theme/Colors';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Entypo';
import BottomBar from '../../components/Home/BottomBar';

const width = Dimensions.get('window').width;

const MyProfileScreen = ({ navigation }) => {
    const onEditProfileClick = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{position: 'absolute', top: -60, width: width, height: 240}} source={Images.sidemenu_bg} />
                <Text style={styles.profileText}>My Profile</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 1 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.headerTitle}>Jessica Jones</Text>
                        <Text style={styles.headerSubTitle}>jessica.jones@gmail.com</Text>
                    </View>
                    <View>
                        <Image style={{ width: 50, height: 50 }} source={Images.user_img} />
                    </View>
                </View>
                <View style={{ width: 100 }}>
                    <Button title="Edit Profile" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 8, fontSize: 12, padding: 2 }}  onPress={() => onEditProfileClick()} disabled={false} font={Fonts.NexaBold} />
                </View>
            </View>
            <View style={styles.informationBox}>
                <Text style={styles.informationText}>My Information</Text>
                <TouchableOpacity style={styles.informationPair} onPress={() => {navigation.push('EWallet')}}>
                    <View style={styles.informationPairLeft}>
                        <Image style={styles.informationPairLeftImgStyle} source={Images.wallet_icon} />
                        <Text style={styles.informationPairLeftTextStyle}>E-Wallet</Text>
                    </View>
                    <View style={styles.informationPairRight}>
                        <Icon name='chevron-right' style={{ fontSize: 18, color: Colors.Black }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.informationPair}>
                    <View style={styles.informationPairLeft}>
                        <Image style={styles.informationPairLeftImgStyle} source={Images.family_icon} />
                        <Text style={styles.informationPairLeftTextStyle}>Family Profile</Text>
                    </View>
                    <View style={styles.informationPairRight}>
                        <Icon name='chevron-right' style={{ fontSize: 18, color: Colors.Black }} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.informationBox}>
                <Text style={styles.informationText}>Other</Text>
                <TouchableOpacity style={styles.informationPair} onPress={() => {navigation.push('PaymentHistory')}}>
                    <View style={styles.informationPairLeft}>
                        <Image style={styles.informationPairLeftImgStyle} source={Images.wallet_icon} />
                        <Text style={styles.informationPairLeftTextStyle}>Payments History</Text>
                    </View>
                    <View style={styles.informationPairRight}>
                        <Icon name='chevron-right' style={{ fontSize: 18, color: Colors.Black }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.informationPair}>
                    <View style={styles.informationPairLeft}>
                        <Image style={styles.informationPairLeftImgStyle} source={Images.receipts_icon} />
                        <Text style={styles.informationPairLeftTextStyle}>Receipts</Text>
                    </View>
                    <View style={styles.informationPairRight}>
                        <Icon name='chevron-right' style={{ fontSize: 18, color: Colors.Black }} />
                    </View>
                </TouchableOpacity>
            </View>

            <BottomBar 
                home={false} 
                shopping={false} 
                favourite={false} 
                profile={true} 
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
        backgroundColor: Colors.White
    },
    header: {
        padding: 20,
        height: 180,
        flexDirection: 'column'
    },
    profileText: {
        color: Colors.White,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
    },
    headerTitle: {
        fontSize: 13,
        fontFamily: Fonts.NexaBold,
        color: Colors.White,
    },
    headerSubTitle: {
        fontSize: 11,
        fontFamily: Fonts.NexaBook,
        color: Colors.White,
    },
    informationBox: {
        padding: 20,
        flexDirection: 'column'
    },
    informationText: {
        fontSize: 12,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black,
    },
    informationPair: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Colors.Black200,
        borderBottomWidth: 1
    },
    informationPairLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    informationPairLeftImgStyle: {
        marginLeft: -20,
        width: 45,
        height: 43
    },
    informationPairLeftTextStyle: {
        marginLeft: 10,
        fontFamily: Fonts.NexaBook,
        fontSize: 12
    },
    informationPairRight: {

    }
})

export default MyProfileScreen;