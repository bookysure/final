import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, RefreshControl, useColorScheme } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors } from '../../../../constants/colors';
import { HEIGHT, WIDTH } from '../../../../constants/dimensions';
import { Icons } from '../../../../components';
import { icons } from '../../../../constants/icons';
import { Button, H5Text, H6Text, NormalText } from '../../../../widgets';

const SettingsScreenView = ({
    data = [{ name: 'Raj', phone: '987654321' }]
}) => {
    console.clear()
    console.info(data[0])
    return (
        <View style={{ flex: 1, backgroundColor: colors[useColorScheme()]['background'], justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => {
                            // getUser(setData)
                        }}
                    />
                }
                contentContainerStyle={{ width: WIDTH, height: HEIGHT, justifyContent: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Image source={require('../../../../assets/profile.png')} style={{ width: 150, height: 150, borderRadius: 100 }} />
                    {
                        data == null ? <></> :
                            data[0].name == null ?
                                <NormalText style={{ fontSize: 16, fontWeight: 'bold' }} text={'+91' + data[0].phone} /> :
                                <NormalText style={{ fontSize: 16, fontWeight: 'bold' }} text={data[0].name + ' (+91' + data[0].phone + ')'} />
                    }
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        {/* Contact Us */}
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL(`mailto:support@bookysure.com`)
                            }}
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: WIDTH - 40, padding: 15, paddingRight: 30, elevation: 4, backgroundColor: colors[useColorScheme()]['background'], borderRadius: 15, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ backgroundColor: colors[useColorScheme()]['primary'], borderRadius: 30, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                    <Icons icon={'chat-white'} />
                                </View>
                                <H5Text style={{ color: colors[useColorScheme()]['opposite'], marginLeft: 10 }} text={'Contact Us'} />
                            </View>
                            <View>
                                <Icons icon={'right'} />
                            </View>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            //LogOut Here
                        }}
                        style={{ backgroundColor: colors[useColorScheme()]['primary'], paddingHorizontal: 10, paddingVertical: 5, margin: 10, borderRadius: 20 }}>
                        <H6Text style={{ color: colors[useColorScheme()]['opposite'] }} text={'Logout'} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SettingsScreenView