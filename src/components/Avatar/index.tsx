import { View } from 'react-native';
import { Container , AvatarImg  , ID,Name} from './styles';

interface PropsAvatar{
  imageUrl: string;
  name:string;
  id:string;
}

export function Avatar(props: PropsAvatar) {
  return (
    <Container>
      <AvatarImg source={{uri:props.imageUrl}} />


      <View>
        <Name>{props.name}</Name>
        <ID>ID: {props.id}</ID>
      </View>

    </Container>
  );
}