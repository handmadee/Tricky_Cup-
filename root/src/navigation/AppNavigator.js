
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GamePlay from '../screens/game/StartGame';
const Stack = createNativeStackNavigator();


function AppNavigation() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={
                    {
                        headerShown: false
                    }
                }
                    initialRouteName='Home'
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="GamePlay" component={GamePlay} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}


export default AppNavigation;