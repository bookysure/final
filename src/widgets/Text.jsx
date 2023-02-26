import { StyleSheet, Text as _Text, useColorScheme } from 'react-native';
import { colors } from '../constants/colors';



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
    fontSize = 14,
    fontFamily = '',
    color = colors[useColorScheme()]['opposite'],
    children = '',
    opacity = 1,
    customStyle = {},
    isAnimated = false,
    fontWeight = '500',
    text,
    ...props
}) => {
    const style = styles(fontSize, fontFamily, color, opacity, fontWeight);

    const resultProps = {
        children,
        style: [style.text, customStyle],
        ...props
    };

    return <_Text {...resultProps} >{text}</_Text>;
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
