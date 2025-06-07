// IMPORT CORE MODULES

import { StyleSheet } from "react-native";

// IMPORT DEFINED GLOBAL TYPES

import { colors } from "../../types";

// Define image generator styles
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
  image: {
    borderRadius: 4,
  },
});

// EXPORT

export default styles