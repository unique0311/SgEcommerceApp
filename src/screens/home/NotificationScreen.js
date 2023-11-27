import React, {useState} from 'react';
import { Image, ScrollView } from 'react-native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import NotificationItem from '../../components/NotificationItem';
import NotificationModal from '../../components/Modal/NotificationModal';

const notificationItems = [
    {
        text: `1Find exclusive deals at Market name${'\n'}till the end of November benef...`,
        time: '14 min ago'
    },
    {
        text: `2Find exclusive deals at Market name${'\n'}till the end of November benef...`,
        time: '14 min ago'
    },
    {
        text: `3Find exclusive deals at Market name${'\n'}till the end of November benef...`,
        time: '14 min ago'
    },
    {
        text: `4Find exclusive deals at Market name${'\n'}till the end of November benef...`,
        time: '14 min ago'
    },
    {
        text: `5Find exclusive deals at Market name${'\n'}till the end of November benef...`,
        time: '14 min ago'
    },
]

const Notification = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState("");
    const onCloseClick = () => {
        console.log('close button clicked');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Notification</Text>
                <View><TouchableOpacity onPress={() => onCloseClick()}><Image style={{ width: 28, height: 28 }} source={Images.close_dark} /></TouchableOpacity></View>
            </View>
            <ScrollView style={{ paddingTop: 15 }}>
                <NotificationItem 
                    items={notificationItems} 
                    modalState={showModal} 
                    onPress={
                        (text, modalState) => {
                            setShowModal(modalState);
                            setModalText(text);
                        }
                    } 
                />
            </ScrollView>
            <NotificationModal 
                title="" 
                subTitle={modalText} 
                btnLabel="View Offers"
                state={showModal}
                toggleModal={(state) => {setShowModal(state)}} 
                onConfirmClick={() => {navigation.push('Offers')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 21,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500,
    },
})

export default Notification;