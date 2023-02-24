
import { StyleSheet, View, Animated, useColorScheme } from "react-native";
import { Text } from "../../../components";
import { Button, GetStarted } from "../../../widgets";
import { colors } from "../../../constants/colors";
import { HEIGHT, WIDTH } from "../../../constants/dimensions";

export const GetStartedView = ({ value, slides, get, setGet }) => {




    return (
        <View
            style={{
                backgroundColor: colors[useColorScheme()]['background'],
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                flex:1
            }}
        >

            <Animated.View
                style={{
                    height: HEIGHT / 2,
                    width: 3 * WIDTH,
                    backgroundColor: colors[useColorScheme()]['background'],
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: 2 * WIDTH,
                    transform: [{ translateX: value.x }]
                }}
            >
                {
                    slides.map((item, index) => {
                        return (
                            <GetStarted key={index} image={item.img} text={item.text} />
                        )
                    })
                }
            </Animated.View>


            <View style={{ marginTop: 90 }}>
                {get != slides.length ?
                    <Button
                        title={'next'}
                        onPress={() => {
                            moveLeft()
                            setGet(get + 1)
                        }}
                    />
                    :
                    <Button
                        title={'get started'}
                        onPress={() => {
                            navigation.replace('PhoneNumberScreen')
                        }}
                    />
                }
            </View>
        </View>
    )
}