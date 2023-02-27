import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../../screens';

import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const HomeStackNav = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <>
            <HomeStackNav.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: styles.container,
                    animation: 'slide_from_right'
                }}
            >
                <HomeStackNav.Screen component={Screens.HomeScreen} name='HomeScreen' />
            </HomeStackNav.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg
    }
});
