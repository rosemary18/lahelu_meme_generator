
// IMPORT CORE MODULES

import React from 'react'

// IMPORT THIRD PARTY MODULES

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper';

// IMPORT LOCAL MODULES & COMPONENTS

import RootNavigator from './navigations';
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
          <PaperProvider>
              <RootNavigator />
          </PaperProvider>
      </SafeAreaProvider>
    )
}

// EXPORT

export default App