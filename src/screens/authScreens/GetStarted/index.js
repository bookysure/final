import { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { requestLocationPermission } from '../../../helpers/Locations';
import Geolocation from 'react-native-geolocation-service';
import firestore from '@react-native-firebase/firestore';
import { GetStartedView, LocationView } from './GetStartedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../../constants/storageKeys';
import { Animated } from 'react-native';

const GetStarted = () => {

	const [next, setNext] = useState(0)
	const value = useState(new Animated.ValueXY(0))[0]
	const [get, setGet] = useState(1)
	const [slides, setSlides] = useState([
		{
			img: {
				uri: 'https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg'
			},
			text: "Slide 1"
		},
	])

	function moveLeft() {
		setNext(next - WIDTH)
		Animated.timing(value, {
			toValue: next - WIDTH,
			duration: 500,
			easing: Easing.exp,
			useNativeDriver: true
		}).start()
	}

	return <GetStartedView value={value} slides={slides} get={get} setGet={setGet}/>;
};

export default GetStarted;
