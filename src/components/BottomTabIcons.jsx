import { useEffect, useState } from "react";
import { Animated, Easing, TouchableWithoutFeedback, View, Text, useColorScheme } from "react-native";
import { colors } from "../constants/colors";
import { icons } from "../constants/icons";
import { navigate } from "../navigation";

export function BottomTabIcons({ title, icon, name, focused, currentRoute }) {
    var opacity = useState(new Animated.Value(0))[0];
    useEffect(() => {
        if (focused) {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1000,
                easing: Easing.bounce,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                easing: Easing.bounce,
                useNativeDriver: false
            }).start()
        }
    }, [focused])
    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 25]
    });
    const spin = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '1080deg']
    });
    const buttonFocusedView = { backgroundColor: colors[useColorScheme()]['secondary'], padding: 0, borderRadius: 40, bottom: 0, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: colors[useColorScheme()]['background'], width: 50, height: 50 }
    const txt = { fontSize: 10, color: colors[useColorScheme()]['white'], fontWeight: '200', textTransform: 'uppercase' };
    return (
        <View style={{}}>
            <TouchableWithoutFeedback onPress={() => { navigate(name) }} >
                {focused ?
                    <View style={{ borderRadius: 40, top: -25 }}>
                        <Animated.View style={[buttonFocusedView,]}>
                            <Animated.Image source={{ uri: icons[useColorScheme() == 'dark' ? 'light' : 'dark'][icon] }} style={{ width: size, height: size, transform: [{ rotate: spin }] }} resizeMode={'center'} />
                        </Animated.View>
                    </View>
                    :
                    <View style={{ padding: 10, paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Animated.Image source={{ uri: icons[useColorScheme()][icon] }} style={{ width: size, height: size, }} resizeMode={'center'} />
                        <Text style={txt}>{title}</Text>
                    </View>
                }
            </TouchableWithoutFeedback>
        </View>
    )
}