import { useColorScheme, View, ScrollView, FlatList, Image, SafeAreaView } from "react-native"
import { GridPropertyView, HomeHeader, Icons, SearchBar } from "../../../../components"
import { colors } from "../../../../constants/colors"
import { icons } from "../../../../constants/icons"
import { H5Text, NormalText, Touchable } from "../../../../widgets"
import MarqueeText from "react-native-marquee";
import { HEIGHT, WIDTH } from "../../../../constants/dimensions"
import { ImageSlider } from "react-native-image-slider-banner";

export const HomeScreenView = ({
    bestPicks = [
        {
            img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
            title: 'New Building3',
            price: '$45,345.00',
            address: 'New Town Street, 3465, wri New York',
            facilities: ['Bedroom', 'Bathroom', 'Square'],
            images: [
                {
                    img: "https://dummyimage.com/600x400/000/fff",
                },
                {
                    img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
                },
                {
                    img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
                }
            ]
        },
        {
            img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
            title: 'New Building4',
            price: '$45,345.00',
            address: 'New Town Street, 3465, wri New York',
            facilities: ['Bedroom', 'Bathroom', 'Square'],
            images: [
                {
                    img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                },
                {
                    img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
                },
                {
                    img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
                }
            ]
        },
        {
            img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
            title: 'New Building4',
            price: '$45,345.00',
            address: 'New Town Street, 3465, wri New York',
            facilities: ['Bedroom', 'Bathroom', 'Square'],
            images: [
                {
                    img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                },
                {
                    img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
                },
                {
                    img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
                }
            ]
        },
        {
            img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
            title: 'New Building4',
            price: '$45,345.00',
            address: 'New Town Street, 3465, wri New York',
            facilities: ['Bedroom', 'Bathroom', 'Square'],
            images: [
                {
                    img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                },
                {
                    img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
                },
                {
                    img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
                }
            ]
        },
        {
            img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
            title: 'New Building4',
            price: '$45,345.00',
            address: 'New Town Street, 3465, wri New York',
            facilities: ['Bedroom', 'Bathroom', 'Square'],
            images: [
                {
                    img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                },
                {
                    img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
                },
                {
                    img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
                }
            ]
        },
        {
            img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
            title: 'New Building4',
            price: '$45,345.00',
            address: 'New Town Street, 3465, wri New York',
            facilities: ['Bedroom', 'Bathroom', 'Square'],
            images: [
                {
                    img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                },
                {
                    img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
                },
                {
                    img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
                }
            ]
        },
        {
            img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
            title: 'New Building4',
            price: '$45,345.00',
            address: 'New Town Street, 3465, wri New York',
            facilities: ['Bedroom', 'Bathroom', 'Square'],
            images: [
                {
                    img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                },
                {
                    img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
                },
                {
                    img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
                }
            ]
        }
    ],
    marquee = '\ud83d\udc4c Welcome to bookysure, hello this ii s world\'s largest platform we will help you in booking your slots. \ud83d\udc4c',
    sliders = [
        { img: "https://dummyimage.com/600x400/000/fff" }, { img: "https://source.unsplash.com/1024x768/?water" }, { img: "https://source.unsplash.com/1024x768/?birds" }
    ],
    data = [
        {
            img: 'book',
            text: "Libraries"
        },
        {
            img: 'bed',
            text: "Paying Guest"
        },
        {
            img: 'food',
            text: "Tiffin Services"
        },
        {
            img: 'user',
            text: "Inspirations"
        }
    ]
}) => {
    var theme = useColorScheme()
    console.info(sliders, '========')
    return (
        <View style={{ backgroundColor: colors[useColorScheme()]['background'], flex: 1 }}>
            <HomeHeader />
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: HEIGHT / 5 }} nestedScrollEnabled={true}>
                    <View style={{ flex: 1, backgroundColor: colors[useColorScheme()]['background'] }}>
                        <MarqueeText style={{ fontSize: 12, backgroundColor: colors[useColorScheme()]['background'], color: colors[useColorScheme()]['opposite'], padding: 5 }} delay={1000} speed={1}>
                            {marquee}
                        </MarqueeText>
                    </View>

                    <View style={{ width: WIDTH - 20 }}>
                        <ImageSlider
                            data={sliders}
                            timer={5000}
                            autoPlay={true}
                            // onItemChanged={(item) => console.log("item", item.img)}
                            showIndicator={false}
                            preview={false}
                            caroselImageStyle={{ resizeMode: "cover", width: WIDTH - 20, height: 200, borderRadius: 5 }}
                        />

                    </View>
                    <View style={{ top: -20 }}>
                        <SearchBar />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <H5Text text={"Categories"} />

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ScrollView horizontal={true} style={{ width: "100%" }}>
                                <FlatList
                                    data={data}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <Touchable key={index} style={{ alignItems: 'center', width: WIDTH / 5 + 10, paddingVertical: 10, }}>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 1000, paddingBottom: 4 }}>
                                                    <Icons icon={item.img} size={25} />
                                                </View>
                                                <NormalText text={item.text} style={{ textAlign: 'center' }} />
                                            </Touchable>
                                        )
                                    }}
                                    numColumns={4}
                                />
                            </ScrollView>
                        </View>
                    </View>
                    <NormalText
                        style={{
                            textAlign: 'center',
                            margin: 5,
                            fontSize: 17,
                            fontWeight: '200',
                            marginBottom: 0,
                        }}
                        text={"Best picks for you"}
                    />
                    {
                        bestPicks.map((item, index) => {
                            return (
                                <GridPropertyView item={item} index={index} />
                            )
                        })
                    }

                </ScrollView>
            </SafeAreaView>
        </View >
    )
}