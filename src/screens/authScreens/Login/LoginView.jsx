import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { colors } from "../../../constants/colors";
import { HEIGHT } from "../../../constants/dimensions";
import { Button, H1Text, H3Text, H6Text, Input, NormalText, Touchable } from "../../../widgets";

export const LoginView = ({ phoneNumber, setPhoneNumber, googleSignIn, sendOtpTophone, loading }) => {
    return (

        <View
            style={{
                backgroundColor: colors[useColorScheme()]['background'],
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                maringTop: -200
            }}
        >

            <View>
                <View style={{ marginBottom: 20 }}>
                    <H3Text text={"Welcome to"} style={{ color: colors[useColorScheme()]['opposite'] }} />
                    <H1Text text={"BookySure!"} />
                </View>
                <View>
                    <NormalText text={"To continue please enter your phone number"} />
                </View>

                <View>
                    <Input
                        placeholder="99999XXXXX"
                        keyboardType={"numeric"}
                        value={phoneNumber}
                        onChangeText={(value) => {
                            setPhoneNumber(value)
                        }}
                        autoFocus={true}
                        maxLength={10}
                        phone={true}
                    />
                </View>
            </View>
            <View style={{ padding: 20, paddingVertical: 10 }}>
                <Button
                    title={'get otp'}
                    onPress={sendOtpTophone}
                    loading={loading}
                />
            </View>
            <NormalText text={"or"} />
            <View style={{ padding: 20, paddingVertical: 10 }}>
                <Button
                    title={'Login With Google'}
                    onPress={googleSignIn}
                    loading={loading}
                />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <NormalText text={"By clicking you will accept all the "} />
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Touchable onPress={() => { that.navigation.navigate('PrivacyScreen') }}>
                        <H6Text text={"terms of use"} />
                    </Touchable>
                    <NormalText text={" and "} />
                    <Touchable onPress={() => { that.navigation.navigate('TermsScreen') }}>
                        <H6Text text={"privacy policy."} />
                    </Touchable>
                </View>
            </View>

        </View >
    )
}
