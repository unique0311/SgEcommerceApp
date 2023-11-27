import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../components/BackButton';
import Colors from '../../theme/Colors';
import TextViewLabel from '../../components/TextViewLabel';
import Fonts from '../../theme/Fonts';
import Images from '../../theme/Images';
import Dropdown from '../../components/Dropdown';
import DatePicker from '../../components/DatePicker';
import {countries, nationalities} from '../../constants';
import ActiveModal from '../../components/Modal/ActiveModal';
import NotificationModal from '../../components/Modal/NotificationModal';

const EditProfileScreen = ({ navigation }) => {
    const [dateState, setDateState] = useState(false);
    const [dateText, setDateText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [notiModal, setNotiModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: 'JessicaJones@gmail.com',
        phoneNumber: ''
    })

    //dropdown
    const itemCountryClick = (selectedItem, index) => {
        console.log('props back:  ', selectedItem, index);
    };
    const itemNationalClick = (selectedItem, index) => {
        console.log('props back:  ', selectedItem, index);
    };
    //dropdown end

    return (
        <>
        <View style={styles.container}>
            <View style={styles.topBox}>
                <View style={styles.backPanel}>
                    <BackButton 
                        type="white" 
                        rightIcon1="more" 
                        onPress={() => {navigation.goBack()}} 
                        onPressIcon1={() => {setShowModal(true)}} 
                    />
                </View>
                <View style={styles.profilePanel}>
                    <View style={styles.profileImgBox}>
                        <View><Image style={{ width: 80, height: 80 }} source={Images.user_img} /></View>
                        <View><Image style={styles.editIconStyle} source={Images.edit_icon} /></View>
                    </View>
                    <Text style={styles.profileName}>Jessica Jones</Text>
                    <View style={{ marginTop: 15 }}><TextViewLabel topLabel="First Name" placeholder="Input First Name" value={formData.firstName} onChangeText={(value) => {setFormData({ ...formData, firstName: value })}} editable={true} /></View>
                    <View style={{ marginTop: 10 }}><TextViewLabel topLabel="Last Name" placeholder="Input Last Name" value={formData.lastName} onChangeText={(value) => {setFormData({ ...formData, lastName: value })}} editable={true} /></View>
                    <View style={{ marginTop: 10 }}><TextViewLabel topLabel="E-mail Address" placeholder="Input Email Address" value={formData.email} editable={false} /></View>
                    <View style={{ marginTop: 10 }}><TextViewLabel topLabel="Phone Number" placeholder="Input Phone Number" value={formData.phoneNumber} onChangeText={(value) => {setFormData({ ...formData, phoneNumber: value })}} editable={true} /></View>
                    <View style={{ marginTop: 10 }}>
                        <Dropdown
                            topLabel="Country"
                            defaultText="Countries"
                            data={countries}
                            itemSelected={(selectedItem, index) =>
                                itemCountryClick(selectedItem, index)
                            }
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextViewLabel
                            topLabel="Date of Birth"
                            value={dateText}
                            placeholder="Date of Birth"
                            onPressIn={() => { setDateState(true); }}
                            editable={true}
                        />
                        <View>
                            <DatePicker
                                opened={dateState}
                                onConfirm={(text) => { setDateText(text); setDateState(false); }}
                                onClose={() => { setDateState(false); }}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Dropdown
                            topLabel="Nationlity"
                            defaultText="Nationlity"
                            data={nationalities}
                            itemSelected={(selectedItem, index) =>
                                itemNationalClick(selectedItem, index)
                            }
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.bottomBox} onPress={() => {navigation.push('ChangePassword')}}>
                <Image style={styles.passwordIconStyle} source={Images.password_icon} />
                <Text style={styles.changePasswordText}>Change Password</Text>
            </TouchableOpacity>
        </View>
        <ActiveModal 
                title="Add to" 
                btnLabel1="Active Shopping List" 
                state={showModal} 
                toggleModal={(value) => {setShowModal(value)}} 
                onDeactive={() => {setNotiModal(true); setShowModal(false);}}
            />
        <NotificationModal 
            title="Deactive Account" 
            subTitle={`By deactivating your account${'\n'}you will loose access to all your date${'\n'}Are you sure you want to deactive?`}
            btnLabel="Deactive"
            state={notiModal}
            toggleModal={(state) => {setNotiModal(state)}} 
            onConfirmClick={() => {}}
        />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    topBox: {
        flexDirection: 'column'
    },
    backPanel: {
        backgroundColor: Colors.PrimaryPurple500,
        paddingHorizontal: 20,
        paddingTop: 20,
        height: 90,
    },
    profilePanel: {
        paddingHorizontal: 20,
        marginTop: -50
    },
    profileImgBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'
    },
    profileName: {
        marginTop: 15,
        flexDirection: 'row',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black500
    },
    editIconStyle: {
        width: 30, 
        height: 30, 
        position: 'absolute', 
        bottom: 0, 
        right: 0
    },
    bottomBox: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    passwordIconStyle: {
        width: 30,
        height: 30
    },
    changePasswordText: {
        color: Colors.Black500,
        fontFamily: Fonts.NexaBold,
        fontSize: 13,
        marginLeft: 10
    }
})

export default EditProfileScreen;