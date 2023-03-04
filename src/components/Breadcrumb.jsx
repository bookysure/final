import React, { useState } from 'react'
import { View, useColorScheme, Animated, ImageBackground, TouchableOpacity } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { colors } from '../constants/colors'
import Icons from './Icons'
import { NormalText, H3Text, H6Text } from '../widgets'
import { goBack, navigate } from '../navigation'

const Breadcrumb = ({
    view, title, parent
}) => {
    console.log(HEIGHT)
    const theme = useColorScheme();
    var scrollY = useState(new Animated.Value(0))[0]
    const HEADER_HEIGHT_MIN = 0;
    const HEADER_HEIGHT_MAX = 50;
    const INFO_HEIGHT_MAX = HEIGHT / 5;
    const HEADER_HEIGHT = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX / 3],
        outputRange: [HEADER_HEIGHT_MIN, HEADER_HEIGHT_MAX],
        extrapolate: 'clamp'
    })
    const HEADER_PADDING = scrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT_MAX - HEADER_HEIGHT_MIN],
        outputRange: [0, 10],
        extrapolate: 'clamp'
    })
    const INFO_HEIGHT = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX],
        outputRange: [INFO_HEIGHT_MAX, 0],
        extrapolate: 'clamp'
    })
    const INFO_SCALE = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX / 4],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })
    const BACK_BUTTON = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX / 2],
        outputRange: [10, 0],
        extrapolate: 'clamp'
    })
    const TITLE_SLIDE = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX / 6],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
    return (
        <View>
            <Animated.View style={{
                backgroundColor: colors[useColorScheme()]['primary'],
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: HEADER_PADDING,
                paddingHorizontal: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                position: 'absolute',
                top: 0,
                left: 0,
                width: WIDTH,
                zIndex: 1,
                height: HEADER_HEIGHT
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Animated.View style={{ top: BACK_BUTTON }}>
                        <TouchableOpacity onPress={() => {
                            goBack()
                        }}>
                            <Icons icon={'left-white'} />
                        </TouchableOpacity>

                    </Animated.View>
                    <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{ scale: TITLE_SLIDE }] }}>
                        <H6Text text={title} />
                    </Animated.View>
                </View>
            </Animated.View>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: false,
                    },)}
            >

                <View
                    style={{
                        backgroundColor: colors[useColorScheme()]['primary'],
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,

                    }}
                >

                    <Animated.View style={{ height: INFO_HEIGHT, }}>
                        <ImageBackground source={theme == 'dark' ? require('../assets/logo-dark.png') : require('../assets/logo-light.png')} style={{ position: 'absolute', width: WIDTH, height: HEIGHT / 4, flex: 1, }} resizeMode={'contain'}>
                            <Animated.View style={{ justifyContent: 'center', alignItems: 'center', transform: [{ scale: INFO_SCALE }] }}>
                                <View style={{
                                    // backgroundColor:'red',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginVertical: 30
                                }}>
                                    <H3Text text={title} style={{

                                    }} />
                                    <NormalText text={parent + ' > ' + title} style={{
                                        color: colors[useColorScheme()]['white']

                                    }} />
                                </View>
                            </Animated.View>
                        </ImageBackground>
                    </Animated.View>
                </View >

                <View style={{ flex: 1, padding: 10, paddingBottom: 60, marginBottom: -10, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, top: -20, backgroundColor: colors[useColorScheme()]['background-light'] }}>

                    <View style={{
                        backgroundColor: colors[useColorScheme()]['grey'],
                        height: 5,
                        width: WIDTH / 8,
                        marginBottom: 15,
                        borderRadius: 150,
                    }}>
                    </View>
                    {view}
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default Breadcrumb