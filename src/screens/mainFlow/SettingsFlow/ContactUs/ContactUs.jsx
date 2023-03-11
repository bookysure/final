import { FlatList, TouchableOpacity, useColorScheme, View } from "react-native"
import { Icons } from "../../../../components";
import { colors } from "../../../../constants/colors"
import { WIDTH } from "../../../../constants/dimensions";
import { H2Text, H4Text, H5Text } from "../../../../widgets"
const ContactUsView = ({
    data = [
        {
            label: 'Mail Us',
            icon: 'mail',
            type: 'external',
            navigate: '',
            params: {}
        },
        {
            label: 'Chat with Us',
            icon: 'chat',
            type: 'internal',
            navigate: 'chat',
            params: { thread: 'support-team' }
        }
    ]
}) => {
    const theme = useColorScheme();
    return (
        <View style={{ flex: 1, backgroundColor: colors[theme]['background'], alignItems: 'center', justifyContent: 'center' }}>
            <H2Text text={'Contact Us'} />
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ width: WIDTH / 3, height: WIDTH / 3, justifyContent: 'center', alignItems: 'center', backgroundColor: colors[theme]['background'], elevation: 10, padding: 10, margin: 10, borderRadius: 10 }}>
                            <Icons icon={item.icon} size={40} />
                            <H5Text text={item.label} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ContactUsView