// IMPORT CORE MODULES

import { ViewStyle } from "react-native";

// Define and export the IIconProps interface
export interface IIconProps {
    source?: "mi" | "mci" | "ii" | "fa" | "fa5" | "fa5p" | "fo" | "oo" | "ad",
    name: string,
    color?: string,
    size?: number,
    disabled?: boolean,
    style?: ViewStyle,
    onPress?: () => void,
    containerStyle?: ViewStyle
}