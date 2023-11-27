import React, {useEffect} from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Images from '../theme/Images';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(
            () => {navigation.push('Welcome')}
        ,3000)
    }, []);
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <BackgroundImage name="main_bg" />
            <Image style={styles.logoImg} source={Images.main_logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    logoImg: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: [
            { translateX: -71 },
            { translateY: -62.5 },
        ],
    },
})

export default SplashScreen;