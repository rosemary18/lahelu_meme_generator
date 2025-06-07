// IMPORT CORE MODULES

import { StyleSheet } from "react-native";

// IMPORT DEFINED GLOBAL STYLES

import { colors } from "../../types";

// IMPORT CONSTANTS

import { height } from "./constants";

// DEFINE STYLES

const styles = StyleSheet.create({
    modal: {
        margin: 12,
        marginBottom: 70,
        justifyContent: 'flex-end',
    },
    content: {
        backgroundColor: colors.secondary,
        height: height * 0.42,
        maxHeight: height * 0.42,
        borderRadius: 10,
    },
    section: {
        marginVertical: 12,
    },
    colorItem: {
        width: 24, 
        height: 24, 
        borderRadius: 100, 
        borderWidth: 2, 
        borderColor: colors.grey
    },
    fontItem: {
        paddingVertical: 6,
        paddingHorizontal: 12, 
        borderRadius: 100, 
        borderWidth: 2, 
        borderColor: colors.grey
    }
})

// EXPORT 

export default styles