// IMPORAT THIRD PARTY MODULE

import { NativeStackScreenProps } from "@react-navigation/native-stack";

// IMPORT DEFINED GLOBAL TYPES

import { RootStackParamList, ScreenNames } from "../../types";

// DEFINE AND EXPORT THE PROPS INTERFACE

/* Define and export the LandingSCreenProps */
export type ILandingSCreenProps = NativeStackScreenProps<RootStackParamList, ScreenNames.LANDING_SCREEN>