
import { StyleSheet, View, Animated, useColorScheme, TouchableOpacity, Text as Text1 } from "react-native";
import { Text } from "../../../components";
import { Button } from "../../../widgets";
import { colors } from "../../../constants/colors";
import { GetStarted } from "../../../components";
import { HEIGHT, WIDTH } from "../../../constants/dimensions";
import { navigate } from "../../../navigation";


const GetStartedView = ({ value, slides, get, setGet, moveLeft }) => {

    return (
        <View
            style={{
                backgroundColor: colors[useColorScheme()]['background'],
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                flex: 1
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
                            navigate('LoginScreen')
                            // navigation.replace('PhoneNumberScreen')
                        }}
                    />
                }
            </View>
        </View>
    )
}

export default GetStartedView