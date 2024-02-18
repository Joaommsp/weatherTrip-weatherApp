import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const AboutContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const AvatarContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 5rem;
  padding-top: 2rem;

  img {
    width: 400px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    padding-left: 0rem;
    display: flex;
    justify-content: center;

    img {
      width: 300px;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1000px) {
    padding-left: 2rem;

    img {
      width: 300px;
    }
  }
`;

export const AboutMeContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 2rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 3rem;
    color: ${theme.secondaryColor};
  }

  p {
    color: #3c3633;
    font-size: 1.2rem;
    text-align: justify;
  }

  span {
    color: #3c3633;
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${theme.secondaryColor};
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  a:last-child {
    margin: 0;
  }

  a img {
    width: 25px;
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2rem;
    }

    p {
      color: #3c3633;
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1000px) {
    padding-right: 2rem;

    h2 {
      font-size: 2rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      text-align: left;
    }
  }
`;
