import React from 'react'
import { View, Image, useColorScheme } from 'react-native'
import { NormalText, H5Text } from '../widgets'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { colors } from '../constants/colors'
import { icons } from '../constants/icons'
const NotFound = ({
    title, description
}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={useColorScheme() == 'dark' ? require('../assets/not-found-dark.png') : require('../assets/not-found-light.png')}
                style={{
                    width: WIDTH - 50,
                    height: HEIGHT / 3,

                }}
                resizeMode={'center'}
            />
            <H5Text text={title} />
            <NormalText text={description} />
        </View>
    )
}

export default NotFound