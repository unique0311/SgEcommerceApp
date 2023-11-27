import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const Accordion = ({ title, data }) => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, []);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    }

    return (
       <View style={{ borderBottomColor: Colors.Black200, borderBottomWidth: 1 }}>
            <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
                <Text style={[styles.title]}>{title}</Text>
                <Icon name={expanded ? 'horizontal-rule' : 'add'} size={30} color={Colors.Black400} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                expanded &&
                <View style={styles.child}>
                    <Text style={styles.childTextStyle}>{data}</Text>    
                </View>
            }
            
       </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 13,
        color: Colors.Black,
        fontFamily: Fonts.NexaBold,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        alignItems:'center',
        backgroundColor: Colors.White,
    },
    parentHr:{
        height:1,
        color: Colors.White,
        width:'100%',
    },
    child:{
        backgroundColor: Colors.White,
        paddingBottom: 20,
    },
    childTextStyle: {
        fontSize: 11,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBook,
    },
});

export default Accordion;