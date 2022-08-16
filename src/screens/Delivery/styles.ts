import styled , {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #08080A;
  align-items: center;
  justify-content: flex-end;
`;

export const Text = styled.Text`
  color: #ABABAB;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center; 
  margin-bottom: 83px;
`


export const Modal = styled.View`
  background-color: #151515;
  height: 70%;
  width: 100%;
  border-radius: 30px ;
  padding-top: 53px;
`



const text = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;

  color: #A7A7A7;
`

export const DataDelivery = styled.View`

  padding-left: 36px;
  padding-right: 36px;
`

export const ContainerData = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Data= styled.Text`
  ${text}

`

export const Total = styled.Text`
  ${text}
  color: #fff;
  margin-top: 30px;
`

export const Button = styled.TouchableOpacity`
  background-color: red;
  width: 311px;
  height: 62px;
  justify-content: center;
  align-items: center;
  background: #D6D6D6;
  border-radius: 23px;
  margin: auto auto;
`
export const TextButton = styled.Text`
  font-weight: 800;
  font-size: 22px;
  line-height: 29px;
  color: #000000;

`