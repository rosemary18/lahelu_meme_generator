// IMPORT CORE MODULES

import { StyleSheet } from "react-native"

// IMPORT DEFINED GLOBAL STYLES

import { colors } from "../../types"

// Define button styles
const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        backgroundColor: colors.blue,
        paddingHorizontal: 12,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

// EXPORT

export default styles