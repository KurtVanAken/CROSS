import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Warning = ({ children }) => {
  if (children !== '') {
    return (
      <View style={styles.warning}>
        <Text>{children}</Text>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  warning: {
    backgroundColor: '#fdeac4',
    marginTop: 15,
    padding: 15,
    alignSelf: 'stretch',
    borderRadius: 10,
    borderColor: '#F9BD49',
    borderWidth: 2
  }
});

export default Warning;