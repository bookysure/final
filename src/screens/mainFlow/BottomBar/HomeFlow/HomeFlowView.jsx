import { useColorScheme, View, ScrollView, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native"
import { HomeHeader } from "../../../../components"
import { colors } from "../../../../constants/colors"
import { icons } from "../../../../constants/icons"
import { H5Text, NormalText } from "../../../../widgets"
import MarqueeText from "react-native-marquee";
import { WIDTH } from "../../../../constants/dimensions"
import { ImageSlider } from "react-native-image-slider-banner";

export const HomeFlowView = ({
    marquee = '\ud83d\udc4c Welcome to bookysure, we will help you in booking your slots. \ud83d\udc4c',
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
    ] }) => {
    var theme = useColorScheme()
    console.info(sliders, '========')
    return (
        <View style={{ backgroundColor: colors[useColorScheme()]['background'], flex: 1 }}>
            <HomeHeader />
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ padding: 10 }} nestedScrollEnabled={true}>
                    <View style={{ flex: 1, backgroundColor: colors[useColorScheme()]['background'] }}>
                        <MarqueeText style={{ fontSize: 12, backgroundColor: colors[useColorScheme()]['background'], color: colors[useColorScheme()]['opposite'], padding: 5 }} delay={1000} speed={0.25}>
                            {marquee}
                        </MarqueeText>
                    </View>

                    <View style={{ width: WIDTH - 20 }}>
                        <ImageSlider
                            data={sliders}
                            timer={5000}
                            autoPlay={true}
                            onItemChanged={(item) => console.log("item", item.img)}
                            showIndicator={false}
                            preview={false}
                            caroselImageStyle={{ resizeMode: "cover", width: WIDTH - 20, height: 200, borderRadius:5}}
                        />

                    </View>
                    <View style={{ marginTop: 20 }}>
                        <H5Text text={"Categories"} />

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ScrollView horizontal={true} style={{ width: "100%" }}>
                                <FlatList
                                    data={data}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity key={index} style={{ alignItems: 'center', width: WIDTH / 5 + 10, paddingVertical: 10, }}>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 1000, paddingBottom: 4 }}>
                                                    <Image source={{ uri: icons[theme][item.img] }} style={{ width: 25, height: 25, }} resizeMode={'center'} />
                                                </View>
                                                <NormalText text={item.text} style={{ textAlign: 'center' }} />
                                            </TouchableOpacity>
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

                </ScrollView>
            </SafeAreaView>
        </View >
    )
}