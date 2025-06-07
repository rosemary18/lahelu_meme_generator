// IMPORT CORE MODULES

import { StyleSheet } from "react-native";

// IMPORT DEFINED GLOBAL TYPES

import { colors } from "../../types";

// IMPORT DEFINED GLOBAL STYLES

import Styles from "../../styles";

// Define text generator styles
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'flex-start',
        padding: 2,
        borderWidth: 1,
        borderColor: colors.transparent,
        borderRadius: 1,
    },
    activeBorder: {
        borderColor: colors.blue,
    },
    text: {
        ...Styles.text['md'],
        padding: 4,
    },
    input: {
        ...Styles.text['md'],
        padding: 4,
        borderBottomWidth: 1,
        borderColor: colors.grey,
        minWidth: 40,
    },
});

// EXPORT

export default styles