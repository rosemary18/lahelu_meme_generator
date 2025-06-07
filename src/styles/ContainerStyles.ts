// IMPORT CORE MODULES

import { StyleSheet, ViewStyle } from "react-native";

// Define the global container styles
const ContainerStyles = StyleSheet.create({
    flex: <ViewStyle>{
        flex: 1,
        backgroundColor: '#fff',
    },
    flexCenter: <ViewStyle>{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

// EXPORT

export default ContainerStyles