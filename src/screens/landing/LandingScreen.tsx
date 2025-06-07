import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../../components'
import Styles from '../../styles'
import { ScreenNames } from '../../types'
import { ILandingSCreenProps } from './types'

const LandingScreen: React.FC<ILandingSCreenProps> = ({ route, navigation }: ILandingSCreenProps) => {

    // STATES

    // HANDLERS

    /**
     * @description Navigate to Generator Screen
     * @returns void
     */
    const handlerGoToGenerator = () => navigation.navigate(ScreenNames.GENERATOR_SCREEN)

    // LISTENERS

    // EFFECTS

    // RENDERS

    return (
        <View style={[Styles.container.flexCenter, { padding: 24 }]}>
            <Text style={[Styles.text['8xlB'], { textAlign: 'center' }]}>LAHELU MEME GENERATOR</Text>
            <Text style={[Styles.text['md'], { textAlign: 'center', marginTop: 12 }]}>Make your own memes today, not tomorrow or next year :)</Text>
            <Button 
                style={{ marginTop: 24 }} 
                title="Create Now!" 
                onPress={handlerGoToGenerator} />
        </View>
    )
}

export default LandingScreen
