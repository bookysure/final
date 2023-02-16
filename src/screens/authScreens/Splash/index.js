import { SplashView } from './SplashView';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const Splash = () => {
    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        console.log({ idToken });

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        console.log({ googleCredential });

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }
    return <SplashView onGoogleButtonPress={onGoogleButtonPress} />;
};

export default Splash;
