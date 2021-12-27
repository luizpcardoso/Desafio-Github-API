import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    img {
      width: 50%;
      max-width: 700px;
    }
  }
`;
