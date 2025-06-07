// IMPORT CORE MODULES

import { Dimensions } from "react-native";

// IMPORT DEFINED TYPES

import { IObjectFont } from "./types";

// CONSTANTS

/* Dimensions */
export const { height, width } = Dimensions.get('window');

/* Fonts */
export const FONTS: IObjectFont[] = [
    {
        name: 'Montserrat',
        font: 'Montserrat-Regular'
    },
    {
        name: 'Nunito',
        font: 'Nunito-Regular'
    },
    {
        name: 'Poppins',
        font: 'Poppins-Regular'
    },
    {
        name: 'Roboto',
        font: 'Roboto-Regular'
    },
    {
        name: 'Arial',
        font: 'Arial'
    },
    {
        name: 'Times New Roman',
        font: 'times'
    }
];

/* Font styles */
export const FONT_STYLES: string[] = [ 'Bold', 'Italic' ];

/* Colors */
export const COLORS: string[] = [
  '#FF0000FF', '#FF0000CC', '#FF000099', '#FF000066', '#FF000033',
  '#008000FF', '#008000CC', '#00800099', '#00800066', '#00800033',
  '#0000FFFF', '#0000FFCC', '#0000FF99', '#0000FF66', '#0000FF33',
  '#FFFF00FF', '#FFFF00CC', '#FFFF0099', '#FFFF0066', '#FFFF0033',
  '#800080FF', '#800080CC', '#80008099', '#80008066', '#80008033',
  '#FFA500FF', '#FFA500CC', '#FFA50099', '#FFA50066', '#FFA50033',
  '#000000FF', '#000000CC', '#00000099', '#00000066', '#00000033',
  '#808080FF', '#808080CC', '#80808099', '#80808066', '#80808033',
  '#FFFFFFFF', '#FFFFFFCC', '#FFFFFF99', '#FFFFFF66', '#FFFFFF33',
];