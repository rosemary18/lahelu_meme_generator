// IMPORT DEFINED GLOBAL TYPES

import { IObjectItem } from "../../types";

// DEFINE AND EXPORT THE PROPS INTERFACE

/* Define and export the ModalBottomSheetAddOptions interface */
export interface IModalBottomSheetAddOptions {
    isVisible: boolean,
    currentLengthItem: number,
    onAddText: () => void,
    onAddImage: () => void,
    onDeleteAll: () => void,
    onClose: () => void
};

/* Define and export the ModalGeneratorAppearenceStyle interface */
export interface IModalGeneratorAppearenceStyle {
    isVisible: boolean,
    setting: 'text' | 'image' | 'canvas',
    data: IObjectItem | string,
    onUpdate: (data: IObjectItem | string) => void,
    onClose: () => void
};

/* Define and export the IObjectFont interface */
export interface IObjectFont {
    name: string,
    font: string
}