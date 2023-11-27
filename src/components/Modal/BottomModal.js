import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../theme/Colors";
import Fonts from "../../theme/Fonts";
import Button from "../Button";
import BackButton from "../BackButton";

const BottomModal = ({ title, btnLabel1, btnLabel2, btnLabel3, btnLabel4, btnLabel5, state, toggleModal }) => {
  const onPressBtn = () => {
    console.log('Button clicked');
    // toggleModal(!state);
  }
  const onCloseBtn = () => {
    console.log('Close Icon clicked');
    toggleModal(!state);
  }
  return (
    <View>
      <Modal isVisible={state} style={{ margin: 0 }}>
        <View style={[styles.containerBox]}>
            <View style={{ position: 'relative' }}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ position: 'absolute', top: -5, right: 5 }}><BackButton rightIcon1="close_dark" onPressIcon1={() => onCloseBtn()} /></View>
            </View>
          
          <View style={{ flexDirection: 'column', paddingTop: 20 }}>
            <View style={{ marginRight: 5 }}>
                <Button title={btnLabel1} color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 13 }}>
                <View style={{ flex: 1, marginRight: 5 }}><Button title={btnLabel2} color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} /></View>
                <View style={{ flex: 1, marginLeft: 5 }}><Button title={btnLabel3} color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} /></View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 13 }}>
                <View style={{ flex: 1, marginRight: 5 }}><Button title={btnLabel4} color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} /></View>
                <View style={{ flex: 1, marginLeft: 5 }}><Button title={btnLabel5} color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} /></View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
    },
    containerBox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.White,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black,
    },
})

export default BottomModal;