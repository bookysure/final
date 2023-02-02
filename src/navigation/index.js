import {
    NavigationContainer,
    createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from '../helpers/styles';
import { AuthStack } from './authStack';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef?.navigate(name, params);
    }
}

export function goBack() {
    if (navigationRef.isReady()) {
        try {
            navigationRef.goBack();
        } catch (error) {
            console.log({ error });
        }
    }
}

const RootStackNav = createNativeStackNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootStackNav.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                    contentStyle: { backgroundColor: colors.bg },
                }}>
                <RootStackNav.Screen component={AuthStack} name={'AuthFlow'} />
            </RootStackNav.Navigator>
        </NavigationContainer>
    );
};
