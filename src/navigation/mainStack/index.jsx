import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';
import { BottomBar } from '../../components';
import { HomeStack } from './homeStack';
import { SettingsStack } from './settingsStack';

const MainStackNav = createNativeStackNavigator();

export const MainStack = () => {
	return (
		<>
			<MainStackNav.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: styles.container,
					animation: 'slide_from_right'
				}}
			>
				<MainStackNav.Screen component={HomeStack} name='HomeStack' />
				<MainStackNav.Screen component={SettingsStack} name='SettingsStack' />
			</MainStackNav.Navigator>
			<BottomBar />
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		// backgroundColor: colors.bg
	}
});
