import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../screens';

import { StyleSheet, useColorScheme } from 'react-native';
import { colors } from '../../constants/colors';

const AuthStackNav = createNativeStackNavigator();

export const AuthStack = () => {
	return (
		<AuthStackNav.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: styles.container,
				animation: 'slide_from_right'
			}}
		>
			<AuthStackNav.Screen component={Screens.Splash} name='Splash' />
			<AuthStackNav.Screen component={Screens.GetStartedScreen} name='GetStartedScreen' />
			<AuthStackNav.Screen component={Screens.LoginScreen} name='LoginScreen' />
			<AuthStackNav.Screen component={Screens.OtpScreen} name='OtpScreen' />
			<AuthStackNav.Screen component={Screens.LocationScreen} name='LocationScreen' />
		</AuthStackNav.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors[useColorScheme()]['background']
	}
});
