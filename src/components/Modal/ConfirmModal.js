import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../theme/Colors";
import Fonts from "../../theme/Fonts";
import Button from "../Button";

const ConfirmModal = ({ title, subTitle, btnLabel1, btnLabel2, state, toggleModal }) => {
  const onCancelClick = () => {
    console.log('Cancel clicked');
    toggleModal(!state);
  }
  const onLogoutClick = () => {
    console.log('Logout clicked');
    toggleModal(!state);
  }
  return (
    <View>
      <Modal isVisible={state}>
        <View style={[styles.backdrop, styles.containerBox]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
            <View style={{ marginRight: 5, width: 120 }}><Button title={btnLabel2} color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onCancelClick()} disabled={false} font={Fonts.NexaBold} /></View>
            <View style={{ marginLeft: 5, width: 120 }}><Button title={btnLabel1} color={Colors.White} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50 }}  onPress={() => onLogoutClick()} disabled={false} font={Fonts.NexaBold} /></View>
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
        // position: 'absolute',
        // top: '35%',
        // height: 150,
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

export default ConfirmModal;