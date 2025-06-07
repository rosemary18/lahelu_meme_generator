// IMPORT CORE MODULES

import { StyleSheet } from "react-native";

// IMPORT DEFINED GLOBAL STYLES

import { colors } from "../../types";

// IMPORT CONSTANTS

import { width } from "./constants";

/* Define styles */
const styles = StyleSheet.create({
    rowControl: {
        paddingVertical: 12,
        backgroundColor: colors.secondary
    },
    rowScroll: {
        paddingHorizontal: 12,
        gap: 8
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white1
    },
    viewShot: {
        flex: 1,
        backgroundColor: colors.white,
    },
    canvas: {
        width: width - 48,
        height: width - 48,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.grey1,
        borderRadius: 1,
    },
    fullscreen: {
        position: 'absolute',
        top: 8,
        right: 8,
        padding: 2,
        zIndex: 1,
        borderRadius: 100,
        backgroundColor: colors.black
    }
})

// EXPORT

export default styles