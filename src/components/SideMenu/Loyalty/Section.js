import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import Images from '../../../theme/Images';

const { width } = Dimensions.get('window');

const Section = ({ title, comment, onPress, images }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <Text style={styles.topBoxText}>{title}</Text>
                <Icon style={styles.topBoxIcon} name='chevron-right' />
            </View>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.comment}>{comment}</Text>
            </TouchableOpacity>
            {
                images && 
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
                    <Image style={styles.imageBox} source={Images.programs1_img} />
                    <Image style={styles.imageBox} source={Images.programs2_img} />
                    <Image style={styles.imageBox} source={Images.programs3_img} />
                    <Image style={styles.imageBox} source={Images.programs4_img} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    topBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topBoxText: {
        color: Colors.Black400,
        fontFamily: Fonts.NexaHeavy,
        fontSize: 15,
    },
    topBoxIcon: {
        color: Colors.Black400,
        fontFamily: Fonts.NexaHeavy,
        fontSize: 18,
    },
    comment: {
        paddingTop: 5,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBook,
        fontSize: 11,
        lineHeight: 18,
    },
    imageBox: {
        marginRight: 7,
        width: (width - 68) / 4,
        height: (width - 68) / 4,
    },
})

export default Section;