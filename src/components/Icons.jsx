import React from 'react'
import { View, Image, useColorScheme } from 'react-native'
import { icons } from '../constants/icons'
const Icons = ({
    icon = 'logo' | 'home'
}) => {
    return (
        <Image
            source={{ uri: icons[useColorScheme()][icon] }}
            style={{
                width: 20,
                height: 20,
            }}
            resizeMode={'center'}
        />
    )
}

export default Icons