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

	useEffect(() => {
		GoogleSignin.signOut();
	}, []);

	const saveUserData = (uid) => {
		if (uid) {
			AsyncStorage.setItem(STORAGE_KEYS.UID, uid);
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
		saveUserData(profile?.uid);
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
			saveUserData(profile?.uid);
		} catch (error) {
			console.log(error);
		}
	};

	const findUserByPhoneNumber = async () => {
		const foundUser = await firestore().collection('Users').where('phoneNumber', '==', phoneNumber).get();

		if (foundUser.empty) {
			alert('No account associated with this phone number was found!');
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
		if (findUserByPhoneNumber()) {
			if (phoneNumber.length == 10) {
				try {
					const confirmation = await auth().signInWithPhoneNumber(`+91 ${phoneNumber}`);
					navigate('OtpScreen', { phoneNumber, confirmation });
					console.log(confirmation);
				} catch (error) {
					console.log(error, 'in sending otp');
				}
			}
		}
	};

	return (
		<LoginView
			phoneNumber={phoneNumber}
			setPhoneNumber={setPhoneNumber}
			googleSignIn={googleSignIn}
			sendOtpTophone={sendOtpTophone}
		/>
	);
};

export default LoginScreen;
