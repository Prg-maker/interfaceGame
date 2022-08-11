import styled from 'styled-components/native';
import HomeSvg from '../../assets/home.svg'


export const Container = styled.View`
  width: 100%;
  height: 88px;

  background-color: #1F1F1F;

  position: absolute;
  bottom: 0;

`;


export const Bar = styled.View`
  width:134px;
  height: 5px;
  background: #fff;
  border-radius: 2.5px;

  position: absolute;
  bottom: 0;
  margin-bottom: 8px;
  margin-left: 28%;
  
`

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 63px 0 63px ;

`

export const Home = styled(HomeSvg)`
  
`