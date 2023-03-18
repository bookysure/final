import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import { WIDTH } from '../../../../constants/dimensions'
import { Breadcrumb, Icons, Label, NotFound } from '../../../../components'
import { H4Text, H6Text, NormalText } from '../../../../widgets'
import { colors } from '../../../../constants/colors'

export const AddPropertyView = () => {
    const theme = useColorScheme()


    return (
        <View style={{ backgroundColor: colors[useColorScheme()]['background-light'], flex: 1, }}>
            <Breadcrumb view={
                <View style={{ flex: 1, width: WIDTH - 20 }}>
                    
                </View>
            }
                title={"Add Property"}
                parent={"Home"}
            />
        </View>
    )
}