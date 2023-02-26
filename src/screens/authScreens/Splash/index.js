import { SplashView } from './SplashView';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';

const Splash = () => {
	const getUsers = async () => {
		const version = await firestore().collection('App').doc('Version').get();
		console.log(version.data())
	};

	useEffect(() => {
		getUsers();
	}, []);

	return <SplashView />;
};

export default Splash;
