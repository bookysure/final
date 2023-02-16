import AppWrapper from './app/AppWrapper';
import SafeAreaContext from './app/context/SafeAreaContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { getFcmToken, NotificationListener, requestUserPermission } from './helpers/PushNotification';

GoogleSignin.configure({
  webClientId: '500516714225-b4ftmcd4rcav0e9ik4k2r5j6vo4d6i24.apps.googleusercontent.com',
});


const App = () => {
  useEffect(() => {
    requestUserPermission();
    getFcmToken();
    NotificationListener();
  }, []);

  return (
    <SafeAreaContext>
      <AppWrapper />
    </SafeAreaContext>
  );
};

export default App;
