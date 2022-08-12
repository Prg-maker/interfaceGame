import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  width: 311px;
  height: 62px;
  background: #F7DE09;

  align-items: center;
  justify-content: center;

  position: relative;
  top: 647px;

  border-radius:23px;
`;

export const Title = styled.Text`

  font-weight: bold;
  font-size: 24px;
  font-family: ${props=> props.theme.FONTS.BOLD};

`
