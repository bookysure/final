import React, { useState } from "react";
import { View, TextInput, Text, useColorScheme, Image } from 'react-native'
import { Icons } from "../components";
import { colors } from "../constants/colors";
import { WIDTH } from "../constants/dimensions";
import NormalText from "./Text/NormalText";
import Touchable from "./Touchable";

const Radio = ({ list, multiple = false, style }) => {
    const [getValue, setValue] = useState(multiple ? [] : null)
    const theme = useColorScheme();
    console.info(getValue, 'getValue')
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            {
                list.map((item, index) => {
                    return (
                        <Touchable
                            onPress={() => {
                                if (multiple) {
                                    var listValues = getValue == null ? [] : getValue;
                                    const ind = listValues.indexOf(item.value)
                                    if (ind >= 0) {
                                        listValues.splice(ind, 1)
                                    } else {
                                        listValues.push(item.value)
                                    }
                                    setValue(listValues)
                                } else {
                                    setValue(item.value == getValue ? null : item.value)
                                }
                                console.info(getValue, 'getValue')
                            }}
                            style={[{
                                borderWidth: 1,
                                borderColor: colors[theme]['secondary'],
                                paddingHorizontal: 7,
                                paddingVertical: 3,
                                borderRadius: 5,
                                margin: 5,
                                width: WIDTH - WIDTH / 8,
                                backgroundColor: colors[theme]['background'],
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }, style]}
                        >
                            <NormalText text={item.label + ' '} style={{ fontSize: 16 }} />
                            {
                                multiple ?
                                    getValue.indexOf(item.value) >= 0 ?
                                        <Icons icon={'check'} size={15} /> :
                                        null
                                    :
                                    item.value == getValue ?
                                        <Icons icon={'check'} size={15} /> :
                                        null
                            }
                        </Touchable>
                    )
                })
            }
        </View >
    )
}

export default Radio