import { useState } from 'react';
import { Alert, View } from 'react-native';
import { navigate } from '../../../navigation';
import { OtpView } from './OtpView';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../../constants/storageKeys';

const OtpScreen = (props) => {
	const [otp, setOtp] = useState('');

	const { phoneNumber, confirmation } = props.route.params;

	const handleSubmitOtp = async () => {
		console.log(otp);
		try {
			const result = await confirmation.confirm(otp);
			console.log(result?.user);
			try {
				const foundUser = await firestore().collection('Users').where('phoneNumber', '==', phoneNumber).get();
				foundUser.forEach((result) => {
					console.log(result.data());
					firestore().collection('Users').doc(result.data().uid).update({ lastSignIn: new Date() });
					AsyncStorage.setItem(STORAGE_KEYS.UID, uid);
				});
			} catch (error) {
				console.log('Error in getting account');
			}
			return;
			navigate('LocationScreen', undefined);
		} catch (error) {
			Alert.alert('Invalid otp.');
			console.log('Invalid otp');
		}
	};

	return <OtpView otp={otp} setOtp={setOtp} handleSubmitOtp={handleSubmitOtp} phoneNumber={phoneNumber} />;
};

export default OtpScreen;
