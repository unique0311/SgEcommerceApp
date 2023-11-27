import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Button from '../../components/Button';
import BottomBar from '../../components/Home/BottomBar';

const MyShoppingExperienceScreen = ({ navigation }) => {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.topBox}>
                <View>
                    <View style={styles.headerBox}>
                        <Text style={styles.title}>My Shopping Experience</Text>
                    </View>
                    <TouchableOpacity style={styles.panel}>
                        <Text style={styles.panelText}>Manage my Shopping Templates</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.panelNum}>(20)</Text>
                            <EntypoIcon style={styles.rightIcon} name='chevron-right' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Button 
                        title="My Shopping List" 
                        color={Colors.White} 
                        backColor={Colors.PrimaryPurple500} 
                        style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  
                        onPress={() => {}} 
                        disabled={false} 
                        font={Fonts.NexaBold} 
                    />
                </View>
                
            </View>
            <View style={styles.bottomBox}>

            </View>
        </View>
        <BottomBar 
            home={false} 
            shopping={true} 
            favourite={false} 
            profile={false} 
            onHomeClick={() => {navigation.push('Home')}} 
            onShoppingClick={() => {navigation.push('MyShoppingExperience')}}
            onProfileClick={() => {navigation.push('MyProfile')}} 
            onRewardsClick={() => {navigation.push('MyRewards')}} 
        />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White
    },
    topBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bottomBox: {
        flex: 1
    },
    headerBox: {
        height: 100,
        backgroundColor: Colors.PrimaryPurple500,
        padding: 20
    },
    title: {
        marginTop: 30,
        fontSize: 20,
        color: Colors.White,
        fontFamily: Fonts.NexaBlack
    },
    panel: {
        // marginTop: 30,
        marginTop: 20,
        backgroundColor: Colors.Black100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    panelText: {
        fontSize: 12,
        paddingVertical: 10,
        color: Colors.PrimaryPurple400,
        fontFamily: Fonts.NexaBold,
    },
    panelNum: {
        fontSize: 12,
        paddingVertical: 10,
        color: Colors.PrimaryPurple400,
        fontFamily: Fonts.NexaBook,
    },
    rightIcon: {
        fontSize: 16,
        color: Colors.Black,
        marginLeft: 5,
    }
})

export default MyShoppingExperienceScreen;