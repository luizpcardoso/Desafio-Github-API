import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #e5e5e5;
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .result__title {
    border-bottom: 1px solid #e1dfe0;
    width: 80%;
    display: flex;
    align-items: flex-start;
    margin-top: 50px;
    padding: 10px;
    p {
      color: #2f2544;
      font-size: 18px;
    }
  }
  .result__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    height: 80vh;
    margin: 30px 0 0 0;
    row-gap: 20px;
    overflow-x: auto;
  }
  .result__list ::-webkit-scrollbar {
    display: none;
  }
`;
