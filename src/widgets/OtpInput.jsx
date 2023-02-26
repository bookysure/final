import OTPInputView from '@twotalltotems/react-native-otp-input';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { colors } from "../constants/colors";
import { WIDTH } from "../constants/dimensions";


const OtpInput = ({ pin, setPin }) => {
    return (
        <View>
            <OTPInputView
                style={{ width: '100%', height: 50 }}
                pinCount={6}
                code={pin}
                onCodeChanged={(code) => {
                    setPin(code);
                }}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    underlineStyleBase: {
        width: WIDTH / 9,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        fontSize: 24
    },
    underlineStyleHighLighted: {
        borderColor: colors[useColorScheme()]['secondary']
    }
});

export default OtpInput;
