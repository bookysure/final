import React, { useEffect, useRef, useState } from 'react'
import { View, Text, useColorScheme, TextInput, TouchableOpacity } from 'react-native'
import { Button, Input, H3Text, NormalText, H4Text } from '../../../widgets'
import { colors } from '../../../constants/colors';
import { HEIGHT, WIDTH } from '../../../constants/dimensions';


function updatePin(pin, index, value) {
    var a = pin;
    a[index] = value;
    return a;
}
export const OtpView = ({ otp, setOtp, handleSubmitOtp, phoneNumber, loading }) => {


    const input0Ref = useRef()
    const input1Ref = useRef()
    const input2Ref = useRef()
    const input3Ref = useRef()
    const input4Ref = useRef()
    const input5Ref = useRef()
    var [pin, setPin] = useState(["", "", "", "", "", ""])

    const [resend, setResend] = React.useState(0);

    useEffect(() => {


        let myInterval = setInterval(() => {
            if (resend > 0) {
                setResend(resend - 1);
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };



    })

    return (

        <View
            style={{
                backgroundColor: colors[useColorScheme()]['background'],
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                maringTop: -200
            }}
        >

            <View>
                <View style={{ marginBottom: 20 }}>
                    <H3Text text={"Enter OTP"} style={{ color: colors[useColorScheme()]['opposite'] }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <NormalText text={"We sent a 6 digit one time password(OTP) to"} />
                    <H4Text text={"+91 " + phoneNumber.slice(0, 5) + "-" + phoneNumber.slice(5)} />
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }} style={{ marginTop: 5 }} disabled={resend == 0 ? false : true}>
                        <NormalText text={"Wrong Number? Click Here"} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 30, alignItems: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: WIDTH - 100 }}>

                        <TextInput
                            autoFocus={true}
                            ref={input0Ref}
                            maxLength={1}
                            style={{
                                textAlign: 'center',
                                fontSize: 18,
                                margin: 10,
                                borderRadius: 3,
                                borderColor: colors[useColorScheme()]['secondary'],
                                borderWidth: 2,
                                color: colors[useColorScheme()]['opposite'],
                            }}
                            keyboardType="numeric"
                            onChangeText={
                                (value) => {
                                    setPin(updatePin(pin, 0, value))
                                    if (value != '') {
                                        input1Ref.current.focus();
                                    }
                                }
                            }
                        />
                        <TextInput
                            ref={input1Ref}
                            maxLength={1}
                            style={{
                                textAlign: 'center',
                                fontSize: 18,
                                margin: 10,
                                borderRadius: 3,
                                borderColor: colors[useColorScheme()]['secondary'],
                                borderWidth: 2,
                                color: colors[useColorScheme()]['opposite'],
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace' && pin[1] == "") {
                                    input0Ref.current.focus()
                                }
                            }}
                            keyboardType="numeric"
                            onChangeText={
                                (value) => {
                                    setPin(updatePin(pin, 1, value))
                                    if (value != '') {
                                        input2Ref.current?.focus();
                                    }
                                }
                            }
                        />
                        <TextInput
                            ref={input2Ref}
                            maxLength={1}
                            style={{
                                textAlign: 'center',
                                fontSize: 18,
                                margin: 10,
                                borderRadius: 3,
                                borderColor: colors[useColorScheme()]['secondary'],
                                borderWidth: 2,
                                color: colors[useColorScheme()]['opposite'],
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace' && pin[2] == "") {
                                    input1Ref.current.focus()
                                }
                            }}
                            keyboardType="numeric"
                            onChangeText={
                                (value) => {
                                    setPin(updatePin(pin, 2, value))
                                    if (value != '') {
                                        input3Ref.current?.focus();
                                    }
                                }
                            }
                        />
                        <TextInput
                            ref={input3Ref}
                            maxLength={1}
                            style={{
                                textAlign: 'center',
                                fontSize: 18,
                                margin: 10,
                                borderRadius: 3,
                                borderColor: colors[useColorScheme()]['secondary'],
                                borderWidth: 2,
                                color: colors[useColorScheme()]['opposite'],
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace' && pin[3] == "") {
                                    input2Ref.current.focus()
                                }
                            }}
                            keyboardType="numeric"
                            onChangeText={
                                (value) => {
                                    setPin(updatePin(pin, 3, value))
                                    if (value != '') {
                                        input4Ref.current?.focus();
                                    }
                                }
                            }
                        />
                        <TextInput
                            ref={input4Ref}
                            maxLength={1}
                            style={{
                                textAlign: 'center',
                                fontSize: 18,
                                margin: 10,
                                borderRadius: 3,
                                borderColor: colors[useColorScheme()]['secondary'],
                                borderWidth: 2,
                                color: colors[useColorScheme()]['opposite'],
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace' && pin[4] == "") {
                                    input3Ref.current.focus()
                                }
                            }}
                            keyboardType="numeric"
                            onChangeText={
                                (value) => {
                                    setPin(updatePin(pin, 4, value))
                                    if (value != '') {
                                        input5Ref.current?.focus();
                                    }
                                }
                            }
                        />
                        <TextInput
                            ref={input5Ref}
                            maxLength={1}
                            style={{
                                textAlign: 'center',
                                fontSize: 18,
                                margin: 10,
                                borderRadius: 3,
                                borderColor: colors[useColorScheme()]['secondary'],
                                borderWidth: 2,
                                color: colors[useColorScheme()]['opposite'],
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace' && pin[5] == "") {
                                    input4Ref.current.focus()
                                }
                            }}
                            keyboardType="numeric"
                            onChangeText={
                                (value) => {
                                    setPin(updatePin(pin, 5, value))
                                }
                            }
                        />
                    </View>

                    <TouchableOpacity onPress={() => {
                        resendOtp(route.params?.phoneNumber, setResend)
                    }} style={{ marginTop: 5 }} disabled={resend == 0 ? false : true}>
                        <Text style={{ color: colors[useColorScheme()]['opposite'] + (resend ? '40' : ''), fontSize: 16, justifyContent: 'center' }}>Resend OTP{resend ? '(' + resend + ')' : ''}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Button
                        title={'verify'}
                        loading={loading}
                        onPress={() => {
                            handleSubmitOtp(pin.join(''))
                        }}
                    />
                </View>
            </View>
        </View>
    )
}