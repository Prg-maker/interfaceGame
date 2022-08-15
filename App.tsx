
import {useFonts , Inter_400Regular , Inter_500Medium , Inter_700Bold } from '@expo-google-fonts/inter'
 
import {ThemeProvider} from 'styled-components/native'
import THEME from './src/theme'
import {AppLoading}from './src/AppLoading'
import {StatusBar} from 'expo-status-bar'

import { ShoppingCart } from './src/screens/ShoppingCart'
import { Store } from './src/screens/Store'

import { BottomBar } from './src/components/BottomBar'
import { ScreenConfirm } from './src/screens/ScreenConfirm'

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar  style='light' translucent   />
      {
        !fontsLoaded? <AppLoading/> : <ScreenConfirm/>
      }
      <BottomBar/>

    </ThemeProvider>
  );
}

