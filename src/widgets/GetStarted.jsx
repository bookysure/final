import React from 'react'
import { View, Image, useColorScheme, Text as NormalText } from 'react-native'
// import { NormalText } from '../texts/NormalText'
import { WIDTH } from '../constants/dimensions'
import { colors } from '../constants/colors'


const GetStarted = ({ image, text }) => {
    return (
        <View
            style={{
                width: WIDTH,
                backgroundColor: colors[useColorScheme()]['white'],

            }}
        >
            <Image
                source={image}
                style={{
                    width: WIDTH,
                    height: WIDTH,
                }}
                resizeMode={'center'}
            />
            <NormalText
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors[useColorScheme()]['secondary'],
                    padding: 20,
                    color: colors[useColorScheme()]['white'],
                    marginTop: 10,
                    textAlign: 'center',
                }}
                text={text}
            />
        </View>


    )
}

export default GetStarted;