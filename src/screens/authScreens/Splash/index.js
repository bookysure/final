import { SplashView } from './SplashView';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../../../navigation';
import { STORAGE_KEYS } from '../../../constants/storageKeys';

const Splash = () => {
	const getUsers = async () => {
		const version = await firestore().collection('App').doc('Version').get();
		console.log(version.data())
	};

	const checkToken = async () => {
		try {
			const token = await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);
			if (token) {
				navigate('MainFlow', undefined);
			}else{
				navigate('LocationScreen', undefined)
			}
		} catch (error) {
			console.log(error);
		}
	};
	
	useEffect(() => {
		setTimeout(() => {
			checkToken();
		}, 2000);
		getUsers();
	}, []);

	return <SplashView />;
};

export default Splash;
