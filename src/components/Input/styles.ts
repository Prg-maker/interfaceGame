import styled from 'styled-components/native';
import SearchSvg from '../../assets/search.svg'

export const Container = styled.View`
  width: 318px;
  height: 43px;

  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  border-radius: 14px;


`

export const InputContainer = styled.TextInput`
 
  padding-left: 21px;
  flex: 1;
  font-weight: bold;

`;

export const ButtonSearch = styled.TouchableOpacity`
  justify-content: center;
  margin-right: 15px;
`