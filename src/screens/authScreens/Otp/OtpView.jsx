import { StyleSheet, View } from 'react-native';
import { Text } from '../../../components';
import { colors, fonts } from '../../../helpers/styles';
// import BackButton from '../../../widgets/BackButton';
import Button from '../../../widgets/Button';
import OtpInput from '../../../widgets/OtpInput';


export const OtpView = ({ handleSubmitOtp, setOtp, otp, phoneNumber }) => {
    return (
        <View style={styles.container}>
            {/* <BackButton /> */}
            <View style={styles.passcodeDetails}>
                <View style={styles.label}>
                    <Text fontSize={24} >
                        Verify Otp
                    </Text>
                </View>
                <View>
                    <Text color={colors.grey} fontSize={12} opacity={0.8}>
                        {`Please enter the otp sent to +91 ${phoneNumber}`}
                    </Text>
                </View>
            </View>
            <View>
                <OtpInput pin={otp} setPin={setOtp} />
            </View>
            <View style={styles.buttonContainer}>
                <View>
                    <Button disabled={otp.length !== 6} onPress={handleSubmitOtp} value={'Confirm'} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    passcodeDetails: {
        paddingVertical: 30,
        marginTop: 30
    },
    label: {
        textAlign: 'center',
        marginBottom: 10
    },
    bottomLabel: {
        textAlign: 'center',
        marginTop: 30
    },
    buttonContainer: {
        width: '100%',
        paddingVertical: 50
    }
});
