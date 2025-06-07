export enum ScreenNames {
    LANDING_SCREEN = 'LANDING_SCREEN',
    GENERATOR_SCREEN = 'GENERATOR_SCREEN'
}

type ScreenParams = {
    title?: string
}

export type RootStackParamList = {
    [ScreenNames.LANDING_SCREEN]: undefined | ScreenParams,
    [ScreenNames.GENERATOR_SCREEN]: undefined | ScreenParams
}
