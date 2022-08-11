import { Container,InputContainer , ButtonSearch ,  } from './styles';
import SearchSvg from '../../assets/search.svg'


export function Input() {
  return (


    <Container>
      <InputContainer
        placeholder='makeup base'
        placeholderTextColor={'#3C3C3C'}
        
      />

      <ButtonSearch>
        <SearchSvg />
      </ButtonSearch>
    </Container>
  );
}