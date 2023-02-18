import { SplashView } from './SplashView';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';

const Splash = () => {
	const getUsers = async () => {
		firestore()
			?.collection('ToDos')
			?.onSnapshot((result) => {
				result.forEach((doc) => {
					console.log(doc.data());
				});
			});
	};

	useEffect(() => {
		getUsers();
	}, []);

	return <SplashView />;
};

export default Splash;
