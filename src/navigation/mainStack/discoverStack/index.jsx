import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../../screens';

import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const DiscoverStackNav = createNativeStackNavigator();

export const DiscoverStack = () => {
	return (
		<>
			<DiscoverStackNav.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: styles.container,
					animation: 'slide_from_left'
				}}
			>
				<DiscoverStackNav.Screen component={Screens.DiscoverScreen} name='DiscoverScreen' />
			</DiscoverStackNav.Navigator>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.bg
	}
});
