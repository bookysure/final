import { useEffect, useState } from 'react';
import { LoginView } from './LoginView';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import { navigate } from '../../../navigation';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../../constants/storageKeys';

const LoginScreen = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		GoogleSignin.signOut();
	}, []);

	const saveUserData = (uid, token) => {
		if (uid && token) {
			AsyncStorage.setItem(STORAGE_KEYS.UID, uid);
			AsyncStorage.setItem(STORAGE_KEYS.TOKEN, token);
		}
	};

	const saveUser = async (user, idToken) => {
		const additional = user?.additionalUserInfo?.profile;
		const profile = user?.user;
		const fcm_token = await AsyncStorage.getItem(STORAGE_KEYS.FCM);
		const data = {
			firstName: additional?.given_name || '',
			lastName: additional?.family_name || '',
			fullName: profile?.displayName || '',
			profilePicture: profile?.photoURL || '',
			email: profile?.email || '',
			phoneNumber: profile?.phoneNumber || '',
			uid: profile?.uid || '',
			isSignedIn: true,
			deviceToken: fcm_token || '',
			deviceType: Platform.OS || '',
			token: idToken || '',
			lastSignIn: new Date()
		};
		console.log(data);
		saveUserData(profile?.uid, idToken);
		try {
			await firestore().collection('Users').doc(profile?.uid).set(data);
		} catch (error) {
			console.log(error);
		}
	};

	const updateUser = async (user, token) => {
		const profile = user?.user;
		try {
			const foundUser = await firestore().collection('Users').doc(profile?.uid);
			if (foundUser) {
				foundUser.update({ token, lastSignIn: new Date() });
			}
			saveUserData(profile?.uid, token);
		} catch (error) {
			console.log(error);
		}
	};

	const findUserByPhoneNumber = async () => {
		const foundUser = await firestore().collection('Users').where('phoneNumber', '==', phoneNumber).get();

		if (!foundUser.empty) {
			alert('Another account is already associated with this phone number!');
		}
		return foundUser.empty;
	};

	const googleSignIn = async () => {
		await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
		// Get the users ID token
		const { idToken } = await GoogleSignin.signIn();

		console.log({ idToken });

		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

		console.log({ googleCredential });
		// Sign-in the user with the credential
		const result = await auth().signInWithCredential(googleCredential);
		console.log(result);
		if (result?.additionalUserInfo?.isNewUser) {
			saveUser(result, idToken);
		} else {
			updateUser(result, idToken);
		}
		navigate('LocationScreen', undefined);
	};

	const sendOtpTophone = async () => {
		setLoading(true);
		// if (findUserByPhoneNumber()) {
		if (phoneNumber.length == 10) {
			try {
				const confirmation = await auth().signInWithPhoneNumber(`+91 ${phoneNumber}`);
				navigate('OtpScreen', { phoneNumber, confirmation });
				setLoading(false);
				console.log(confirmation);
			} catch (error) {
				setLoading(false);
				console.log(error, 'in sending otp');
			}
			// }
		}
	};

	return (
		<LoginView
			phoneNumber={phoneNumber}
			setPhoneNumber={setPhoneNumber}
			googleSignIn={googleSignIn}
			sendOtpTophone={sendOtpTophone}
			loading={loading}
		/>
	);
};

export default LoginScreen;
