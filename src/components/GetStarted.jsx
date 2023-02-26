import React from 'react'
import { View, Image, useColorScheme,  } from 'react-native'
// import { NormalText } from '../texts/NormalText'
import { WIDTH } from '../constants/dimensions'
import { colors } from '../constants/colors'
import { Text } from '../widgets'


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
            <Text
                customStyle={{
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