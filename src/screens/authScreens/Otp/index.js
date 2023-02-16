import { useState } from 'react';
import { Alert, View } from 'react-native';
import { navigate } from '../../../navigation';
import { OtpView } from './OtpView';

const OtpScreen = (props) => {
	const [otp, setOtp] = useState('');

	const { phoneNumber, confirmation } = props.route.params;

	const handleSubmitOtp = async () => {
		console.log(otp);
		try {
			const result = await confirmation.confirm(otp);
			console.log({ result });
			navigate('LocationScreen', undefined);
		} catch (error) {
			Alert.alert('Invalid otp.');
			console.log('Invalid code.');
		}
	};

	return <OtpView otp={otp} setOtp={setOtp} handleSubmitOtp={handleSubmitOtp} phoneNumber={phoneNumber} />;
};

export default OtpScreen;
