import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
  padding: 32px;
  padding-left: 65px;
  padding-right: 65px;
  @media (min-width: 250px) and (max-width: 800px) {
    justify-content: space-around;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
