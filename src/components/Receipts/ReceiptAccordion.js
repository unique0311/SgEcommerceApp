import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import { Table, Row, Rows, Col } from 'react-native-table-component';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
const tableHead = ['Chain', 'Total', 'Points', 'Saved'];
const widthArr = [(width-40)/5*2, (width-40)/5+10, (width-40)/5-10, (width-40)/5];

const ReceiptAccordion = ({ title, data }) => {
    const changeText = (value) => (
        <Text style={styles.textBody}>
            {value} <MaterialCommunityIcon name='currency-eur' />
        </Text>
    );
    const [expanded, setExpanded] = useState(false);
    const [tableData, setTableData] = useState([
        ['Retailer Name', changeText('85.60'), '858', changeText('8')],
        ['Retailer Name', changeText('185.60'), '858', changeText('15')],
        ['Retailer Name', changeText('50.60'), '670', changeText('20')]
    ])
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
       <View style={{ borderBottomColor: Colors.Black200, borderBottomWidth: 1, width: '100%' }}>
            <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
                <Text style={styles.title}>{title}</Text>
                <Icon style={styles.arrowIcon} name={expanded ? 'chevron-small-up' : 'chevron-small-down'} size={25} color={Colors.White} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                expanded &&
                <View style={styles.child}>
                    <Table borderStyle={{borderWidth: 1, borderColor: Colors.Black200}}>
                        <Row data={tableHead} style={styles.head} textStyle={styles.textHead} widthArr={widthArr} />
                        <Rows data={tableData} textStyle={styles.textBody} widthArr={widthArr} />
                    </Table>
                </View>
            }
            
       </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 12,
        color: Colors.White,
        fontFamily: Fonts.NexaBold,
    },
    arrowIcon: {
        position: 'absolute',
        right: 10,
    },
    row:{
        position: 'relative',
        flexDirection: 'row',
        justifyContent:'center',
        // height: 45,
        paddingVertical: 8,
        alignItems:'center',
        backgroundColor: Colors.PrimaryPurple500,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
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
    head:{ 
        height: 30, 
        backgroundColor: Colors.Black100 
    },
    textHead:{ 
        margin: 6,
        fontSize: 11,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBook,
    },
    textBody:{ 
        margin: 6,
        fontSize: 11,
        color: Colors.Black400,
        fontFamily: Fonts.NexaBold,
    }
});

export default ReceiptAccordion;