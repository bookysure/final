import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { colors } from '../constants/colors';

import { AuthStack } from './authStack';
import { MainStack } from './mainStack';

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
					contentStyle: { backgroundColor: colors[useColorScheme()]['background'] }
				}}
			>
				<RootStackNav.Screen component={AuthStack} name={'AuthFlow'} />
				<RootStackNav.Screen component={MainStack} name={'MainFlow'} />
			</RootStackNav.Navigator>
		</NavigationContainer>
	);
};
