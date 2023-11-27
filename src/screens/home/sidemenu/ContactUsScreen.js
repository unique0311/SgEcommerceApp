import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BackgroundImage from '../../../components/BackgroundImage';
import BackButton from '../../../components/BackButton';
import Fonts from '../../../theme/Fonts';
import Colors from '../../../theme/Colors';
import ContactItem from '../../../components/SideMenu/ContactItem';

const ContactUsScreen = ({ navigation }) => {
    const onBackClick = () => {
        console.log("Back Button Clicked");
        navigation.goBack();
    }
    const onPress = (text) => {
        switch(text) {
            case 'Phone':
                break;
            case 'E-mail':
                break;
            case 'Website':
                break;
            default:
                break;
        }
        console.log(text+' clicked');
    }
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <BackgroundImage name="main_bg" />
            <View style={styles.container}>
                <BackButton type="white" onPress={() => onBackClick()} />
                <Text style={styles.contactText}>Contact Us</Text>
                <View style={{ paddingTop: 30 }}>
                    <View><ContactItem text="Phone" subText="+357 123 45689" icon="phone" onPress={(text) => onPress(text)} /></View>
                    <View><ContactItem text="E-mail Address" subText="contact@scan.com" icon="email" onPress={(text) => onPress(text)} /></View>
                    <View><ContactItem text="Website" subText="www.scan.com" icon="web" onPress={(text) => onPress(text)} /></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    contactText: {
        paddingTop: 10,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.White,
    },
})

export default ContactUsScreen;