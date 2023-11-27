import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Images from '../../theme/Images';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SurveyItem = ({ imageName, text, comment }) => {
    var imageSrc = null;
    switch(imageName) {
        case 'survey': imageSrc = Images.survey_img; break;
        default: break;
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imgStyle} source={imageSrc} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.title}>{text}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={styles.comment}>{comment}</Text>
                    <Icon style={styles.currency} name='currency-eur' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 2,
        borderRadius: 5,
        backgroundColor: Colors.White,
        shadowColor: '#52006A',  
        elevation: 2,   
    },
    imgStyle: {
        width: 54,
        height: 54,
    },
    title: {
        marginLeft: 10,
        marginRight: 20,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBold,
        fontSize: 12,
    },
    comment: {
        marginLeft: 10,
        color: Colors.PrimaryPurple400,
        fontFamily: Fonts.NexaBold,
        fontSize: 12,
    },
    currency: {
        paddingLeft: 2,
        paddingVertical: 2,
        color: Colors.PrimaryPurple400,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        fontSize: 9,
        fontFamily: Fonts.NexaBold,
        fontSize: 12,
    },
})

export default SurveyItem;