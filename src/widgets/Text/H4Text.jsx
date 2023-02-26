import React from "react";
import { Text, useColorScheme } from "react-native";
import { colors } from "../../constants/colors";


const H4Text = ({ text, style }) => {
    return (
        <Text style={[{ fontSize: 20, color: colors[useColorScheme()]['secondary'], fontWeight: 'bold' }, style]}>{text}</Text>
    )
}


export default H4Text;
