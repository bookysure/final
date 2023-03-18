import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import { WIDTH } from '../../../../constants/dimensions'
import { Breadcrumb, Icons, Label, NotFound } from '../../../../components'
import { H2Text, H4Text, H5Text, H6Text, Input, NormalText, Radio } from '../../../../widgets'
import { colors } from '../../../../constants/colors'

export const AddPropertyView = () => {
    const theme = useColorScheme()


    return (
        <View style={{ backgroundColor: colors[useColorScheme()]['background-light'], flex: 1, }}>
            <Breadcrumb view={
                <View style={{ flex: 1, width: WIDTH - 20, alignItems: 'baseline', flex: 1 }}>
                    <H6Text text={'What kind of real estate do you own?'} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Radio list={[{ label: 'Rent', value: 'Rent' }, { label: 'PG', value: 'PG' }]} multiple={true} />
                    </View>
                    <H6Text text={'You want to?'} />

                </View>
            }
                title={"Add Property Details"}
                parent={"Home"}
            />
        </View>
    )
}