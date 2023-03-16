import { Image, View, useColorScheme, } from 'react-native'
import { navigate } from '../navigation';
import { icons } from '../constants/icons';
import { colors } from '../constants/colors';
import { WIDTH } from '../constants/dimensions';
import { Touchable } from '../widgets';
import Icons from './Icons';

const HomeHeader = () => {

    return (
        <View style={{ backgroundColor: colors[useColorScheme()]['background'], padding: 20, alignItems: 'center', elevation: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: "baseline", justifyContent: 'space-between', paddingBottom: 0, width: WIDTH - 40 }}>
                <Touchable onPress={
                    () => {
                        navigate('AddPropertyScreen')
                    }
                }>
                    <Icons icon={'add-building'} size={30} />
                </Touchable>
                <Image source={{ uri: icons[useColorScheme()]['logo'] }} style={{ width: WIDTH / 2, height: "100%" }} resizeMode={"center"} />
                <Touchable onPress={
                    () => {
                        navigate('NotificationsScreen')
                    }
                }>
                    <Icons icon={'bell'} size={25} />

                </Touchable>
            </View>
        </View>
    )
}

export default HomeHeader