 import React, { useState } from 'react';
 import { Switch } from 'react-native';
 import { useTheme } from '../theme/index';

 const ToggleSwitch = () => {
     const [isEnabled, setIsEnabled] = useState(false);
     const toggleSwitch = () => {
         setIsEnabled(previousState => !previousState);
         changeTheme();
         console.log(isEnabled);
     };

     const { colors, setScheme, isDark } = useTheme();
    
     const changeTheme = () => {
         if (isDark) {
             setScheme('light');
         } else {
             setScheme('dark');
         }
     };

   return (
    
     <Switch
     trackColor={{ false: colors.trackFalse, true: colors.trackFalse }}
     thumbColor={colors.thumb}
   
     activeThumbColor={colors.thumb}
     onValueChange={toggleSwitch}
     value={isEnabled}
     />
   );
 };
  
 export default ToggleSwitch;
