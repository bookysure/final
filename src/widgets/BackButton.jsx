import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { goBack } from '../navigation';
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

const BackButton = ({ customStyle = {} }) => {
    return (
        <Touchable style={[styles.container, , customStyle]} onPress={() => goBack()}>
            <FastImage tintColor={'#000'} source={require('../assets/icons/backbutton.png')} style={styles.buttonStyle} />
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center'
    },
    buttonStyle: {
        height: 30,
        width: 30
    }
});

export default BackButton;
