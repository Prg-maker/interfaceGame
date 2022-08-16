import React from "react";
import { View } from "react-native";
import {
  Container,
  Product,
  ImageProduct,
  Details,
  Empresa,
  Name,
  Price,
} from "./styles";

export function DetailsProduct() {
  return (
    <Container>
      <Product>
        <ImageProduct
          source={{
            uri: "https://img.elo7.com.br/product/original/36F76BB/camiseta-masculina-basica-nelville-streetwear-algodao-100.jpg",
          }}
        />

        <Details>
          <View>
            <Empresa>Mattifying Primer</Empresa>

            <Name>Mattifying Primer</Name>
          </View>

          <Price>R$ 3220</Price>
        </Details>
      </Product>
    </Container>
  );
}
