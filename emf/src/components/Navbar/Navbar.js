import logo from './logo.webp';
import {Container, Logo,  List} from './styles';
import {FaRegQuestionCircle,  FaHeart, FaRegUser, FaUserPlus, FaUser} from "react-icons/fa";

export default function Navbar() {
  return(
    <Container>
      <Logo>
        <a href='/'>
          <img src={logo} alt='JWM' />
        </a>
      </Logo>
        <List>
          <li>
            <a href='https://www.samsung.com/br/support/'>
              <FaRegQuestionCircle />
              <span>Suporte</span>
            </a>
          </li>
          <li>
            <a href='/wishlist'>
              <FaHeart />
              <span>Lista de Pedidos</span>
            </a>
          </li>
          <li>
            <a href='/login'>
              <FaRegUser />
              <span>Login</span>
            </a>
          </li>
          <li>
            <a href='/register'>
              <FaUserPlus />
              <span>Criar Conta</span>
            </a>
          </li>
          <li>
            <a href='/profile'>
              <FaUser  />
              <span>Perfil</span>
            </a>
          </li>
        </List>
      
    </Container>
  )
}