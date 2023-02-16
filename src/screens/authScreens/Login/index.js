import { useEffect, useState } from 'react';
import { LoginView } from './LoginView';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { navigate } from '../../../navigation';

const LoginScreen = () => {
	const [phoneNumber, setPhoneNumber] = useState('');

	useEffect(() => {
		GoogleSignin.signOut();
	}, []);

	const googleSignIn = async () => {
		await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
		// Get the users ID token
		const { idToken } = await GoogleSignin.signIn();

		console.log({ idToken });

		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

		console.log({ googleCredential });

		navigate('LocationScreen', undefined);

		// Sign-in the user with the credential
		return auth().signInWithCredential(googleCredential);
	};

	const sendOtpTophone = async () => {
		if (phoneNumber.length == 10) {
			try {
				const confirmation = await auth().signInWithPhoneNumber(`+91 ${phoneNumber}`);
				navigate('OtpScreen', { phoneNumber, confirmation });
				console.log(confirmation);
			} catch (error) {
				console.log(error, 'in sending otp');
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
