import { Text, View, Button, StyleSheet } from "react-native";

export const SplashView = () => {
    return (
        <View style={styles.container}>
            <Text>
                splash screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})