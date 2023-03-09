import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, useColorScheme, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../constants/colors';
import { WIDTH } from '../constants/dimensions';
import { icons } from '../constants/icons';
import { ICON_NAMES } from '../helpers/constants';
import { navigate, navigationRef } from '../navigation';
import { Touchable } from '../widgets';
import { BottomTabIcons } from './BottomTabIcons';

const tabs = [
	{
		name: 'HomeStack',
		screen: 'HomeScreen',
		icon: 'h-white',
		label: 'Home',
		index: 2
	},
	{
		name: 'ChatStack',
		screen: 'ChatScreen',
		icon: 'chat-white',
		label: 'Chat',
		index: 3
	},
	{
		name: 'WalletStack',
		screen: 'WalletScreen',
		icon: 'wallet-white',
		label: 'Wallet',
		index: 1
	},
	{
		name: 'SettingsStack',
		screen: 'SettingsScreen',
		icon: 'gear-white',
		label: 'Settings',
		index: 4
	},
	{
		name: 'DiscoverStack',
		screen: 'DiscoverScreen',
		icon: 'intrest-white',
		label: 'Discover',
		index: 0
	},
]


const BottomBar = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [currentRoute, setCurrentRoute] = useState('');

	useEffect(() => {
		const result = navigationRef?.current?.getCurrentRoute();
		setCurrentRoute(result?.name || 'HomeScreen');
	}, [navigationRef?.current?.getCurrentRoute()]);


	if (tabs.findIndex(o => o.screen === currentRoute > -1)) {
		return (
			<View style={{
				position: 'absolute',
				backgroundColor: colors[useColorScheme()]['primary'],
				bottom: 15,
				borderRadius: 50,
				marginHorizontal: 10,
				justifyContent: 'space-evenly',
				alignItems: 'center',
				flexDirection: 'row',
				width: WIDTH - 20
			}}>
				{
					tabs.sort((a, b) => { return a.index - b.index }).map((item, index) => {
						return (
							<BottomTabIcons key={index} title={item.label} icon={item.icon} name={item.name} focused={currentRoute == item.screen} currentRoute={navigationRef?.current?.getCurrentRoute()} />
						)
					})
				}
			</View >
		);
	}
	return null;
};

export default BottomBar;

const styles = StyleSheet.create({
	tabsContainer: {
		alignItems: 'center'
	},
	copyIcon: { height: 30, width: 30, margin: 10 },
	highlightedTab: {
		// backgroundColor: colors.purple,
		bottom: 30,
		borderRadius: 100
	},

});
