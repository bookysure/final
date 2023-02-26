
import { StyleSheet, View, Animated, useColorScheme, TouchableOpacity, Text as Text1 } from "react-native";
import { Text } from "../../../components";
import { Button } from "../../../widgets";
import { colors } from "../../../constants/colors";
import { GetStarted } from "../../../components";
import { HEIGHT, WIDTH } from "../../../constants/dimensions";
import { navigate } from "../../../navigation";


const LocationView = ({ askForPermission }) => {

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

            <GetStarted image={'https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg'} text={'Last Step, BookySure collects the Location data to delivery you the best services and offers.'} />

            <View style={{ marginTop: 50 }}>
                <Button title={"Allow Location Permission"} onPress={() => {
                    askForPermission()
                }} />
            </View>
        </View>
    )
}

export default LocationView