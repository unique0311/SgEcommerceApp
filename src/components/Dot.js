import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Dot = ({active}) => {
  return (
    <View>
      <Text
        style={[
          active
            ? {backgroundColor: '#2b266d'}
            : {
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#d4d1ff',
              },
          styles.dotSquare,
        ]}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dotSquare: {
    width: 8,
    height: 8,
    borderRadius: 50,
  },
});

export default Dot;
