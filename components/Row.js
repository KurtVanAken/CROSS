import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;



const Row = ({ children }) => {
    const { direction } = styles;
 
  
    return <View style={direction}>{children}</View>;
  };
  
  const styles = StyleSheet.create({
    direction: {
     display:'flex',
     flexWrap:'wrap',
     flexDirection:'row',
     width: windowWidth*0.8,
     marginLeft: windowWidth*0.1,
     marginRight: windowWidth*0.1
    }
  });


export default Row;
