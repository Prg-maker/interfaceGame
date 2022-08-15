import { Check, TextT } from 'phosphor-react-native';
import { Container , Modal, Text, TextDecoration , TextModal } from './styles';

export function ScreenConfirm() {
  return (
    <Container>
      <Text>
        assembly movement {`\n`}
        watch on the <TextDecoration>Map</TextDecoration>
      </Text>

      <Modal>
        <Check size={127} weight="bold" color='#F6DE09'/>
        <TextModal>Soon at your home!</TextModal>

      </Modal>

    </Container>
  );
}