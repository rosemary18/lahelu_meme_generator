// IMPORT CORE MODULES

import { StyleSheet, TextStyle } from "react-native";
import { colors, fonts } from "../types";

// Define the global text styles
const TextStyles = StyleSheet.create({

    // Regular

    xs: <TextStyle>{
        fontSize: 10,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    sm: <TextStyle>{
        fontSize: 12,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    md: <TextStyle>{
        fontSize: 14,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    lg: <TextStyle>{
        fontSize: 16,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    xl: <TextStyle>{
        fontSize: 18,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    '2xl': <TextStyle>{
        fontSize: 20,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    '3xl': <TextStyle>{
        fontSize: 22,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    '4xl': <TextStyle>{
        fontSize: 24,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    '5xl': <TextStyle>{
        fontSize: 26,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    '6xl': <TextStyle>{
        fontSize: 28,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    '7xl': <TextStyle>{
        fontSize: 30,
        fontFamily: fonts.regular,
        color: colors.black,
    },
    '8xl': <TextStyle>{
        fontSize: 32,
        fontFamily: fonts.regular,
        color: colors.black,
    },

    // Semi Bold

    xsSB: <TextStyle>{
        fontSize: 10,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    smSB: <TextStyle>{
        fontSize: 12,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    mdSB: <TextStyle>{
        fontSize: 14,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    lgSB: <TextStyle>{
        fontSize: 16,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    xlSB: <TextStyle>{
        fontSize: 18,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    '2xlSB': <TextStyle>{
        fontSize: 20,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    '3xlSB': <TextStyle>{
        fontSize: 22,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    '4xlSB': <TextStyle>{
        fontSize: 24,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    '5xlSB': <TextStyle>{
        fontSize: 26,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    '6xlSB': <TextStyle>{
        fontSize: 28,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    '7xlSB': <TextStyle>{
        fontSize: 30,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },
    '8xlSB': <TextStyle>{
        fontSize: 32,
        fontFamily: fonts.semiBold,
        color: colors.black,
    },

    // Bold

    xsB: <TextStyle>{
        fontSize: 10,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    smB: <TextStyle>{
        fontSize: 12,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    mdB: <TextStyle>{
        fontSize: 14,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    lgB: <TextStyle>{
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    xlB: <TextStyle>{
        fontSize: 18,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    '2xlB': <TextStyle>{
        fontSize: 20,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    '3xlB': <TextStyle>{
        fontSize: 22,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    '4xlB': <TextStyle>{
        fontSize: 24,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    '5xlB': <TextStyle>{
        fontSize: 26,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    '6xlB': <TextStyle>{
        fontSize: 28,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    '7xlB': <TextStyle>{
        fontSize: 30,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    '8xlB': <TextStyle>{
        fontSize: 32,
        fontFamily: fonts.bold,
        color: colors.black,
    },

    // Italic

    xsI: <TextStyle>{
        fontSize: 10,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    smI: <TextStyle>{
        fontSize: 12,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    mdI: <TextStyle>{
        fontSize: 14,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    lgI: <TextStyle>{
        fontSize: 16,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    xlI: <TextStyle>{
        fontSize: 18,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    '2xlI': <TextStyle>{
        fontSize: 20,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    '3xlI': <TextStyle>{
        fontSize: 22,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    '4xlI': <TextStyle>{
        fontSize: 24,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    '5xlI': <TextStyle>{
        fontSize: 26,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    '6xlI': <TextStyle>{
        fontSize: 28,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    '7xlI': <TextStyle>{
        fontSize: 30,
        fontFamily: fonts.italic,
        color: colors.black,
    },
    '8xlI': <TextStyle>{
        fontSize: 32,
        fontFamily: fonts.italic,
        color: colors.black,
    },

    // Regular White

    xsW: <TextStyle>{
        fontSize: 10,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    smW: <TextStyle>{
        fontSize: 12,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    mdW: <TextStyle>{
        fontSize: 14,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    lgW: <TextStyle>{
        fontSize: 16,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    xlW: <TextStyle>{
        fontSize: 18,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    '2xlW': <TextStyle>{
        fontSize: 20,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    '3xlW': <TextStyle>{
        fontSize: 22,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    '4xlW': <TextStyle>{
        fontSize: 24,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    '5xlW': <TextStyle>{
        fontSize: 26,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    '6xlW': <TextStyle>{
        fontSize: 28,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    '7xlW': <TextStyle>{
        fontSize: 30,
        fontFamily: fonts.regular,
        color: colors.white,
    },
    '8xlW': <TextStyle>{
        fontSize: 32,
        fontFamily: fonts.regular,
        color: colors.white,
    },

    // Semi Bold White

    xsSBW: <TextStyle>{
        fontSize: 10,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    smSBW: <TextStyle>{
        fontSize: 12,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    mdSBW: <TextStyle>{
        fontSize: 14,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    lgSBW: <TextStyle>{
        fontSize: 16,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    xlSBW: <TextStyle>{
        fontSize: 18,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    '2xlSBW': <TextStyle>{
        fontSize: 20,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    '3xlSBW': <TextStyle>{
        fontSize: 22,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    '4xlSBW': <TextStyle>{
        fontSize: 24,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    '5xlSBW': <TextStyle>{
        fontSize: 26,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    '6xlSBW': <TextStyle>{
        fontSize: 28,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    '7xlSBW': <TextStyle>{
        fontSize: 30,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },
    '8xlSBW': <TextStyle>{
        fontSize: 32,
        fontFamily: fonts.semiBold,
        color: colors.white,
    },

    // Bold White

    xsBW: <TextStyle>{
        fontSize: 10,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    smBW: <TextStyle>{
        fontSize: 12,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    mdBW: <TextStyle>{
        fontSize: 14,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    lgBW: <TextStyle>{
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    xlBW: <TextStyle>{
        fontSize: 18,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    '2xlBW': <TextStyle>{
        fontSize: 20,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    '3xlBW': <TextStyle>{
        fontSize: 22,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    '4xlBW': <TextStyle>{
        fontSize: 24,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    '5xlBW': <TextStyle>{
        fontSize: 26,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    '6xlBW': <TextStyle>{
        fontSize: 28,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    '7xlBW': <TextStyle>{
        fontSize: 30,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    '8xlBW': <TextStyle>{
        fontSize: 32,
        fontFamily: fonts.bold,
        color: colors.white,
    },

    // Italic White

    xsIW: <TextStyle>{
        fontSize: 10,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    smIW: <TextStyle>{
        fontSize: 12,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    mdIW: <TextStyle>{
        fontSize: 14,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    lgIW: <TextStyle>{
        fontSize: 16,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    xlIW: <TextStyle>{
        fontSize: 18,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    '2xlIW': <TextStyle>{
        fontSize: 20,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    '3xlIW': <TextStyle>{
        fontSize: 22,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    '4xlIW': <TextStyle>{
        fontSize: 24,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    '5xlIW': <TextStyle>{
        fontSize: 26,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    '6xlIW': <TextStyle>{
        fontSize: 28,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    '7xlIW': <TextStyle>{
        fontSize: 30,
        fontFamily: fonts.italic,
        color: colors.white,
    },
    '8xlIW': <TextStyle>{
        fontSize: 32,
        fontFamily: fonts.italic,
        color: colors.white,
    },

});

// EXPORT

export default TextStyles