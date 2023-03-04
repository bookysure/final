import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import { WIDTH } from '../../../../constants/dimensions'
import { Breadcrumb, Icons, Label, NotFound } from '../../../../components'
import { H4Text, H6Text, NormalText } from '../../../../widgets'
import { colors } from '../../../../constants/colors'

export const NotificationsView = ({ notifications }) => {
    const theme = useColorScheme()


    return (
        <View style={{ backgroundColor: colors[useColorScheme()]['background-light'], flex: 1, }}>
            <Breadcrumb view={
                <View style={{ flex: 1, width: WIDTH - 20 }}>
                    {
                        notifications != null && notifications.length != 0 ?
                            notifications.map((item, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={{ marginVertical: 5 }}
                                    >
                                        <H6Text text={item.title} />
                                        <View
                                        >
                                            {item.data.map((dataSub, num) => {
                                                return (

                                                    <View key={num} style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        padding: 10,
                                                        paddingHorizontal: 15,
                                                        backgroundColor: colors[theme]['background'],
                                                        marginVertical: 2,
                                                        borderRadius: 7,
                                                        alignItems: 'center'
                                                    }}>
                                                        <View
                                                            style={{
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                backgroundColor: colors[theme]['primary'],
                                                                width: 40,
                                                                height: 40,
                                                                borderRadius: 80
                                                            }}
                                                        >
                                                            <Icons icon={'home-white'} />
                                                        </View>
                                                        <View
                                                            style={{
                                                                // backgroundColor: 'yellow',
                                                                flex: 1,
                                                                marginHorizontal: 10

                                                            }}
                                                        >
                                                            <NormalText text={dataSub.title} style={{ fontWeight: '600' }} />
                                                            {
                                                                dataSub.discription &&
                                                                <NormalText text={dataSub.discription} style={{ fontSize: 12 }} />
                                                            }
                                                        </View>
                                                        <View
                                                            style={{
                                                                justifyContent: 'center',
                                                                alignItems: 'flex-end',
                                                                // borderWidth:1,

                                                            }}
                                                        >
                                                            <Label text={dataSub.label} />
                                                            <NormalText text={dataSub.time} style={{ color: colors[theme]['grey'] }} />
                                                        </View>
                                                    </View>


                                                );
                                            })}
                                        </View>
                                    </View>
                                );
                            })
                            :
                            <NotFound title={"Sorry! No Match Found"} description={"Please be paitent we will notify you with amazing offers soon! Don't Worry"} />
                    }
                </View>

            }
                title={"Notifications"}
                parent={"Home"}
            />
        </View>
    )
}

const sty = StyleSheet.create({
    scrollBase: {
        backgroundColor: 'white',
        flex: 1,
        position: 'relative',
        bottom: -150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    topBar: {
    },
    oneBar: {
    },
})

