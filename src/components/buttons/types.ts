// IMPORT CORE TYPES

import { ViewStyle } from "react-native";

// IMPORT COMPONENT DEFINED TYPES

import { IIconProps } from "../Icon";

// Define and export the Props interface
export interface IButton {
    title: string,
    style?: ViewStyle,
    state?: 'active' | 'disabled',
    type?: 'default' | 'inverse',
    activeOpacity?: number,
    onPress: () => void,
    leftIcon?: IIconProps,
    rightIcon?: IIconProps,
    textColor?: string
}