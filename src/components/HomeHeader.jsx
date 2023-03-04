import React, { useEffect, useState } from 'react'
import { Image, View, useColorScheme, TouchableOpacity, Modal } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import MapView, { Circle } from 'react-native-maps';
import { Slider } from '@miblanchard/react-native-slider';
import { navigate } from '../navigation';
import { icons } from '../constants/icons';
import { colors } from '../constants/colors';
import { HEIGHT, WIDTH } from '../constants/dimensions';
import { H3Text, Button, NormalText, Input } from '../widgets';

const HomeHeader = () => {
    const [locationModal, setLocationModal] = useState(false)
    const [radius, setRadius] = useState(5)
    const [region, setRegion] = useState({
        latitude: 28.698,
        longitude: 77.210,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    useEffect(() => {
        // getUserLocation(setRegion)
    }, [])
    return (
        <View style={{ backgroundColor: colors[useColorScheme()]['background'], padding: 20, alignItems: 'center', elevation: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: "baseline", justifyContent: 'space-between', paddingBottom: 20, width: WIDTH - 40 }}>
                <TouchableOpacity onPress={
                    () => {
                        setLocationModal(!locationModal)
                    }
                }>
                    <Image source={{ uri: icons[useColorScheme()]['location'] }} style={{ width: 25, height: 25 }} resizeMode={"center"} />
                </TouchableOpacity>
                <Image source={{ uri: icons[useColorScheme()]['logo'] }} style={{ width: WIDTH / 2, height: "100%" }} resizeMode={"center"} />
                <TouchableOpacity onPress={
                    () => {
                        navigate('NotificationsScreen')
                    }
                }>
                    <Image source={{ uri: icons[useColorScheme()]['bell'] }} style={{ width: 25, height: 25 }} resizeMode={"center"} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>

                <Input placeholder={"Search for anything..."} onChangeText={() => {

                }}
                    icon={icons[useColorScheme()]['search']}
                />
            </View>
            <Modal visible={locationModal} >
                <View style={{ flex: 1, backgroundColor: colors[useColorScheme()]['background'], width: WIDTH, height: HEIGHT-100 }}>
                    <View style={{ backgroundColor: colors[useColorScheme()]['background'], width: WIDTH, padding: 10 }}>
                        <H3Text text={"Select your Location first!"} />
                    </View>
                    <MapView
                        provider='google'
                        initialRegion={region}
                        region={region}
                        style={{
                            width: WIDTH,
                            height: HEIGHT - HEIGHT / 4
                        }}
                        userInterfaceStyle={useColorScheme()}
                        showsUserLocation={true}
                        onRegionChangeComplete={(e) => {
                            setRegion(e)
                        }}
                    >
                        <Circle center={region} radius={1000 * radius} strokeColor={colors[useColorScheme()]['primary']} strokeWidth={2} fillColor={colors[useColorScheme()]['primary'] + '26'}
                        />
                    </MapView>

                    <View style={{ alignItems: 'center', flex: 1, backgroundColor: colors[useColorScheme()]['background'], width: WIDTH, height: 100, padding: 10 }}>
                        <View style={{ width: WIDTH - 30 }}>
                            <NormalText text={"Radius: " + Math.round(radius * 100) / 100} />
                            <Slider
                                value={radius}
                                onValueChange={value => setRadius(value)}
                                minimumValue={1}
                                maximumValue={25}
                                thumbTintColor={colors[useColorScheme()]['secondary']}
                                minimumTrackTintColor={colors[useColorScheme()]['secondary']}
                            />
                        </View>
                        <Button title={"Set Location"} onPress={() => {
                            setLocationModal(false)
                            // UPDATE USER LOCATION HERE
                            // updateLogin(setLocationModal)
                            // setSearchingLocation({
                            //     location: region.latitude + ',' + region.longitude,
                            //     radius: radius
                            // })
                        }} />
                    </View>
                    <Image source={{ uri: icons[useColorScheme()]['location'] }} style={{ width: 25, height: 25, position: "absolute", left: WIDTH / 2 - WIDTH / 21, top: HEIGHT / 2 - HEIGHT / 11 }} resizeMode={"center"} />

                </View>
            </Modal>
        </View>
    )
}

export default HomeHeader