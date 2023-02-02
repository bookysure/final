import { StyleSheet, Text as _Text } from 'react-native';

import { colors } from '../helpers/styles';

/**
 *
 * @param fontSize
 * @param fontFamily
 * @param color
 * @param children
 * @param opacity
 * @param customStyle
 * @param isAnimated
 * @param props
 * @param fontWeight
 * @returns {JSX.Element}
 * @private
 */
const Text = ({
    fontSize = 16,
    fontFamily = '',
    color = colors.white,
    children = '',
    opacity = 1,
    customStyle = {},
    isAnimated = false,
    fontWeight = '500',
    ...props
}) => {
    const style = styles(fontSize, fontFamily, color, opacity, fontWeight);

    const resultProps = {
        children,
        style: [style.text, customStyle],
        ...props
    };

    return <_Text {...resultProps} />;
};

const styles = (fontSize, fontFamily, color, opacity, fontWeight) =>
    StyleSheet.create({
        text: {
            fontSize,
            fontFamily,
            color,
            opacity,
            lineHeight: fontSize + 8,
            fontWeight
        }
    });

export default Text;
