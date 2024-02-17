import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const CardContainer = styled.div`
  min-width: 200px;
  height: 110px;
  border-radius: 10px;
  padding: 0.8rem;

  margin-bottom: 2rem;
  margin-right: 1rem;

  background-color: ${theme.secondaryColor};

  .cardHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .cityTemp {
    font-size: 2rem;
    color: ${theme.primaryColor};
  }

  .cityName {
    color: ${theme.primaryColor};
    font-size: 1rem;
  }

  .cityDescription {
    color: ${theme.primaryColor};
  }
`;
