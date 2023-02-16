import { colors, fonts } from '../helpers/styles';
import { StyleSheet, View } from 'react-native';
import { Touchable, Text } from '../components';
import FastImage, { Source } from 'react-native-fast-image';

/**
 *
 * @param onPress
 * @param value
 * @param type
 * @param disabled
 * @param customStyle
 * @returns {JSX.Element}
 * @constructor
 */


const Button = ({ onPress, value = '', disabled = false, customStyle = {}, leftIcon }) => {
    const buttonStyle = disabled ? styles.disabled : styles.default;
    const textColor = disabled ? colors.bg : buttonStyle.color;

    return (
        <Touchable disabled={disabled} style={[styles.container, buttonStyle, customStyle]} onPress={onPress}>
            {leftIcon ? (
                <View style={styles.imageWrapper}>
                    <FastImage source={leftIcon} style={styles.imageStyle} />
                </View>
            ) : null}
            <Text children={value} color={textColor} />
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    default: {
        backgroundColor: colors.purple,
        color: colors.white
    },
    bordered: {
        backgroundColor: 'transparent',
        color: colors.purple,
        borderWidth: 2,
        borderColor: colors.purple
    },
    disabled: {
        backgroundColor: colors.lightPurpule,
        color: colors.white
    },
    imageStyle: {
        width: 22,
        height: 22
    },
    imageWrapper: {
        marginRight: 5
    }
});

export default Button;
