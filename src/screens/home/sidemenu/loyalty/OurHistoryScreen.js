import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import BackButton from '../../../../components/BackButton';
import Fonts from '../../../../theme/Fonts';
import Colors from '../../../../theme/Colors';
import Images from '../../../../theme/Images';

const width = Dimensions.get('window').width;

const OurHistoryScreen = ({ navigation }) => {
    const onBackClick = () => {
        console.log('Back button clicked');
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <View style={{ backgroundColor: Colors.White, flex: 1 }}>
                    <View style={styles.topBoxTitlePanel}>
                        <BackButton type="dark" onPress={() => onBackClick()} />
                        <Text style={styles.termsText}>History</Text>
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
                            </Text>
                        </ScrollView>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
                            <Image style={styles.programImg} source={Images.programs1_img} />
                            <Image style={styles.programImg} source={Images.programs2_img} />
                            <Image style={styles.programImg} source={Images.programs3_img} />
                            <Image style={styles.programImg} source={Images.programs4_img} />
                            <Image style={styles.programImg} source={Images.programs1_img} />
                            <Image style={styles.programImg} source={Images.programs2_img} />
                        </View>
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
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    termsText: {
        paddingTop: 10,
        color: Colors.PrimaryPurple500,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
    },
    termsContentBox: {
        backgroundColor: Colors.White,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    termsContentBoxText: {
        color: '#535353',
        fontSize: 11,
        lineHeight: 15,
        fontFamily: Fonts.NexaBook,
    },
    programImg: {
        marginRight: 10, 
        marginBottom: 10,
        width: (width - 40 - 30) / 3,
        height: (width - 40 - 30) / 3,
    },
})

export default OurHistoryScreen;