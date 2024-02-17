import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const HomeContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.primaryColor};

  .weatherContainer {
    width: 100%;
    height: 100%;
  }

  .galleryCards__Container {
    width: 100%;
    padding: 0 2rem;
    padding-bottom: 2rem;
  }

  .cardContainer {
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
  }

  .cardContainer::-webkit-scrollbar {
    width: 10px;
  }

  .cardContainer::-webkit-scrollbar-track {
    background-color: #b2b2b2;
    border-radius: 100px;
  }

  .cardContainer::-webkit-scrollbar-thumb {
    background-color: ${theme.secondaryColor};
    border-radius: 100px;
  }

  @media only screen and (max-width: 480px) {
    .galleryCards__Container {
      width: 100%;
      padding: 0 1rem;
      padding-bottom: 0.5rem;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 1000px) {
    .galleryCards__Container {
      width: 100%;
      padding: 0 1rem;
      padding-bottom: 0.5rem;
    }
  }
`;

export const LoadingScreen = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.primaryColor};
`;
