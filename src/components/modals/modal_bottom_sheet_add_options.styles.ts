// IMPORT CORE MODULES

import { StyleSheet } from "react-native";

// IMPORT DEFINED GLOBAL STYLES

import { colors } from "../../types";

// IMPORT CONSTANTS

import { width } from "./constants";

// DEFINE STYLES

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        width: width,
    },
    sheet: {
        width: width,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        paddingHorizontal:18,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey1
    },
    content: {
        padding: 18,
        gap: 10
    },
});

// EXPORT 

export default styles