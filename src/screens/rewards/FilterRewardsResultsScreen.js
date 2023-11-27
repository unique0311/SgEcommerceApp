import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Colors from '../../theme/Colors';
import BackButton from '../../components/BackButton';
import Fonts from '../../theme/Fonts';
import Button from '../../components/Button';
import TextView from '../../components/TextView';
import DatePicker from '../../components/DatePicker';
import CategoryItem from '../../components/Home/CategoryItem';

const width = Dimensions.get('window').width;

const categoryItemLists = [
    {
        imageName: 'beverages_category',
        comment: 'Beverages'
    },
    {
        imageName: 'cannedFood_category',
        comment: 'Canned Food'
    },
    {
        imageName: 'beverages_category',
        comment: 'Beverages'
    }
]

const FilterRewardsResultsScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({
        fromDateText: '',
        toDateText: '',
        fromDateState: false,
        toDateState: false
    })
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}>
                <BackButton rightIcon1="close_dark" onPressIcon1={() => {navigation.goBack()}} />
                <Text style={styles.title}>Filter Results</Text>
            </View>
            <Text style={styles.sortText}>Sort By</Text>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <View style={{ width: '100%', flex: 1, marginRight: 5 }}>
                    <Button 
                        title="Period" 
                        color={Colors.PrimaryPurple500} 
                        backColor={Colors.White} 
                        style={{ borderRadius: 10, borderColor: Colors.PrimaryPurple500, borderWidth: 1 }}  
                        onPress={() => {}} 
                        disabled={false} 
                        font={Fonts.NexaBold} 
                    />
                </View>
                <View style={{ width: '100%', flex: 1, marginLeft: 5 }}>
                    <Button 
                        title="Chain" 
                        color={Colors.PrimaryPurple500} 
                        backColor={Colors.White} 
                        style={{ borderRadius: 10, borderColor: Colors.PrimaryPurple500, borderWidth: 1 }}  
                        onPress={() => {}} 
                        disabled={false} 
                        font={Fonts.NexaBold} 
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
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
            <View style={{ paddingTop: 20 }}><Text style={styles.sortText}>Filter By</Text></View>
            <View style={{ paddingBottom: 10, paddingTop: 20, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
                {categoryItemLists.map((item, index) => (
                    <View key={index} style={{ marginRight: 10, marginBottom: 10, width: (width - 70) / 3 }}>
                        <CategoryItem imageName={item.imageName} comment={item.comment} />
                    </View>
                ))}
            </View>

            <View style={styles.bottomBox}>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <View style={{ width: '100%', flex: 1, marginRight: 5 }}>
                        <Button 
                            title="Clear" 
                            color={Colors.PrimaryPurple500} 
                            backColor={Colors.White} 
                            style={{ borderRadius: 50, borderColor: Colors.PrimaryPurple500, borderWidth: 1 }}  
                            onPress={() => {navigation.goBack()}} 
                            disabled={false} 
                            font={Fonts.NexaBold} 
                        />
                    </View>
                    <View style={{ width: '100%', flex: 1, marginLeft: 5 }}>
                        <Button 
                            title="Save" 
                            color={Colors.White} 
                            backColor={Colors.PrimaryPurple500} 
                            style={{ borderRadius: 50, borderColor: Colors.PrimaryPurple500, borderWidth: 1 }}  
                            onPress={() => {navigation.goBack()}} 
                            disabled={false} 
                            font={Fonts.NexaBold} 
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        position: 'relative'
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        fontFamily: Fonts.NexaBlack,
        color: Colors.PrimaryPurple500
    },
    sortText: {
        fontSize: 12,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black,
        backgroundColor: Colors.Black100,
        paddingVertical: 4,
        paddingHorizontal: 20
    },
    fromDate: {
        marginLeft: 10,
        fontSize: 12,
        fontFamily: Fonts.NexaBold,
        color: Colors.Black500
    },
    bottomBox: {
        position: 'absolute',
        bottom: 0,
        borderTopColor: Colors.Black200,
        borderTopWidth: 1,
        width: '100%'
    }
})

export default FilterRewardsResultsScreen;