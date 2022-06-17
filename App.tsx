import React from 'react'
import { Home } from './src/screens/Home';

import {useFonts , Roboto_400Regular , Roboto_500Medium , Roboto_700Bold } from '@expo-google-fonts/roboto'
 
import AppLoading from 'expo-app-loading'
import {ThemeProvider} from 'styled-components/native'
import THEME from './src/theme'

import {StatusBar} from 'expo-status-bar'

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar  style='light' translucent   />
      <Home/>
    </ThemeProvider>
  );
}

