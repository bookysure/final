import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../../screens';

import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const WalletStackNav = createNativeStackNavigator();

export const WalletStack = () => {
    return (
        <>
            <WalletStackNav.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: styles.container,
                    animation: 'slide_from_right'
                }}
            >
                <WalletStackNav.Screen component={Screens.WalletScreen} name='WalletScreen' />
            </WalletStackNav.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg
    }
});
