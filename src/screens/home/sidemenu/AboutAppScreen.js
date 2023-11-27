import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import BackButton from '../../../components/BackButton';
import Images from '../../../theme/Images';
import Fonts from '../../../theme/Fonts';
import Colors from '../../../theme/Colors';

const AboutAppScreen = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [nextState, setNextState] = useState(true);
    const onAcceptClick = (selected) => {
        console.log('Accept Clicked!');
        setChecked(selected);
        setNextState(!nextState);
    }
    const onNextClick = () => {
        console.log('Next Button Clicked');
        //navigate to the Privacy Policy screen
        navigation.push('PrivacyPolicy');
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
                        <BackButton type="white" onPress={() => onBackClick()} />
                        <Text style={styles.termsText}>About the App</Text>
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
                    <Text style={styles.versionText}>Version 1.1</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Images.footer_logo} />
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
        paddingTop: 5,
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
    versionText: {
        fontSize: 10,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black400,
    },
})

export default AboutAppScreen;