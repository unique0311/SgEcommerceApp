import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Images from '../../../theme/Images';
import BackButton from '../../../components/BackButton';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import ConfirmModal from '../../../components/Modal/ConfirmModal';
// import NotificationModal from '../../../components/Modal/NotificationModal';
{/* <NotificationModal state={showModal} title="Survey Notification" subTitle={`Hey, your survery notifications are turned off ${'\n'} Would you like turn it on?`} btnLabel="View" toggleModal={(value) => toggleModal(value)} /> */}
{/* <ConfirmModal title="Logout" subTitle="Are you sure you want to logout?" btnLabel1="Logout" btnLabel2="Cancel" state={showModal} toggleModal={(value) => toggleModal(value)} /> */}

const width = Dimensions.get('window').width;

const SideMenuScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = (value) => {
        setShowModal(value);
    }
    const onBackClick = () => {
        console.log("back button clicked");
        navigation.goBack();
    }
    const onOfferClick = () => {
        navigation.push('Offers');
    }
    const onLoyaltyClick = () => {
        navigation.push('LoyaltyScheme');
    }
    const onSurveyClick = () => {
        navigation.push('SurveysList');
    }
    const onFlyersClick = () => {
        navigation.push('Flayers');
    }
    const onSettingsClick = () => {
        navigation.push('Settings');
    }
    const onAboutClick = () => {
        navigation.push('AboutApp');
    }
    const onContactClick = () => {
        navigation.push('ContactUs');
    }
    const onSupportClick = () => {
        navigation.push('Support');
    }
    const onFAQClick = () => {
        navigation.push('FAQ');
    }
    const onTermsClick = () => {
        navigation.push('TermSideMenu');
    }
    const onPrivacyClick = () => {
        navigation.push('PrivacySideMenu');
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: Colors.White }}>
            <View style={styles.header}>
                <Image style={{position: 'absolute', top: -60, width: width}} source={Images.sidemenu_bg} />
                <BackButton type="white" onPress={() => onBackClick()} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 1 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.headerTitle}>Jessica Jones</Text>
                        <Text style={styles.headerSubTitle}>jessica.jones@gmail.com</Text>
                    </View>
                    <View>
                        <Image style={{ width: 50, height: 50 }} source={Images.user_img} />
                    </View>
                </View>
                <View style={styles.listBox}>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onOfferClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideOffer_icon} />
                        <Text style={styles.listBoxItemText}>Offers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onLoyaltyClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideLoyalty_icon} />
                        <Text style={styles.listBoxItemText}>Loyalty</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onSurveyClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideSurvey_icon} />
                        <Text style={styles.listBoxItemText}>Surveys</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onFlyersClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideOffer_icon} />
                        <Text style={styles.listBoxItemText}>Flyers</Text>
                    </TouchableOpacity>
                    <View style={styles.listBoxSection}></View>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onSettingsClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideSetting_icon} />
                        <Text style={styles.listBoxItemText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onAboutClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideAbout_icon} />
                        <Text style={styles.listBoxItemText}>About the app</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onContactClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideContact_icon} />
                        <Text style={styles.listBoxItemText}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onSupportClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideSupport_icon} />
                        <Text style={styles.listBoxItemText}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listBoxItem} onPress={() => onFAQClick()}>
                        <Image style={styles.listBoxItemImg} source={Images.sideFAQ_icon} />
                        <Text style={styles.listBoxItemText}>FAQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomBox}>
                <View>
                    <TouchableOpacity onPress={() => onTermsClick()}><Text style={[styles.termsText, {marginBottom: 20}]}>Terms &amp; Conditions</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onPrivacyClick()}><Text style={[styles.termsText, {marginBottom: 25}]}>Privacy Policy</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.listBoxItem} onPress={() => toggleModal(true)}>
                    <Image style={styles.listBoxItemImg} source={Images.sideLogout_icon} />
                    <Text style={styles.listBoxItemText}>Logout</Text>
                </TouchableOpacity>
                <ConfirmModal title="Logout" subTitle="Are you sure you want to logout?" btnLabel1="Logout" btnLabel2="Cancel" state={showModal} toggleModal={(value) => toggleModal(value)} />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        position: 'relative',
        padding: 20,
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
    listBox: {
        paddingTop: 50,
        flexDirection: 'column',
    },
    listBoxSection: {
        height: 1,
        backgroundColor: Colors.PrimaryPurple300,
        marginBottom: 10,
    },
    listBoxItem: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    listBoxItemImg: {
        width: 22,
        height: 22,
        marginRight: 10,
    },
    listBoxItemText: {
        fontSize: 13,
        color: Colors.Black500,
        fontFamily: Fonts.NexaHeavy,
    },
    bottomBox: {
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    termsText: {
        fontSize: 13,
        color: Colors.Black500,
        fontFamily: Fonts.NexaHeavy,
    },
})

export default SideMenuScreen;