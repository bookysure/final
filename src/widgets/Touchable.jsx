import React from 'react';
import { TouchableOpacity } from 'react-native';

/**
 *
 * @param disabled
 * @param onPress
 * @param children
 * @param style
 * @returns {JSX.Element}
 * @constructor
 */

const Touchable = ({
    disabled = false,
    onPress,
    children,
    style,
    activeOpacity = 0.6
}) => {
    const _Touchable = TouchableOpacity;

    return (
        <_Touchable
            activeOpacity={activeOpacity}
            children={children}
            disabled={disabled}
            style={style}
            onPress={onPress}
        />
    );
};

export default Touchable;
