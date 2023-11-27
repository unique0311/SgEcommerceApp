import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AcceptButton from '../../components/AcceptButton';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Dot from '../../components/Dot';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

const PrivacyPolicyScreen = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [nextState, setNextState] = useState(true);
    const onAcceptClick = (selected) => {
        console.log('Accept Clicked!');
        setChecked(selected);
        setNextState(!nextState);
    }
    const onNextClick = () => {
        console.log('Next Button Clicked');
        //navigate to the SignUp
        navigation.push('SignUpEmail', {
            state: true
        })
    }
    const onBackClick = () => {
        console.log('Back button clicked');
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <View style={{ backgroundColor: '#2b266d', flex: 1 }}>
                    <View style={styles.topBoxTitlePanel}>
                        <BackButton rightIcon1="close_white" onPressIcon1={() => onBackClick()} />
                        <Text style={styles.termsText}>Privacy Policy</Text>
                    </View>
                    <View style={styles.termsContentBox}>
                        <ScrollView>
                            <Text style={styles.termsContentBoxText}>
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                            </Text>
                        </ScrollView>
                    </View>
                </View>
                
            </View>
            <View style={styles.bottomBox}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}><Dot active={true} /></View>
                    <View><Dot active={false} /></View>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <View style={{ flex: 1, paddingRight: 5 }}><AcceptButton value={checked} title="Accept" color={Colors.WhiteButton} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50 }}  onPress={(selected) => onAcceptClick(selected)} font={Fonts.NexaBold} /></View>
                    <View style={{ flex: 1, paddingLeft: 5 }}><Button title="Next" color={Colors.White} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50 }}  onPress={() => onNextClick()} disabled={nextState} font={Fonts.NexaBold} /></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    topBox: {
        flex: 6,
        flexDirection: 'column',
    },
    topBoxTitlePanel: {
        padding: 20,
        flex: 1,
    },
    termsText: {
        color: Colors.White,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
    },
    termsContentBox: {
        backgroundColor: Colors.White,
        padding: 20,
        flex: 8,
    },
    termsContentBoxText: {
        color: '#535353',
        fontSize: 11,
        lineHeight: 15,
        fontFamily: Fonts.NexaBook,
    },
    bottomBox: {
        flex: 1,
        flexDirection: 'column',
    },
})

export default PrivacyPolicyScreen;