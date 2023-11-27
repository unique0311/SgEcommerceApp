import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import Images from '../../../theme/Images';

const PeopleItem = ({ imageName, title, comment, phone }) => {
    var imgSrc = null;
    switch(imageName) {
        case 'user1': imgSrc = Images.user1_img; break;
        default: imgSrc = Images.user1_img; break;
    }
    return (
        <View style={styles.container}>
            <Image style={{ width: 75, height: 75 }} source={imgSrc} />
            <View style={{ marginLeft: 15 }}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.comment}>{comment}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 5 }}>
                    <Image style={{ borderRadius: 50, width: 22, height: 22 }} source={Images.sideContact_icon} />
                    <Text style={styles.phoneNum}>{phone}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        borderRadius: 15,
        borderColor: Colors.Black200,
        borderWidth: 1,
        // shadowColor: '#52006A',  
        // elevation: 2,   
    },
    name: {
        marginTop: 5,
        color: Colors.Black400,
        fontSize: 14,
        fontFamily: Fonts.NexaHeavy,
    },
    comment: {
        marginTop: 5,
        color: Colors.Black400,
        fontSize: 14,
        fontFamily: Fonts.NexaBook,
    },
    phoneNum: {
        marginLeft: 5,
        color: Colors.Black300,
        fontSize: 12,
        fontFamily: Fonts.NexaBook,
    },
})

export default PeopleItem;