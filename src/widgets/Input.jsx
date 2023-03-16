import React from "react";
import { View, TextInput, Text, useColorScheme, Image } from 'react-native'
import { colors } from "../constants/colors";
import { WIDTH } from "../constants/dimensions";

const Input = ({ maxLength, value, placeholder, onChangeText, keyboardType, phone, autoFocus, icon, style }) => {
    return (
        <View>
            <View
                style={[{
                    borderWidth: 1,
                    borderColor: colors[useColorScheme()]['secondary'],
                    width: WIDTH * 3 / 4,
                    paddingHorizontal: 10,
                    borderRadius: 40,
                    backgroundColor: colors[useColorScheme()]['background'],
                    margin: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                }, style]}
            >

                {
                    phone && <Text style={{
                        fontSize: 16,
                        color: colors[useColorScheme()]['opposite'],
                    }}>
                        +91 </Text>
                }
                <TextInput
                    autoFocus={autoFocus}
                    placeholderTextColor={colors[useColorScheme()]['opposite']}
                    placeholder={placeholder ? placeholder : 'Enter name'}
                    value={value}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    style={{
                        fontSize: 14,
                        color: colors[useColorScheme()]['opposite'],
                        flex: 1
                    }}
                    onChangeText={
                        (val) => {
                            onChangeText ?
                                onChangeText(val)
                                :
                                console.log('Assign onChangeText for ' + placeholder)
                        }
                    }
                />
                {
                    icon &&
                    <Image source={{ uri: icon }} style={{ width: 17, height: 17 }} resizeMode={"center"} />
                }
            </View>
        </View>
    )
}

export default Input