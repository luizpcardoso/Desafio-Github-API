import styled from "styled-components";

export const Container = styled.div`
  height: 56px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(47, 37, 68, 0.15);

  img {
    max-width: 20%;
    height: 40px;
    margin-right: 30px;
  }
  img:hover {
    cursor: pointer;
  }
  .input__Container {
    width: 80%;
    display: flex;
    align-items: center;
    height: 100%;

    input {
      background-color: none;
      width: 95%;
      height: 36px;
      padding-left: 10px;
      border-radius: 4px 0 0 4px;
      border: none;
      border: 1px solid #e1dfe0;
    }
    input:focus {
      outline: none;
    }
    button {
      border: none;
      background-color: #8c56c2;
      height: 40px;
      width: 36px;
      border: 1px solid #8c56c2;
      border-radius: 0 4px 4px 0;
      box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.25);
      svg {
        height: 100%;
        width: 100%;
        color: #ffffff;
      }
    }
    button:hover {
      background-color: #ffffff;
      cursor: pointer;
      svg {
        color: #8c56c2;
      }
    }
  }
  @media (max-width: 600px) {
    .logo {
      display: none;
    }
  }
`;
