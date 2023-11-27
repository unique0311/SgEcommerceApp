import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../theme/Colors';

const ProgressBar = ({ width }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.content, {width: width}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Black200,
        borderRadius: 10,
    },
    content: {
        width: 50,
        height: 7,
        borderRadius: 10,
        backgroundColor: Colors.PrimaryPurple500,
    },
})

export default ProgressBar;