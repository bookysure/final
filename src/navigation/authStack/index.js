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
				animation: 'slide_from_right'
			}}
		>
			<AuthStackNav.Screen component={Screens.LoginScreen} name='LoginScreen' />
			<AuthStackNav.Screen component={Screens.Splash} name='Splash' />
			<AuthStackNav.Screen component={Screens.LocationScreen} name='LocationScreen' />
			<AuthStackNav.Screen component={Screens.OtpScreen} name='OtpScreen' />
		</AuthStackNav.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.bg
	}
});
