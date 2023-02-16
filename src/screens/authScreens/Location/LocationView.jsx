import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import { colors, screenHeight } from "../../../helpers/styles";
import { Button } from "../../../widgets";

export const LocationView = () => {
    return (
        <View style={styles.container}>
            <View style={{
                paddingTop: screenHeight / 8
            }}>
                <Text fontSize={32} fontWeight='800'>Enable Location</Text>
                <Text color={colors.grey}>Booky sure wants to access your location.</Text>
            </View>
            <View
                style={{
                    paddingVertical: 50
                }}
            >
                <Button onPress={() => { }} value={'Enable'} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})