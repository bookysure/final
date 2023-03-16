import React from 'react'
import { View, Image, useColorScheme } from 'react-native'
import { icons } from '../constants/icons'
const Icons = ({
    icon = 'logo' | 'home',
    size = 20,
    opposite = false
}) => {
    return (
        <Image
            source={{ uri: icons[opposite ? useColorScheme() == 'dark' ? 'light' : 'dark' : useColorScheme()][icon] }}
            style={{
                width: size,
                height: size,
            }}
            resizeMode={'center'}
        />
    )
}

export default Icons