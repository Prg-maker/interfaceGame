import { TouchableOpacity } from "react-native";
import { ProductContainer, ProductImg, Text } from "./styles";

interface Props{
  imageUrl:string;
  description:string;
  price:string;
}

export function Product(props:Props) {
  return (
    <ProductContainer>

      <TouchableOpacity>

        <ProductImg
          source={{
            uri: `${props.imageUrl}`
          }}
        />

      </TouchableOpacity>

      <Text>{props.description}</Text>
      <Text style={{marginTop: 11}}>R${props.price}</Text>
    </ProductContainer>
  );
}
