import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../screens';

import { colors } from '../../helpers/styles';
import { StyleSheet } from 'react-native';

const AuthStackNav = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <AuthStackNav.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: styles.container,
                animation: 'slide_from_right',
            }}>
            <AuthStackNav.Screen component={Screens.Splash} name="Splash" />
        </AuthStackNav.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
    },
});
