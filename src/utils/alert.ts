import { Alert, Linking } from "react-native";

/**
 * 
 * @description Alert open privacy for access library media
 * @returns void
 */
export const alertOpenPrivacy: () => void = () => {
    Alert.alert(
        "Peringatan!",
        "Aplikasi membutuhkan akses ke library media", 
        [
            {
                text: "Ok",
                onPress: () => Linking.openSettings(),
            },
        ]
    );
};