import { Container , Bar , Content , Home} from './styles';
import HomeSvg from '../../assets/home.svg'
import ShoppeSvg from '../../assets/shoppe.svg'
import UserSvg from '../../assets/user.svg'

import {TouchableOpacity } from 'react-native'

export function BottomBar() {
  return (
    <Container>

      <Content>

        <TouchableOpacity>
          <Home/>
        </TouchableOpacity>

        <TouchableOpacity>
          <ShoppeSvg/>
        </TouchableOpacity>

        <TouchableOpacity>
          <UserSvg/>
        </TouchableOpacity>

      </Content>


      <Bar/>
    </Container>
  );
}