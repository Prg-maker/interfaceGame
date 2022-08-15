import styled , {css}from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper'

const Color = css`
  color: #fff;
`
const fontSize = css`
  font-weight: 400;
  line-height: 16px;
`

export const Container = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const ProductImg = styled.Image`
  width: 61px;
  height: 61px;
  background: #fff;
  border-radius: 50px;
`

export const Title = styled.Text`
  ${Color}
  ${fontSize}

  max-width: 80%;
  padding-bottom: 12px;
`

export const Price = styled.Text`
  ${Color}
  font-size: 14px;
  line-height: 17px;
`

export const ButtonTrash = styled.TouchableOpacity`
  width: 53px;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  border-radius:8px;
  font-weight: bold;
  background: #1D1D1D;
`

export const Amount = styled.Text`
  ${Color}
  width: 53px;
  height: 25px;
  text-align: center;

  position: absolute;
  right: 0;
  border-radius:8px;
  font-weight: bold;
  background: #1D1D1D;


`