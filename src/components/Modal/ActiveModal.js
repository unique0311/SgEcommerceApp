import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../theme/Colors";
import Fonts from "../../theme/Fonts";
import Button from "../Button";
import BackButton from "../BackButton";

const ActiveModal = ({ title, btnLabel1, state, toggleModal, onDeactive }) => {
  const onPressBtn = () => {
    console.log('DeactiveBtn clicked');
    // toggleModal(!state);
    onDeactive();
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
                <View style={{ position: 'absolute', top: -5, right: 5 }}><BackButton rightIcon1="close_dark" onPressIcon1={() => onCloseBtn()} /></View>
            </View>
          
          <View style={{ flexDirection: 'column', paddingTop: 20 }}>
            <View style={{ marginTop: 10 }}>
                <Button 
                    title="Deactive" 
                    color={Colors.PrimaryPurple500} 
                    backColor={Colors.White} 
                    style={{ borderRadius: 50, borderColor: Colors.PrimaryPurple500, borderWidth: 1 }}  
                    onPress={() => onPressBtn()} 
                    disabled={false} 
                    font={Fonts.NexaBold} 
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button 
                    title="Done" 
                    color={Colors.WhiteButton} 
                    backColor={Colors.PrimaryPurple500} 
                    style={{ borderRadius: 50 }}  
                    onPress={() => onCloseBtn()} 
                    disabled={false} 
                    font={Fonts.NexaBold} 
                />
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
    }
})

export default ActiveModal;