import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../constants/colors';
import { ICON_NAMES } from '../helpers/constants';
import { navigate, navigationRef } from '../navigation';
import { Text, Touchable } from '../widgets';

const BottomBar = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [currentRoute, setCurrentRoute] = useState('');

	useEffect(() => {
		const result = navigationRef?.current?.getCurrentRoute();
		setCurrentRoute(result?.name || '');
	}, [navigationRef?.current?.getCurrentRoute()]);

	useEffect(() => {
		if (currentRoute === 'HomeView' && activeTab !== 0) {
			setActiveTab(0);
		} else (currentRoute === 'SettingsScreen' && activeTab !== 1) {
			setActiveTab(1);
		}
	}, [currentRoute]);

	const onTabChange = (key) => {
		switch (key) {
			case 0:
				navigate('HomeView', undefined);
				break;
			case 1:
				navigate('SettingsStack', undefined);
				break;
			default:
				break;
		}
	};

	const tabDetails = [
		{
			screenName: 'Home',
			// icon: ICON_NAMES.home
		},
		{
			screenName: 'Settings',
			// icon: ICON_NAMES.settings
		}
	];

	if (currentRoute === 'HomeView' || currentRoute === 'SettingsScreen') {
		return (
			<View style={styles.bottomTabWrapper}>
				{tabDetails.map((tab, index) => (
					<Touchable
						style={styles.tabsContainer}
						activeOpacity={activeTab === index ? 1 : 0.6}
						onPress={() => {
							setActiveTab(index);
							onTabChange(index);
						}}
						key={index}
					>
						<View style={activeTab === index ? styles.highlightedTab : undefined}>
							{/* <FastImage
								tintColor={activeTab === index ? colors.white : colors.grey}
								source={tab.icon}
								style={styles.copyIcon}
							/> */}
						</View>
						{activeTab === index ? (
							<Text customStyle={styles.barText} fontSize={12}>
								{tab.screenName}
							</Text>
						) : null}
					</Touchable>
				))}
			</View>
		);
	}
	return null;
};

export default BottomBar;

const styles = StyleSheet.create({
	bottomTabWrapper: {
		flexDirection: 'row',
		position: 'absolute',
		justifyContent: 'space-around',
		width: screenWidth,
		bottom: 0,
		paddingVertical: 10,
		backgroundColor: colors.lightBlack,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		paddingHorizontal: 15
	},
	tabsContainer: {
		alignItems: 'center'
	},
	copyIcon: { height: 30, width: 30, margin: 10 },
	highlightedTab: {
		backgroundColor: colors.purple,
		bottom: 30,
		borderRadius: 100
	},
	barText: {
		bottom: 5,
		position: 'absolute'
	}
});
