import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const colors = {
    bg: '#000000',
    black: '#000000',
    lightBlack: '#1C1C1E',
    white: '#FFFFFF',
    purple: '#7C3BFF',
    grey: '#B1B1B1',
    darkPurple: '#241939',
    lightPink: '#F222224D',
    darkPink: '#F86F6F',
    lightGrey: '#313136',
    lightPurpule: '#3B2B60',
    red: '#F22222',
    green: '#88E57E',
};

export { screenWidth, screenHeight, colors };
