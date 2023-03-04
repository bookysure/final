import { StyleSheet, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../helpers/styles';
import BackButton from './BackButton';
import Touchable from './Touchable';

const Header = ({
    leftIcon,
    rightIcon,
    hideLeftIcon = false,
    title = '',
    customContainerStyle,
    onLeftIconPress = () => { },
    onRightIconPress = () => { }
}) => {
    return (
        <View style={[styles.headerContainer, customContainerStyle]}>

            {!hideLeftIcon ? (
                leftIcon ? (
                    <Touchable onPress={onLeftIconPress}>
                        <FastImage source={leftIcon} style={styles.buttonStyle} />
                    </Touchable>
                ) : (
                    <View>
                        <BackButton />
                    </View>
                )
            ) : <View />}
            <View style={styles.titleWrapper}>
                <Text style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: '700',
                    textAlign: 'center',
                    paddingLeft: 10
                }}>
                    {title}
                </Text>
            </View>
            {rightIcon ? (
                <Touchable onPress={onRightIconPress}>
                    <FastImage source={rightIcon} style={styles.buttonStyle} />
                </Touchable>
            ) : <View />}
            <View />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15
    },

    titleWrapper: {
        justifyContent: 'center'
    },
    buttonStyle: {
        height: 30,
        width: 30
    }
});

export default Header;
