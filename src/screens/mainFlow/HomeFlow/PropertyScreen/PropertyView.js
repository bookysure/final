import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Input, NormalText, H4Text, H6Text } from '../../../../widgets'
import { HEIGHT, WIDTH } from '../../../../constants/dimensions';
import { colors } from '../../../../constants/colors';
import { ImageSlider } from "react-native-image-slider-banner";
import { icons } from '../../../../constants/icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const PropertyView = ({ route }) => {
    const theme = useColorScheme();
    var scrollY = useState(new Animated.Value(0))[0]
    const SLIDER_HEIGHT_MIN = 0;
    const SLIDER_HEIGHT_MAX = HEIGHT / 2.5;
    const INFO_HEIGHT_MAX = HEIGHT;
    const SLIDER_HEIGHT = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX],
        outputRange: [SLIDER_HEIGHT_MAX, SLIDER_HEIGHT_MIN],
        extrapolate: 'clamp'
    })
    const SLIDER_SIZE = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })
    return (
        <View style={{ backgroundColor: colors[theme]['background-light'] }}>
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
                {/* ---------------------------------------------------------------------------------- */}
                <View>

                    <Animated.View
                        style={{ width: WIDTH, height: SLIDER_HEIGHT, alignItems: 'center', justifyContent: 'center', transform: [{ scale: SLIDER_SIZE }] }}
                    >
                        <ImageSlider
                            data={data.images}
                            timer={5000}
                            autoPlay={true}
                            onItemChanged={(item) => console.log("item1", item)}
                            showIndicator={true}
                            preview={true}
                            caroselImageStyle={{ resizeMode: "cover", width: WIDTH, height: HEIGHT / 2.5, }}
                        />
                    </Animated.View>
                    <View style={{ padding: 20, borderTopRightRadius: 25, borderTopLeftRadius: 25, top: -30, backgroundColor: colors[theme]['background-light'] }}>
                        <Text style={{ color: colors[theme]['opposite'], fontSize: 20, fontWeight: '900' }}>{data.price}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'relative' }}>
                            <View>
                                <H4Text text={data.title} />
                                <NormalText text={data.address} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={{ uri: icons[theme]['share'] }} style={{ height: 20, width: 20, margin: 7 }} resizeMode={'center'} />
                                <Image source={{ uri: icons[theme]['love'] }} style={{ height: 20, width: 20, margin: 7 }} resizeMode={'center'} />
                            </View>

                        </View>
                        {/* -----------------------------OverView---------------------------------------------------------- */}
                        <View style={{ flexDirection: 'row', borderRadius: 5, margin: 10, backgroundColor: colors[theme]['primary'], padding: 10, elevation: 4, justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Image source={{ uri: icons[theme]['compass-white'] }} style={{ height: 20, width: 20, margin: 5 }} resizeMode={'center'} />
                                    <H6Text text={"North Facing"} style={{ color: colors[theme]['white'], fontWeight: '400' }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Image source={{ uri: icons[theme]['bed-white'] }} style={{ height: 20, width: 20, margin: 5 }} resizeMode={'center'} />
                                    <H6Text text={"1 bedroom"} style={{ color: colors[theme]['white'], fontWeight: '400' }} />
                                </View>
                            </View>
                            <View>

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Image source={{ uri: icons[theme]['floor-white'] }} style={{ height: 20, width: 20, margin: 5 }} resizeMode={'center'} />
                                    <H6Text text={"1st Floor"} style={{ color: colors[theme]['white'], fontWeight: '400' }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Image source={{ uri: icons[theme]['scale-white'] }} style={{ height: 20, width: 20, margin: 5 }} resizeMode={'center'} />
                                    <H6Text text={"100 sqft"} style={{ color: colors[theme]['white'], fontWeight: '400' }} />
                                </View>
                            </View>
                        </View>
                        {/* -----------------------------Nearest Places---------------------------------------------------------- */}
                        <View style={{ borderBottomWidth: 1, margin: 5, marginTop: 0, padding: 5, borderColor: colors[theme]['opposite'] }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ padding: 2, margin: 5, backgroundColor: colors[theme]['primary-light'], borderRadius: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* <MaterialCommunityIcons name="train" size={15} color={colors[theme]['primary']} /> */}
                                    <Text style={{ color: colors[theme]['opposite'], fontSize: 13 }}> {'New Delhi Railway...'} </Text>
                                </View>
                                <View style={{ padding: 2, margin: 5, backgroundColor: colors[theme]['primary-light'], borderRadius: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* <MaterialCommunityIcons name="card-account-details5432678786453" size={15} color={colors[theme]['primary']} /> */}
                                    <Text style={{ color: colors[theme]['opposite'], fontSize: 13 }}> {'New Delhi Railway...'} </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ padding: 2, margin: 5, backgroundColor: colors[theme]['primary-light'], borderRadius: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* <MaterialCommunityIcons name="arm-flex" size={15} color={colors[theme]['primary']} /> */}
                                    <Text style={{ color: colors[theme]['opposite'], fontSize: 13 }}> {'New Delhi Railway...'} </Text>
                                </View>
                                <View style={{ padding: 2, margin: 5, backgroundColor: colors[theme]['primary-light'], borderRadius: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* <MaterialCommunityIcons name="hands-pray" size={15} color={colors[theme]['primary']} /> */}
                                    <Text style={{ color: colors[theme]['opposite'], fontSize: 13 }}> {'New Delhi Railway...'} </Text>
                                </View>
                            </View>
                            <View style={{ padding: 2, margin: 5, backgroundColor: colors[theme]['primary'], borderRadius: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: colors[theme]['white'], fontSize: 13 }}> {'View More 17 nearest Places'} </Text>
                            </View>
                        </View>

                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ------------------------------------------------------------------------------------------- */}
                        <View style={{ paddingHorizontal: 20, position: 'relative', }}>
                            <Text style={{ fontSize: 22, fontWeight: '00' }}>Description</Text>
                            <Text style={{ fontWeight: '200' }}>Nobis ea minus soluta asperiores unde id doloribus ratione quas animi modi vel explicabo, velit sequi ullam eveniet rem, pariatur odio itaque.</Text>
                            <TouchableOpacity><Text style={{ color: 'lightblue' }}>read more.....</Text></TouchableOpacity>
                        </View>
                        {/* ---------------------------------------------------------------------------------------------- */}
                        <View style={{ backgroundColor: colors[useColorScheme()]['primary'], position: 'relative', alignItems: 'center', marginHorizontal: 100, paddingVertical: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: 'white' }}>Rent Now</Text>
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default PropertyView;