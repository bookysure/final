import { StatusBar, TextInput, Text, StyleSheet, useColorScheme } from 'react-native';

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';

import { AppNavigation } from '../navigation';


const AppWrapper = () => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView edges={['top']} style={styles(insets).appWrapper}>
            <StatusBar backgroundColor={colors[useColorScheme()]['primary']} barStyle={'light-content'} />
            <AppNavigation />
        </SafeAreaView>
    );
};

const styles = (insets) =>
    StyleSheet.create({
        appWrapper: {
            flex: 1,
            backgroundColor: colors.bg
        }
    });

export default AppWrapper;
