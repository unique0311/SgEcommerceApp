import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../../theme/Colors';
import BackButton from '../../../../components/BackButton';
import Fonts from '../../../../theme/Fonts';
import ProgressBar from '../../../../components/SideMenu/Survey/ProgressBar';
import CheckBox from '../../../../components/CheckBox';
import Button from '../../../../components/Button';

const SurveyProgressScreen = ({ navigation }) => {
    const [progressWidth, setProgressWidth] = useState('10%');
    const [question1CheckBox, setQuestion1CheckBox] = useState({
        state1: false,
        state2: false,
        state3: false
    })
    const [questionShow, setQuestionShow] = useState("question_1")
    const onContinueClick = () => {
        const wordArray = questionShow.split('_');
        if(parseInt(wordArray[1]) != 10) {
            setProgressWidth((parseInt(wordArray[1])+1)*10+'%');
            setQuestionShow(wordArray[0]+'_'+(parseInt(wordArray[1])+1));
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <BackButton type="dark" onPress={() => {navigation.goBack()}} />
                <Text style={styles.headerTitle}>Survey Name</Text>
                <View style={{ marginTop: 10 }}><ProgressBar width={progressWidth} /></View>
                <View style={styles.questionBox}>
                    <Text style={styles.questionText}>Question {parseInt(questionShow.split('_')[1])}/10</Text>
                    <Text style={styles.timeText}>5 min</Text>
                </View>

                {/* Questionnaire 1 */}
                {questionShow === 'question_1' && <View style={styles.questionNaire}>
                    <Text style={styles.questionNaireTitle}>
                        How do I Lourem ipsum?
                    </Text>
                    <View style={styles.question1CheckBoxSection}>
                        <CheckBox value={question1CheckBox.state1} onChange={(state) => {setQuestion1CheckBox({ ...question1CheckBox, state1:  state })}} />
                        <Text style={styles.question1CheckBoxText}>Lorem ipsum is the answer</Text>
                    </View>
                    <View style={styles.question1CheckBoxSection}>
                        <CheckBox value={question1CheckBox.state2} onChange={(state) => {setQuestion1CheckBox({ ...question1CheckBox, state2:  state })}} />
                        <Text style={styles.question1CheckBoxText}>Lorem ipsum is the answer</Text>
                    </View>
                    <View style={styles.question1CheckBoxSection}>
                        <CheckBox value={question1CheckBox.state3} onChange={(state) => {setQuestion1CheckBox({ ...question1CheckBox, state3:  state })}} />
                        <Text style={styles.question1CheckBoxText}>Lorem ipsum is the answer</Text>
                    </View>
                </View>}
                {/* Questionnaire 1 end */}
                {/* Questionnaire 2 */}
                {questionShow === 'question_2' && <View style={styles.questionNaire}>
                    <Text style={styles.questionNaireTitle}>
                        How do I Lourem ipsum?
                    </Text>
                    <View style={styles.question1CheckBoxSection}>
                        <Text style={styles.questionNaireTitle}>
                            How do I Lourem ipsum?
                        </Text>
                    </View>
                </View>}
                {/* Questionnaire 2 end */}
            </View>
            <View style={styles.bottomBox}>
                <Button title="Continue" color={Colors.White} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50, padding: 2 }}  onPress={() => onContinueClick()} disabled={false} font={Fonts.NexaBold} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    headerTitle: {
        marginTop: 10,
        fontSize: 20,
        color: Colors.PrimaryPurple500,
        fontFamily:  Fonts.NexaBlack,
    },
    questionBox: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    questionText: {
        color: Colors.PrimaryPurple400,
        fontSize: 10,
        fontFamily: Fonts.NexaBook,
    },
    timeText: {
        color: Colors.PrimaryPurple400,
        fontSize: 10,
        fontFamily: Fonts.NexaBook,
    },
    questionNaire: {
        marginTop: 30,
        borderColor: Colors.Black200,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    questionNaireTitle: {
        color: Colors.Black400,
        fontSize: 13,
        fontFamily: Fonts.NexaBold,
    },
    question1CheckBoxSection: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    question1CheckBoxText: {
        marginLeft: 10,
        color: Colors.Black400,
        fontSize: 12,
        fontFamily: Fonts.NexaBook,
    },
})

export default SurveyProgressScreen;