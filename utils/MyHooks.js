import React from 'react';
import { useTheme } from '../theme';

function colorHook(Component) {
    return function WrappedComponent(props) {
      const { colors, setScheme, isDark } = useTheme();
      return <Component {...props} myHookValue={colors} />;
    }
  }

  export default colorHook;
