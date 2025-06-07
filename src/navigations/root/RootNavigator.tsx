import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GeneratorScreen, LandingScreen } from '../../screens';
import { ScreenNames, RootStackParamList, colors, fonts } from '../../types';
import { Button } from '../../components';

import styles from './style';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {

    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen 
                    name={ScreenNames.LANDING_SCREEN}
                    component={LandingScreen} 
                    options={{headerShown: false}}/>
                <RootStack.Screen 
                    name={ScreenNames.GENERATOR_SCREEN}
                    component={GeneratorScreen} 
                    options={({ navigation }) => (
                        {
                            title: 'Memes Generator',
                            headerStyle: {
                                backgroundColor: colors.secondary,
                            },
                            headerTitleStyle: {
                                color: colors.white,
                                fontFamily: fonts.bold 
                            },
                            headerTintColor: colors.white,
                            headerRight: () => (
                                <Button 
                                    title="Selesai"
                                    style={styles.buttonRigth}
                                    textColor={colors.grey1} 
                                    onPress={navigation.goBack} />
                            )
                        }
                    )}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator