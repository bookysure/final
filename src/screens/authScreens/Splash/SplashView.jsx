import { Text, View, Button } from "react-native";

export const SplashView = ({ onGoogleButtonPress }) => {
    return (
        <View>
            <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            />
        </View>
    )
}