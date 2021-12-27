import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 50%;
  margin: 10% auto;
  height: 340px;
  border-radius: 10px;

  section {
    display: flex;
    flex-direction: row;
    padding: 40px;
    .imgContainer {
      height: 266px;
      width: 266px;
      overflow: hidden;
      border-radius: 14px;

      img {
        height: auto;
        width: 100%;
      }
    }

    h3 {
      color: #2f2544;
      font-size: 18px;
      margin: 10px 0 0 0;
    }

    .modal__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-height: 266px;
      width: 65%;
      padding-left: 20px;
    }
    .details__spaced {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 20px 0 0 0;
      width: 100%;
      border-top: 1px solid #e1dfe0;
    }

    .details__content {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      margin: 10px 0 10px 0;
    }
    .details__left {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      background-color: #ffffff;
      height: 30px;
    }
    .details__right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      height: 30px;
    }
    .details__title {
      color: #2f2544;
      margin: 0 0 4px 0;
      font-size: 14px;
    }
    .details__value {
      color: #7b6490;
      font-size: 14px;
    }
    .details__close {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;

      button {
        border: 1px solid #8c56c2;
        background-color: #ffffff;
        border-radius: 4px;
        height: 36px;
        width: 87px;
        color: #8c56c2;
        font-weight: bold;
      }
      button:hover {
        background-color: #8c56c2;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
`;
