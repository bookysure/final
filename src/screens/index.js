import AuthScreens from './authScreens';
import { HomeScreen, SettingsScreen, ChatScreen, DiscoverScreen, WalletScreen } from './mainFlow';
import HomeFlow from './mainFlow/HomeFlow';

export default {
	...AuthScreens,
	HomeScreen,
	SettingsScreen,
	ChatScreen,
	DiscoverScreen,
	WalletScreen,
	...HomeFlow
};
