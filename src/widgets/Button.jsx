import { fonts } from '../helpers/styles';
import { StyleSheet, View, useColorScheme, Text, ActivityIndicator } from 'react-native';
import { colors } from '../constants/colors';
import { WIDTH } from '../constants/dimensions';
import Touchable from './Touchable';

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


const Button = ({ disabled = false, leftIcon, title = '', onPress, loading, type, style }) => {

    return (
        <Touchable
            onPress={
                () => {
                    onPress ?
                        onPress()
                        :
                        console.log('Asign function for button ' + title)
                }
            }
            style={[{
                backgroundColor: colors[useColorScheme()][type ? 'secondary' : 'primary'],
                width: WIDTH * 3 / 4,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                paddingVertical: 3
            }, style]}
            disabled={
                loading ?
                    true
                    :
                    false
            }
        >
            {
                loading ?
                    <ActivityIndicator color={colors[useColorScheme()]['white']} />
                    :
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: colors[useColorScheme()]['white'],
                            textTransform: 'uppercase'
                        }}>
                        {title}
                    </Text>
            }

        </Touchable>
    );
};

export default Button;
