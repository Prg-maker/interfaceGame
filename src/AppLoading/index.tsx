import styled from 'styled-components/native'
import AppLoadingSvg from './appLoadingSvg.svg'
export function AppLoading(){
  return(
    <Container>
      <AppLoadingSvg/>
      <Loading/>
    </Container>
  )
}


const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #171717;
  justify-content: center;
  align-items: center;
`
const Loading = styled.ActivityIndicator`
  margin-top: 50px;
`