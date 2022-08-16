import React from "react";
import { Container, Modal , Text,DataDelivery, ContainerData , Data , Total , Button, TextButton} from "./styles";

export function Delivery() {
  return (
    <Container>
      <Text>
        delivery time 2 days {'\n'}
        late will give bonuses
      </Text>

      <Modal>

        <DataDelivery>

          <ContainerData>
            <Data>
              build number:
            </Data>
            <Data>
              119754
            </Data>
          </ContainerData>


          <ContainerData>
            <Data>
              the date:
            </Data>
            <Data>
              22.09.2022
            </Data>
          </ContainerData>

          <ContainerData>
            <Data>
              address:
            </Data>
            <Data>
              Zhvachkina
            </Data>
          </ContainerData>

          <ContainerData>
            <Total>
              Total:
            </Total>
            <Total>
              320
            </Total>
          </ContainerData>
          
        </DataDelivery>
        
        <Button>
          <TextButton>
            Pay
          </TextButton>
        </Button>
      </Modal>


 
    </Container>
  );
}
