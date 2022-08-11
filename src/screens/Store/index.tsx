import { Text, View } from 'react-native';
import { BottomBar } from '../../components/BottomBar';
import { Input } from '../../components/Input';
import { Container , FromNumber , TextFrom , Scroll  ,Content } from './styles';



export function Store() {
  return (
    <Container>
      <Input/>

      <FromNumber>
        <TextFrom>from 100 to 200</TextFrom>  
      </FromNumber>

      <Scroll>
        <Content>
          
          <View style={{
            width: 149,
            height: 149,
            backgroundColor:'#fff',
            borderRadius:15,
            marginRight:31,
            marginBottom:101
          }}/>

          <View style={{
            width: 149,
            height: 149,
            backgroundColor:'#fff',
            borderRadius:15,
            marginRight:31,
            marginBottom:101
          }}/>

          <View style={{
            width: 149,
            height: 149,
            backgroundColor:'#fff',
            borderRadius:15,
            marginRight:31,
            marginBottom:101
          }}/>



        </Content>
      </Scroll>
      


      <BottomBar/>
    </Container>
  );
}