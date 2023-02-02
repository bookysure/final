import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SafeAreaContext = ({ children }) => {
    return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default SafeAreaContext;
