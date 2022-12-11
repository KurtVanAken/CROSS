/* eslint-disable max-len */
 import React from 'react';
 import { Text, TouchableOpacity, StyleSheet } from 'react-native';

 import { useTheme } from '../theme/index';


 const Button = () => {
     const { buttonStyle } = styles;
     const { colors, setScheme, isDark } = useTheme();
    
     const changeTheme = () => {
         if (isDark) {
             setScheme('light');
         } else {
             setScheme('dark');
         }
     };

  return (

          
         <TouchableOpacity style={[buttonStyle, { backgroundColor: colors.button }]} onPress={() => changeTheme()}>
             <Text style={{ color: colors.buttonText }}>Change theme mode</Text>   
         </TouchableOpacity>

   );
 };
 const styles = StyleSheet.create({
    
   
       buttonStyle: {
         marginTop: 40, 
         height: 40,
         width: 160, 
         borderRadius: 8
       },
       textStyle: {
        
       }
     });


 export default Button;

