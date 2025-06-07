export interface IObjectItem {
    id: string;
    type: 'text' | 'image';
    value: string;
    position: IPosition;
    color?: string;
    rotate?: number;
    scale?: number;
    opacity?: number;
    font?: IFont;
    size?: ISize
}

export interface ISize {
    height: number;
    width: number;
}

export interface IFont {
    family: string,
    italic: boolean,
    bold: boolean,
    shadow: number,
    shadowColor: string
}

export interface IPosition {
    x: number;
    y: number;
}