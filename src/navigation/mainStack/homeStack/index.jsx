import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../../screens';

import { StyleSheet } from 'react-native';

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
                <HomeStackNav.Screen component={Screens.NotificationsScreen} name='NotificationsScreen' />
                <HomeStackNav.Screen component={Screens.PropertyScreen} name='PropertyScreen' />
            </HomeStackNav.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
