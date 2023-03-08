import { View, useColorScheme, Animated, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { NormalText, H3Text, H4Text, Button, H1Text, H6Text } from '../../../../widgets'
import { Icons, Label, NotFound } from '../../../../components'
import { HEIGHT, WIDTH } from '../../../../constants/dimensions'
import { colors } from '../../../../constants/colors'


const WalletScreenView = ({
    transactions=[
        {
            title:'2020-10-05',
            data:[
                {
                  title:'No',
                  label:'Success',
                  time:'10:20',
                  amount:'100'  
                }
            ]
        }
    ]
}) => {
    const theme = useColorScheme();
    var scrollY = useState(new Animated.Value(0))[0]
    const HEADER_HEIGHT_MIN = 0;
    const HEADER_HEIGHT_MAX = 50;
    const INFO_HEIGHT_MAX = HEIGHT / 3;
    const HEADER_HEIGHT = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX / 3],
        outputRange: [HEADER_HEIGHT_MIN, HEADER_HEIGHT_MAX],
        extrapolate: 'clamp'
    })
    const HEADER_PADDING = scrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT_MAX - HEADER_HEIGHT_MIN],
        outputRange: [0, 10],
        extrapolate: 'clamp'
    })
    const INFO_HEIGHT = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX],
        outputRange: [INFO_HEIGHT_MAX, 0],
        extrapolate: 'clamp'
    })
    const INFO_SCALE = scrollY.interpolate({
        inputRange: [0, INFO_HEIGHT_MAX / 2],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })

    return (
        <View
            style={{
                backgroundColor: colors[useColorScheme()]['background-light'],
                flex: 1,
                paddingBottom: 60
            }}
        >
            <Animated.View style={{
                backgroundColor: colors[useColorScheme()]['primary'],
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: HEADER_PADDING,
                paddingHorizontal: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                position: 'absolute',
                top: 0,
                left: 0,
                width: WIDTH,
                zIndex: 1,
                height: HEADER_HEIGHT
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <NormalText text={'INR '} />
                    <H6Text text={'26,435.56'} />

                </View>
                <NormalText text={'+'} style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                }} />
            </Animated.View>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: false,
                    },)}
            >
                <View
                    style={{
                        backgroundColor: colors[useColorScheme()]['primary'],
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,

                    }}
                >

                    <Animated.View style={{ height: INFO_HEIGHT, }}>
                        <ImageBackground source={theme == 'dark' ? require('../../../../assets/logo-dark.png') : require('../../../../assets/logo-light.png')} style={{ width: WIDTH, }} resizeMode={'contain'}>
                            <Animated.View style={{ justifyContent: 'center', alignItems: 'center', transform: [{ scale: INFO_SCALE }] }}>
                                <View style={{
                                    // backgroundColor:'red',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginVertical: 30
                                }}>
                                    <NormalText text={"INR"} style={{
                                        color: colors[useColorScheme()]['white']

                                    }} />
                                    <H1Text text={"25,455"} style={{

                                    }} />
                                    <NormalText text={'.05'} style={{
                                        color: colors[useColorScheme()]['white']

                                    }} />
                                </View>

                                <Button title={"Add Money"} style={{ backgroundColor: colors[useColorScheme()]['secondary'] }} />

                                <View style={{
                                    flexDirection: 'row',
                                    marginVertical: 30,
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    margin: 20

                                }}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <NormalText text={'This Monthfgjgj gj gj '}
                                            style={{
                                                color: colors[useColorScheme()]['white']
                                            }}
                                        />
                                        <NormalText text={'24.56'}
                                            style={{
                                                color: colors[useColorScheme()]['white']
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <NormalText text={'This Month '}
                                            style={{
                                                color: colors[useColorScheme()]['white']
                                            }}
                                        />
                                        <NormalText text={'24.56'}
                                            style={{
                                                color: colors[useColorScheme()]['white']
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <NormalText text={'This Month '}
                                            style={{
                                                color: colors[useColorScheme()]['white']
                                            }}
                                        />
                                        <NormalText text={'24.56'}
                                            style={{
                                                color: colors[useColorScheme()]['white']
                                            }}
                                        />
                                    </View>
                                </View>
                            </Animated.View>
                        </ImageBackground>
                    </Animated.View>
                </View >
                <View style={{ elevation: 3, padding: 10, paddingBottom: 20, marginBottom: -20, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, top: -20, backgroundColor: colors[useColorScheme()]['background-light'] }}>

                    <View style={{
                        backgroundColor: colors[useColorScheme()]['grey'],
                        height: 5,
                        width: WIDTH / 8,
                        marginBottom: 15,
                        borderRadius: 150,
                    }}>
                    </View>
                    <H4Text text={"Transactions"} />
                    <View style={{ flex: 1, width: WIDTH - 20 }}>
                        {
                            transactions != null && transactions.length != 0 ?
                                transactions.map((item, index) => {
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
                                                            alignItems: 'center',
                                                            elevation: 2
                                                        }}>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                <View
                                                                    style={{
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        backgroundColor: colors[theme]['primary'],
                                                                        width: 40,
                                                                        height: 40,
                                                                        borderRadius: 80,
                                                                        marginRight: 7
                                                                    }}
                                                                >
                                                                    <Icons icon={'home-white'} />
                                                                </View>
                                                                <View
                                                                    style={{
                                                                        alignItems: 'flex-start'

                                                                    }}
                                                                >
                                                                    <NormalText text={dataSub.title} style={{ fontWeight: '600' }} />
                                                                    <Label text={dataSub.label} />
                                                                    <NormalText text={dataSub.time} style={{ color: colors[theme]['grey'] }} />
                                                                </View>
                                                            </View>
                                                            <View
                                                                style={{
                                                                    justifyContent: 'center',
                                                                    alignItems: 'flex-end',
                                                                    // borderWidth:1,

                                                                }}
                                                            >
                                                                <H3Text text={'₹' + dataSub.amount} style={{}} />
                                                            </View>
                                                        </View>


                                                    );
                                                })}
                                            </View>
                                        </View>
                                    );
                                })
                                :
                                <NotFound title={"Sorry! No Transaction Found"} description={"Kindly go to the booking and book a PG or a Library or a Tiffin Service, then come back again. We are waiting for you! "} />
                        }
                    </View>
                </View>
            </Animated.ScrollView>
        </View>

    )
}


export default WalletScreenView