import React from "react";
import { View, TextInput, Text, useColorScheme, Image, ImageBackground } from 'react-native'
import { colors } from "../constants/colors";

const Label = ({ text }) => {
    return (
        <View>
            {
                text &&
                <ImageBackground source={useColorScheme() == 'dark' ? require('../assets/label-dark.png') : require('../assets/label-light.png')} style={{ paddingVertical: 6, paddingRight: 6, paddingLeft: 11 }} resizeMode={'center'}>
                    <Text
                        style={{
                            color: colors[useColorScheme()]['secondary'],
                            fontSize: 10,
                        }}
                    >
                        {text}
                    </Text>
                </ImageBackground>
            }
        </View>
    )
}

export default Label