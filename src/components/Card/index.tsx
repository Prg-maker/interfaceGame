import {
  Container,
  Image,
  Title,
  Foundation
} from './styles'
 
import unitedImg from '../../assets/united.png'

export function Card(){
  return(
    <Container 
      animation="shake"
      duration={2000}
    >
      <Image 
        
        source={unitedImg} 
        resizeMode="contain"
        animation="pulse"
        delay={100}
        iterationCount='infinite'
      />

      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  )
}


