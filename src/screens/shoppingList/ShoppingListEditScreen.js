import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import Colors from '../../theme/Colors';
import BackButton from '../../components/BackButton';
import Fonts from '../../theme/Fonts';
import { DraggableGrid } from 'react-native-draggable-grid';
import ShoppingListEditItem from '../../components/ShoppingList/ShoppingListEditItem';

const width = Dimensions.get('window').width;

const ShoppingListEditScreen = ({ navigation }) => {
    const [data, setData] = useState([
        {name:'Laundry Detergent',key:'one'},
        {name:'Laundry Detergent',key:'two'},
        {name:'Laundry Detergent',key:'three'},
        {name:'Laundry Detergent',key:'four'},
        {name:'Laundry Detergent',key:'five'},
        {name:'Laundry Detergent',key:'six'},
        {name:'Laundry Detergent',key:'seven'},
        {name:'Laundry Detergent',key:'eight'},
        {name:'Laundry Detergent',key:'night'},
        {name:'Laundry Detergent',key:'zero'},
    ]);

    const render_item = (item) => {
        return (
            <View
                style={styles.item}
                key={item.key}
            >
                {/* <Text style={styles.item_text}>{item.name}</Text> */}
                <ShoppingListEditItem />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <BackButton 
                rightIcon1="search_dark" 
                rightIcon2="scan_dark" 
                rightIcon3="import_dark" 
                onPressIcon1={() => {navigation.push('ShoppingListDetails')}} 
                onPressIcon2={() => {}} 
                onPressIcon3={() => {}} 
            />
            <Text style={styles.title}>Shopping List</Text>

            {/* <ShoppingListEditItem /> */}

            <View style={styles.wrapper}>
                <DraggableGrid
                    numColumns={1}
                    renderItem={render_item}
                    data={data} 
                    itemHeight={50} 
                    onDragRelease={(data) => {
                        setData(data);// need reset the props data sort after drag release
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500
    },
    button:{
        // width:150,
        // height:100,
        // backgroundColor:'blue',
      },
      wrapper:{
        marginTop: 20,
        width:'100%',
        height:'100%',
        justifyContent:'center',
      },
      item:{
        width: width - 40,
        height:50,
        borderRadius:8,
        // backgroundColor:'red',
        justifyContent:'center',
        // alignItems:'center',
      },
      item_text:{
        fontSize:40,
        color:'#FFFFFF',
      },
})

export default ShoppingListEditScreen;