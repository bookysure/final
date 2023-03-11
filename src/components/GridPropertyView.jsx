import { StyleSheet, Text, View, Image, TouchableOpacity, useColorScheme } from 'react-native'
import { navigate } from '../navigation'
import { colors } from '../constants/colors'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { H5Text, H6Text, NormalText } from '../widgets'
import { Label } from '.'


const GridPropertyView = ({ item, index }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigate('PropertyScreen', { item })
            }}
            style={{ backgroundColor: colors[useColorScheme()]['background'], elevation: 6, margin: 5, borderRadius: 10 }}>

            <View style={{
                margin: 7,
                borderRadius: 5,
            }}>
                <Image source={{ uri: item.img }} style={{ width: '100%', height: HEIGHT / 4, borderRadius: 10 }} resizeMode={'contain'} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, top: -190 }}>
                    <Label text={'family'} />
                </View>
                <View style={{ paddingHorizontal: 5, top: -15 }}>
                    {/* -------------------------------------------------------------------- */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <H5Text text={item.title} />
                        <H6Text text={item.price} style={{ color: colors[useColorScheme()]['opposite'] }} />
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <NormalText text={item.address} />
                    </View>
                    {/* ---------------------------------------------------------------------- */}
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around' }}>
                        {
                            item.facilities.map((item) => (
                                <NormalText text={item} />
                            ))
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default GridPropertyView