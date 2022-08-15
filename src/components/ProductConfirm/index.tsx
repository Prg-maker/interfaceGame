import {
  Container,
  Amount,
  Price,
  ProductImg,
  Title,
  ButtonTrash,
} from "./styles";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Text, View } from "react-native";
import { useState } from "react";
import { Trash } from "phosphor-react-native";

export interface PropsProducts {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  amount: number;
}

export function ProductConfirm({
  amount,
  imageUrl,
  price,
  title,
}: PropsProducts) {
  const [trash, setTrash] = useState(false);

  function handleTrash() {
    setTrash(!trash);
    console.log(trash);
  }

  function handleDeleteProduct(){
    
    setTrash(false);
  }
  return (
    <Container
      style={{
        marginTop: getBottomSpace() + 66,
      }}
      onLongPress={handleTrash}
    >
      <ProductImg source={{ uri: `${imageUrl}` }} />

      <View style={{ paddingLeft: 15 }}>
        <Title>{title}</Title>
        <Price>R$ {price}</Price>
      </View>

        {!trash ? <Amount>{amount}</Amount> : 
          <ButtonTrash onPress={handleDeleteProduct}>
            <Trash size={32} weight="bold" color="white" />    
          </ButtonTrash>
        }
    </Container>
  );
}
