import { useState } from 'react';
import { Keyboard, StyleSheet, TextInput, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Error, Text, Touchable } from '../components';

// import { ICON_NAMES } from '../helpers/constants';
import { colors, fonts } from '../helpers/styles';

/**
 *
 * @param onChange
 * @param onFocus
 * @param onBlur
 * @param onSubmitEditing
 * @param value
 * @param label
 * @param placeholder
 * @param error
 * @param isPasswordInput
 * @param customContainerStyle
 * @param customInputStyle
 * @param datePickerFocus
 * @param customIcon
 * @param disabled
 * @param inputRef
 * @param showIcon
 * @param alwaysShowPlaceholder
 * @param datePicker
 * @param autoFocus
 * @returns {JSX.Element}
 * @constructor
 */
const Input = ({
    onChange = (val) => { },
    onSubmitEditing = Keyboard.dismiss,
    value = '',
    label = '',
    placeholder = '',
    error = '',
    isPasswordInput = false,
    customContainerStyle = {},
    customInputStyle = {},
    customIcon = '',
    disabled = false,
    inputRef = {},
    showIcon = true,
    alwaysShowPlaceholder = false,
    autoFocus = false,
    keyboardType = 'default'
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onIconPress = () => {
        isPasswordInput ? setShowPassword((prev) => !prev) : null;
    };

    const styles = getStyles(isFocused, error);

    const getInputIcon = () =>
        !!showIcon && (
            <Touchable onPress={onIconPress}>
                {isPasswordInput ? (
                    <FastImage source={showPassword ? ICON_NAMES.backButton : ICON_NAMES.bitcoin} />
                ) : (
                    !!(value && isFocused) && <FastImage source={ICON_NAMES.bitcoin} />
                )}
            </Touchable>
        );

    return (
        <View>
            <View style={[styles.container, customContainerStyle]}>
                {label && isFocused ? (
                    <View style={styles.labelWrapper}>
                        <Text children={label} />
                    </View>
                ) : null}

                <View style={[styles.inputWrapper, customInputStyle]}>
                    <TextInput
                        autoFocus={autoFocus}
                        blurOnSubmit={false}
                        editable={!disabled}
                        keyboardType={keyboardType}
                        placeholder={!isFocused || alwaysShowPlaceholder ? placeholder : ''}
                        placeholderTextColor={colors.grey}
                        ref={inputRef}
                        secureTextEntry={isPasswordInput && !showPassword}
                        style={styles.inputStyle}
                        value={value}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={onChange}
                        onFocus={() => setIsFocused(true)}
                        onSubmitEditing={onSubmitEditing}
                    />
                    {/* {!!customIcon && <FastImage source={customIcon} />}

                    {!customIcon && getInputIcon()} */}
                </View>
            </View>
            {error ? <Error error={error} /> : null}
        </View>
    );
};

const getStyles = (isFocused, error) =>
    StyleSheet.create({
        container: {
            width: '100%',
            borderColor: isFocused && !error.length ? colors.purple : error ? colors.red : colors.white,
            borderBottomWidth: 1
        },
        labelWrapper: {
            height: 20
        },
        inputWrapper: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        inputStyle: {
            flex: 1,
            padding: 0,
            height: 36,
            color: colors.white,
            fontSize: 16,
            // fontFamily: fonts.OS_REGULAR
        }
    });

export default Input;
