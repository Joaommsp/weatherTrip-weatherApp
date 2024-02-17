import { Link } from "react-router-dom";

import Logo from "../../assets/images/weatherTrip-logo.png";


import { HeaderContainer, HeaderLinks } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Weather Trip" className="logo" />
      <HeaderLinks>
        <Link to="/" className="homeLink">
          Home
        </Link>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </HeaderLinks>
    </HeaderContainer>
  );
};

export default Header;
