import { HeaderWrapper, HeaderContainer } from "./Header.styles";
import Logo from "../../../UX/Logo/Logo.component";
import Navbar from "../Navbar/Navbar.component";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <Navbar />
      </HeaderContainer>
    </HeaderWrapper>
  );
}
