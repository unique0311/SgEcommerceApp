import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../theme/Colors";
import Fonts from "../../theme/Fonts";
import BackButton from "../BackButton";
import Button from "../Button";

const NotificationModal = ({ title, subTitle, btnLabel, state, toggleModal, onConfirmClick }) => {
  const onCloseClick = () => {
    console.log('Cancel clicked');
    toggleModal(!state)
  }
  const onViewClick = () => {
    console.log('View clicked');
    toggleModal(!state);
    onConfirmClick();
  }
  return (
    <View>
      <Modal isVisible={state}>
        <View style={[styles.backdrop, styles.containerBox]}>
          <View style={{ position: 'relative' }}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ position: 'absolute', top: -5, right: 0 }}><BackButton rightIcon1="close_dark" onPressIcon1={() => onCloseClick()} /></View>
          </View>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
            <View style={{ flex: 1 }}><Button title={btnLabel} color={Colors.White} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50 }}  onPress={() => onViewClick()} disabled={false} font={Fonts.NexaBold} /></View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    backdrop: {
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // opacity: 0,
        // backgroundColor: '#f3f3f3',
    },
    content: {
        justifyContent: 'center',
    },
    containerBox: {
        // flex: 1,
        // position: 'absolute',
        // top: '35%',
        // height: 170,
        // zIndex: 2,
        // opacity: 1,
        backgroundColor: Colors.White,
        borderRadius: 15,
        padding: 20,
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black,
        textAlign: 'center',
    },
    subTitle: {
        paddingTop: 20,
        fontSize: 13,
        fontFamily: Fonts.NexaBook,
        color: Colors.Black,
        textAlign: 'center',
    },
})

export default NotificationModal;