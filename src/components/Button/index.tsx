import { ButtonContainer , Title } from './styles';
import {TouchableOpacityProps} from 'react-native'


interface  ButtonProps{
  title:string;
}


export function Button({title}:ButtonProps) {
  return (
    <ButtonContainer >
      <Title>{title}</Title>
    </ButtonContainer>
  );
}