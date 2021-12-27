import styled from "styled-components";

export const Container = styled.div`
  max-height: 400px;
  width: 230px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px rgba(47, 37, 68, 0.25);
  margin: 0 10px 0 10px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
  }
  .details {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-size: 18px;
      margin: 10px 0 4px 10px;
    }

    a {
      text-decoration: none;
      font-size: 12px;
      color: #03cada;
      margin: 0 0 4px 10px;
    }

    p {
      font-size: 12px;
      color: #7b6490;
      margin: 0 0 0 10px;
    }
  }
  button {
    height: 36px;
    width: 90%;
    max-width: 210px;
    border: 1px solid #8c56c2;
    background-color: #8c56c2;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    margin: 20px 10px;
  }
  button:hover {
    color: #8c56c2;
    background-color: #ffffff;
    cursor: pointer;
  }
`;
