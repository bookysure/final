import { View } from "react-native"
import { Header } from "../../../../widgets"

export const HomeFlowView = () => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <Header hideLeftIcon title="Home" />
        </View>
    )
}