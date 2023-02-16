import { StyleSheet, View } from "react-native";
import { Text, Touchable } from "../../../components";
import { colors, screenHeight } from "../../../helpers/styles";
import { Button, Input } from "../../../widgets";

export const LoginView = ({ phoneNumber, setPhoneNumber, googleSignIn, sendOtpTophone }) => {
    return (
        <View style={styles.container}>
            <View style={{
                paddingTop: screenHeight / 8
            }}>
                <Text fontSize={32} fontWeight='800'>Welcome</Text>
                <Text color={colors.grey}>Please enter your phone number to continue.</Text>
                <View
                    style={{
                        paddingVertical: 50
                    }}
                >
                    <Input value={phoneNumber} onChange={val => setPhoneNumber(val)} keyboardType={'numeric'} />
                </View>
                <Button onPress={sendOtpTophone} disabled={phoneNumber.length < 10} value={'Continue'} />
                <View style={{
                    paddingVertical: 20
                }}>
                    <Text customStyle={{ textAlign: 'center' }}>
                        or
                    </Text>
                </View>
                <View>
                    <Touchable style={styles.googleButton} onPress={googleSignIn}>
                        <Text color={colors.black}>
                            Sign in with google
                        </Text>
                    </Touchable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    googleButton: {
        width: '100%',
        padding: 16,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,

    },
})