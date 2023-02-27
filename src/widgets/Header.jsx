import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text, Touchable } from '../components';
import { colors } from '../helpers/styles';
import BackButton from './BackButton';

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
            <View style={styles.leftContent}>
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
                ) : null}
                <View style={styles.titleWrapper}>
                    <Text fontSize={20} fontWeight={'900'}>
                        {title}
                    </Text>
                </View>
            </View>
            {rightIcon ? (
                <Touchable onPress={onRightIconPress}>
                    <FastImage source={rightIcon} style={styles.buttonStyle} />
                </Touchable>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    leftContent: {
        flexDirection: 'row'
    },
    titleWrapper: {
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    buttonStyle: {
        height: 30,
        width: 30
    }
});

export default Header;
