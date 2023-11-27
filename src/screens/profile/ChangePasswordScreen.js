import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../theme/Colors';
import BackButton from '../../components/BackButton';
import Fonts from '../../theme/Fonts';
import TextView from '../../components/TextView';
import Button from '../../components/Button';

const ChangePasswordScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({
        curPassword: '',
        confirmPassword: '',
        confirmNewPassword: ''
    });
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <BackButton type="dark" onPress={() => {navigation.goBack()}} />
                <Text style={styles.title}>Change Password</Text>
                <View style={{ marginTop: 10 }}>
                    <TextView 
                        placeholder="Current Password" 
                        value={formData.curPassword} 
                        onChangeText={(value) => {setFormData({ ...formData, curPassword: value })}} 
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.newPassword}>New Password</Text>
                    <View style={{ marginTop: 15 }}>
                        <TextView 
                            placeholder="Confirm Password" 
                            value={formData.confirmPassword} 
                            onChangeText={(value) => {setFormData({ ...formData, confirmPassword: value })}} 
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextView 
                            placeholder="Confirm Password" 
                            value={formData.confirmNewPassword} 
                            onChangeText={(value) => {setFormData({ ...formData, confirmNewPassword: value })}} 
                        />
                    </View>
                    <View style={{ padding: 20 }}>
                        <Text style={styles.noticeText}>
                            At least 8 characters.{'\n'}
                            Use both uppercase and lowercase letters.{'\n'}
                            A mixture of letters and numbers.{'\n'}
                            inclusion of at least one special character[@#?..]
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomBox}>
                <Button 
                    title="Update Password" 
                    color={Colors.WhiteButton} 
                    backColor={Colors.PrimaryPurple500} 
                    style={{ borderRadius: 50 }}  
                    onPress={() => {}} 
                    disabled={false} 
                    font={Fonts.NexaBold} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500
    },
    newPassword: {
        fontFamily: Fonts.NexaBold,
        color: Colors.Black500,
        fontSize: 14
    },
    noticeText: {
        fontFamily: Fonts.NexaBook,
        fontSize: 11,
        color: Colors.Black400
    }
})

export default ChangePasswordScreen;