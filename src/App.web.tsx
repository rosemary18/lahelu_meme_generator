
// IMPORT CORE MODULES

import React from 'react'
import { Text, View } from 'react-native'

// IMPORT THIRD PARTY MODULES

import { SafeAreaProvider } from 'react-native-safe-area-context'

// IMPORT LOCAL MODULES & COMPONENTS

import Styles from './styles'

// MAIN COMPONENT

/**
 * 
 * @description Main App
 * @returns React.FC
 */
const App: React.FC = () => {

    return (
      <SafeAreaProvider style={Styles.container.flex}>
        <View>
            <Text>Integrating React Native Web</Text>
        </View>
      </SafeAreaProvider>
    )
}

// EXPORT

export default App