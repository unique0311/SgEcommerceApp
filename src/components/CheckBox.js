import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Images from '../theme/Images';

const CheckBox = ({ value, onChange }) => {
	
	return (
		<View>
			<TouchableOpacity style={styles.checkboxButton} onPress={() => onChange(!value)}>
				{
					value
					? <Image style={styles.checkboxIcon} source={Images.checkbox_selected}/>
					: <Image style={styles.checkboxIcon} source={Images.checkbox_normal}/>
				
				}
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	checkboxIcon: {
		width: 22,
		height: 22,
	},
});

export default CheckBox;