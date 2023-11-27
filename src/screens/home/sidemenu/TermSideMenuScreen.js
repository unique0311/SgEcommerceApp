import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BackButton from '../../../components/BackButton';
import Fonts from '../../../theme/Fonts';
import Colors from '../../../theme/Colors';

const TermSideMenuScreen = ({ navigation }) => {
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
                        <Text style={styles.termsText}>Terms &amp; Conditions</Text>
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
                            </Text>
                        </ScrollView>
                    </View>
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
        flex: 1,
        flexDirection: 'column',
    },
    topBoxTitlePanel: {
        padding: 20,
        flex: 1,
    },
    termsText: {
        paddingTop: 10,
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
    // bottomBox: {
    //     flex: 1,
    //     flexDirection: 'column',
    // },
})

export default TermSideMenuScreen;