import React from "react";
import { Text, useColorScheme } from "react-native";
import { colors } from "../../constants/colors";


const H2Text = ({ text, style }) => {
    return (
        <Text style={[{ fontSize: 26, color: colors[useColorScheme()]['secondary'], fontWeight: 'bold' }, style]}>{text}</Text>
    )
}
export default H2Text;
