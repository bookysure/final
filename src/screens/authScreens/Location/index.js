import { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { requestLocationPermission } from '../../../helpers/Locations';
import Geolocation from 'react-native-geolocation-service';
import firestore from '@react-native-firebase/firestore';
import LocationView from './LocationView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../../constants/storageKeys';
import { navigate } from '../../../navigation';

const Location = () => {
	const getLocation = async () => {
		const uid = await AsyncStorage.getItem(STORAGE_KEYS.UID);
		if (PermissionsAndroid.RESULTS.GRANTED) {
			Geolocation.getCurrentPosition(
				async (position) => {
					console.log(position);
					const data = {
						lat: `${position?.coords?.latitude}`,
						lng: `${position?.coords?.longitude}`
					};
					try {
						console.log(uid);
						const feild = await firestore().collection('Users').doc(uid);
						await feild.update({ location: data });
						navigate('MainFlow', undefined);
					} catch (error) {
						console.log(error);
					}
				},
				(error) => {
					// See error code charts below.
					console.log(error.code, error.message);
				},
				{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
			);
		}
	};

	const askForPermission = async () => {
		const granted = await requestLocationPermission();
		if (granted) {
			getLocation();
		}
	};

	return <LocationView askForPermission={askForPermission} />;
};

export default Location;
