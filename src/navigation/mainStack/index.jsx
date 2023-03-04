import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';
import { BottomBar } from '../../components';
import { ChatStack } from './chatStack';
import { DiscoverStack } from './discoverStack';
import { HomeStack } from './homeStack';
import { SettingsStack } from './settingsStack';
import { WalletStack } from './walletStack';

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
				<MainStackNav.Screen component={WalletStack} name='WalletStack' />
				<MainStackNav.Screen component={ChatStack} name='ChatStack' />
				<MainStackNav.Screen component={DiscoverStack} name='DiscoverStack' />
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
