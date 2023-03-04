import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../../screens';

import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const ChatStackNav = createNativeStackNavigator();

export const ChatStack = () => {
	return (
		<>
			<ChatStackNav.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: styles.container,
					animation: 'slide_from_right'
				}}
			>
				<ChatStackNav.Screen component={Screens.ChatScreen} name='ChatScreen' />
			</ChatStackNav.Navigator>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.bg
	}
});
