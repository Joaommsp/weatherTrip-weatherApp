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
  padding: 0.5rem 5rem;

  .logo {
    width: 50px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 700px) {
    padding: 0.5rem 2rem;
    height: 5vh;

    .logo {
      width: 25px;
    }
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  ul li a {
    text-decoration: none;
    font-weight: 500;
    color: ${theme.secondaryColor};
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in;
  }

  ul li a:hover {
    border-bottom: 2px solid ${theme.secondaryColor};
  }

  .homeLink {
    text-decoration: none;
    color: ${theme.secondaryColor};
    font-weight: bold;
    margin-right: 3rem;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in;
  }

  .homeLink:hover {
    transform: scale(1.1);
    border-bottom: 2px solid ${theme.secondaryColor};
  }

  @media only screen and (max-width: 700px) {
    ul li a {
      font-size: 0.8rem;
    }

    .homeLink {
      font-size: 0.8rem;
      border: 0;
    }
  }
`;
