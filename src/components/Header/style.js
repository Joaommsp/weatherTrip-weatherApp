import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  position: relative;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 5rem;

  .logo {
    width: 60px;
    transition:  transform .3s ease-in-out;
    cursor: pointer;
  }

  .logo:hover {
    transform: scale(1.1);
  }
`

export const HeaderLinks = styled.div`
  display: flex;

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  ul li a{
    text-decoration: none;
    font-weight: 500;
    color: ${theme.secondaryColor};
    border-bottom: 2px solid transparent;
    transition: .3s ease-in;
  }

  ul li a:hover {
    border-bottom: 2px solid ${theme.secondaryColor};
  }

  .homeLink {
    text-decoration: none;
    font-weight: bold;
    margin-right: 3rem;
    border-bottom: 2px solid transparent;
    transition: .3s ease-in;
  }

  .homeLink:hover {
    transform: scale(1.1);
    border-bottom: 2px solid ${theme.secondaryColor};
  }
`