
import {useFonts , Inter_400Regular , Inter_500Medium , Inter_700Bold } from '@expo-google-fonts/inter'
 
import {ThemeProvider} from 'styled-components/native'
import THEME from './src/theme'
import {AppLoading}from './src/AppLoading'
import {StatusBar} from 'expo-status-bar'


import { BottomBar } from './src/components/BottomBar'
import { Delivery } from './src/screens/Delivery'
import { Store } from './src/screens/Store'
import { DetailsProduct } from './src/screens/DetailsProduct'

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
        !fontsLoaded? <AppLoading/> : <DetailsProduct/>
      }
      <BottomBar/>

    </ThemeProvider>
  );
}

