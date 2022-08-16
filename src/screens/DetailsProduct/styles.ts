import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #08080A;

`;


export const Product = styled.View`
  height: 50%;
`
export const ImageProduct = styled.Image`
  width: 100%;
  height: 100%;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
`
export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 19px;
`
export const Empresa = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;

  color: #FFFFFF;
`
export const Name = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #999999;
`
export const Price = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  color: #FFFFFF;
`