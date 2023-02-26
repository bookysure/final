import React from "react";
import { Text, useColorScheme } from "react-native";
import { colors } from "../../constants/colors";

const H1Text = ({ text, style }) => {
    return (
        <Text style={[{ fontSize: 32, color: colors[useColorScheme()]['secondary'], fontWeight: 'bold' }, style]}>{text}</Text>
    )
}
export default H1Text;