import React from "react";
import { Text, useColorScheme } from "react-native";
import { colors } from "../../constants/colors";


const NormalText = ({ text, style }) => {
    return (
        <Text style={[{ fontSize: 14, color: colors[useColorScheme()]['opposite'], textAlign: 'center' }, style]}>{text}</Text>
    )
}

export default NormalText;
