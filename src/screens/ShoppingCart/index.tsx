import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Button } from "../../components/Button";
import { ProductConfirm, PropsProducts } from "../../components/ProductConfirm";
import { Container, ContainerTotally, ContentSum, Separete, Sum, SumTotally } from "./styles";

export function ShoppingCart() {
  const [products, setProducts] = useState<PropsProducts[]>([
    {
      id: "2",
      amount: "9",
      imageUrl:
        "https://cdn.w600.comps.canstockphoto.com.br/cima-produtos-beleza-fazer-vetor-clip-arte_csp5949486.jpg",
      price: "500",
      title:
        "Scalable, produtos beleza, cosméticos, gráfico, mudança, cheio, like., cobrança, vetorial, cores, tu",
    },

    {
      id: "1",
      amount: "9",
      imageUrl:
        "https://cdn.w600.comps.canstockphoto.com.br/cima-produtos-beleza-fazer-vetor-clip-arte_csp5949486.jpg",
      price: "500",
      title:
        "Scalable, produtos beleza, cosméticos, gráfico, mudança, cheio, like., cobrança, vetorial, cores, tu",
    },
   
  ]);

  return (
    <Container>
      <FlatList
        style={{
          width: "100%",
          paddingLeft: 12,
          marginBottom: "80%",
          marginTop: getBottomSpace() + 25,
        }}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductConfirm
            amount={item.amount}
            id={item.id}
            imageUrl={item.imageUrl}
            price={item.price}
            title={item.title}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
          
      <ContainerTotally>
        <Separete/>

        <ContentSum>
          <Sum>Sum:</Sum>
          <SumTotally>R$ 500</SumTotally>
        
        </ContentSum>
       
      </ContainerTotally>

      <View style={{position:'absolute'}}>
        <Button  title="Desing"/>
          
      </View>
    </Container>
  );
}
