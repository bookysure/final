import { useEffect, useState } from 'react';
import { Easing, PermissionsAndroid } from 'react-native';
import { requestLocationPermission } from '../../../helpers/Locations';
import Geolocation from 'react-native-geolocation-service';
import firestore from '@react-native-firebase/firestore';
import GetStartedView from './GetStartedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../../constants/storageKeys';
import { Animated } from 'react-native';
import { WIDTH } from '../../../constants/dimensions';
import { navigate } from '../../../navigation';

const GetStarted = () => {
	const [next, setNext] = useState(0);
	const value = useState(new Animated.ValueXY(0))[0];
	const [get, setGet] = useState(1);
	const [slides, setSlides] = useState([
		{
			img: {
				uri: 'https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg'
			},
			text: 'Slide 3'
		},
		{
			img: {
				uri: 'https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg'
			},
			text: 'Slide 2'
		},
		{
			img: {
				uri: 'https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg'
			},
			text: 'Slide 1'
		}
	]);

	const checkToken = async () => {
		try {
			const token = await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);
			if (token) {
				navigate('MainFlow', undefined);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		checkToken();
	}, []);

	function moveLeft() {
		setNext(next - WIDTH);
		Animated.timing(value, {
			toValue: next - WIDTH,
			duration: 500,
			easing: Easing.exp,
			useNativeDriver: true
		}).start();
	}

	return <GetStartedView value={value} slides={slides} get={get} setGet={setGet} moveLeft={moveLeft} />;
};

export default GetStarted;
