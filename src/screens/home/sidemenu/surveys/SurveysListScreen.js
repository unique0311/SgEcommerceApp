import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BackButton from '../../../../components/BackButton';
import SurveyItem from '../../../../components/Home/SurveyItem';
import Colors from '../../../../theme/Colors';
import Fonts from '../../../../theme/Fonts';

const surveyItemLists = [
    {
      imageName: 'survey',
      text: 'Survey Name',
      comment: '+6 '
    },
    {
      imageName: 'survey',
      text: 'Survey Name',
      comment: '+6 '
    },
    {
      imageName: 'survey',
      text: 'Survey Name',
      comment: '+6 '
    }
  ]

const SurveysListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackButton type="dark" onPress={() => {navigation.goBack()}} />
            <Text style={styles.title}>Surveys</Text>
            <View style={{ marginTop: 10 }}>
                {surveyItemLists.map((item, index) => (
                <View key={index} style={{ paddingTop: 2, paddingRight: 8, paddingLeft: 2, paddingBottom: 10 }}><SurveyItem imageName={item.imageName} text={item.text} comment={item.comment} /></View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: Colors.White,
    },
    title: {
        marginTop: 10,
        fontFamily: Fonts.NexaBlack,
        fontSize: 20,
        color: Colors.PrimaryPurple500,
    },
})

export default SurveysListScreen;