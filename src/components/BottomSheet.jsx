import { useRef } from "react";
import { View } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { HEIGHT } from "../constants/dimensions";
import { Text } from "../widgets";

const BottomSheet = ({ actionSheetRef }) => {
    return (
        <ActionSheet ref={actionSheetRef}>
            <View style={{
                height: HEIGHT / 2,
            }}>
                <Text color={'#000'}>Hi, I am here.</Text>
            </View>
        </ActionSheet>
    );
}

export default BottomSheet