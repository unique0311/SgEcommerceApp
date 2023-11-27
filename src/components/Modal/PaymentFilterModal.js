import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../theme/Colors";
import Fonts from "../../theme/Fonts";
import Button from "../Button";
import BackButton from "../BackButton";
import DatePicker from "../DatePicker";
import TextView from "../TextView";

const PaymentFilterModal = ({ state, toggleModal }) => {
    const [customShow, setCustomShow] = useState(false);
    const [formData, setFormData] = useState({
        fromDateText: '',
        toDateText: '',
        fromDateState: false,
        toDateState: false
    })
  const onPressBtn = () => {
    console.log('Button clicked');
    // toggleModal(!state);
  }
  const onCloseBtn = () => {
    console.log('Close Icon clicked');
    toggleModal(!state);
  }
  const onPressCustomBtn = () => {
    setCustomShow(!customShow);
  }
  const onPressClearBtn = () => {
    setCustomShow(false);
  }
  return (
    <View>
      <Modal isVisible={state} style={{ margin: 0 }}>
        <View style={[styles.containerBox]}>
            <View style={{ position: 'relative' }}>
                <Text style={styles.title}>Show Results for</Text>
                <View style={{ position: 'absolute', top: -5, right: 5 }}><BackButton rightIcon1="close_dark" onPressIcon1={() => onCloseBtn()} /></View>
            </View>
          
            <View style={{ flexDirection: 'row', paddingTop: 20, flex: 1 }}>
                <View style={{ marginRight: 5, flex: 1 }}>
                    <Button title="This week" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 10, borderWidth: 1, borderColor: Colors.PrimaryPurpl1500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} />
                </View>
                <View style={{ marginLeft: 5, flex: 1 }}>
                    <Button title="This month" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 10, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10, flex: 1 }}>
                <View style={{ marginRight: 5, flex: 1 }}>
                    <Button title="Last week" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 10, borderWidth: 1, borderColor: Colors.PrimaryPurpl1500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} />
                </View>
                <View style={{ marginLeft: 5, flex: 1 }}>
                    <Button title="Last" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 10, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10, flex: 1 }}>
                <View style={{ marginRight: 5, flex: 1 }}>
                    <Button title="All results" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 10, borderWidth: 1, borderColor: Colors.PrimaryPurpl1500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} />
                </View>
                <View style={{ marginLeft: 5, flex: 1 }}>
                    <Button title="Custom" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 10, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressCustomBtn()} disabled={false} font={Fonts.NexaBook} />
                </View>
            </View>
            {/* custom filter */}
            {customShow && <View>
                <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
                    <View style={{ flex: 1, marginRight: 5, flexDirection: 'column' }}>
                        <Text style={styles.fromDate}>From</Text>
                        <View style={{ marginTop: 10 }}>
                            <TextView
                                value={formData.fromDateText}
                                placeholder="From Date"
                                onPressIn={() => { setFormData({ ...formData, fromDateState: true }) }}
                                editable={false}
                            />
                            <View>
                                <DatePicker
                                    opened={formData.fromDateState}
                                    onConfirm={text => { setFormData({ ...formData, fromDateText: text, fromDateState: false }) }}
                                    onClose={() => { setFormData({ ...formData, fromDateState: false }) }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginRight: 5, flexDirection: 'column' }}>
                        <Text style={styles.fromDate}>To</Text>
                        <View style={{ marginTop: 10 }}>
                            <TextView
                                value={formData.toDateText}
                                placeholder="To Date"
                                onPressIn={() => { setFormData({ ...formData, toDateState: true }) }}
                                editable={false}
                            />
                            <View>
                                <DatePicker
                                    opened={formData.toDateState}
                                    onConfirm={text => { setFormData({ ...formData, toDateText: text, toDateState: false }) }}
                                    onClose={() => { setFormData({ ...formData, toDateState: false }) }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, flex: 1 }}>
                    <View style={{ marginRight: 5, flex: 1 }}>
                        <Button title="Clear" color={Colors.PrimaryPurple500} backColor={Colors.White} style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurpl1500 }}  onPress={() => onPressClearBtn()} disabled={false} font={Fonts.NexaBook} />
                    </View>
                    <View style={{ marginLeft: 5, flex: 1 }}>
                        <Button title="Save" color={Colors.White} backColor={Colors.PrimaryPurple500} style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.PrimaryPurple500 }}  onPress={() => onPressBtn()} disabled={false} font={Fonts.NexaBook} />
                    </View>
                </View>
            </View>}
            {/* custom filter end */}
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
    fromDate: {
        marginLeft: 10,
        fontSize: 11,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black500
    }
})

export default PaymentFilterModal;