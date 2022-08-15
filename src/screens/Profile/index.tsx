import { View } from "react-native";
import { Avatar } from "../../components/Avatar";
import { ButtonPressProfile } from "../../components/ButtonPressProfile";
import { Container } from "./styles";

export function Profile() {
  return (
    <Container>
      <Avatar
        id="12345"
        imageUrl="https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/site-vacinacao-33-anos.png"
        name="Rita Carla"
      />

      <View
        style={{
          marginTop: 26,
        }}
      >
        <ButtonPressProfile text="Purchase history" />

        <ButtonPressProfile text="Delivery address" />

        <ButtonPressProfile text="Payment" />

        <ButtonPressProfile text="Notifications" />

        <ButtonPressProfile text="Point of issue" />

        <ButtonPressProfile text="Point of issue" />

        <ButtonPressProfile text="Map" />

        <ButtonPressProfile text="Contacts" />

        <ButtonPressProfile text="Settings" />

        <ButtonPressProfile text="Offer conditions" />

        <ButtonPressProfile text="About Us" />
      </View>
    </Container>
  );
}
