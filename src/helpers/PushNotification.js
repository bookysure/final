import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { STORAGE_KEYS } from '../constants/storageKeys';

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

export const getFcmToken = async () => {
    const fcm_token = await AsyncStorage.getItem(STORAGE_KEYS.FCM);
    console.log({ fcm_token });
    if (!fcm_token) {
        try {
            const new_token = await messaging().getToken();
            console.log({ new_token });
            if (new_token) {
                AsyncStorage.setItem(STORAGE_KEYS.FCM, new_token);
            }
        } catch (error) {
            console.log('Error in getting fcm token', error);
        }
    }

}

export const NotificationListener = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        // navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
                // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
        });

    messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
};