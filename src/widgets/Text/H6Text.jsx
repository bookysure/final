import React from "react";
import { Text, useColorScheme } from "react-native";
import { colors } from "../../constants/colors";


const H6Text = ({ text, style }) => {
    return (
        <Text style={[{ fontSize: 16, color: colors[useColorScheme()]['secondary'], fontWeight: 'bold' }, style]}>{text}</Text>
    )
}


export default H6Text;
