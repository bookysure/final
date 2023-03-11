import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../../screens';

import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const SettingsStackNav = createNativeStackNavigator();

export const SettingsStack = () => {
    return (
        <>
            <SettingsStackNav.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: styles.container,
                    animation: 'slide_from_right'
                }}
            >
                <SettingsStackNav.Screen component={Screens.SettingsScreen} name='SettingsScreen' />
                <SettingsStackNav.Screen component={Screens.ContactUsScreen} name='ContactUsScreen' />
            </SettingsStackNav.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg
    }
});
