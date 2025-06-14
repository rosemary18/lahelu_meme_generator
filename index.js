/**
 * @format
 */

import {createRoot} from 'react-dom/client';
import {Platform} from 'react-native';

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const HeadlessCheck = (args) => {

    console.log("[HEADLESS CHECK] : ", args)
    
    if (args != undefined && args?.isHeadless) return null
    
    return gestureHandlerRootHOC(App)
}

AppRegistry.registerComponent(appName, HeadlessCheck);

if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
}