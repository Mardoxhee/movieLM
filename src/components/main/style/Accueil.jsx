import styled from "styled-components";
import bg from "../bg.jpg";

const Accueil = styled.section`
  color: #fff;
  display: flex;
  padding-top: 90px;
  height: 100vh;
  width: 100%;

  background: linear-gradient(
      113deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.40940126050420167) 65%
    ),
    url(${bg});
  background-size: cover;
  .movieDetails {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 150px;
    margin-left: 150px;
    .genre {
      text-transform: uppercase;
      letter-spacing: 4px;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      padding-left: 10px;
      border-left: #e40815 2px solid;
      width: auto;
      margin: 10px;
    }
    h2 {
      font-size: 54px;
      line-height: 62px;
      padding: 10px;
      font-family: "Jost", sans-serif;
      color: #fff;
      font-style: normal;
      text-transform: uppercase;
      font-weight: 600;
      margin: 0;
      letter-spacing: 0.02em;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
    }
  }
  .classificationInfo {
    display: flex;
  }
  .duration,
  .cotation,
  .outDate,
  .gender {
    margin: 10px 10px 10px 10px;
  }
  .titleDUrate {
    padding: 5px;
    margin: 0px 10px 0px 0px;
    border: 1px #fff solid;
  }
  .titleCote {
    padding: 5px;
    margin: 0px 10px;
    border: 1px #fff solid;
  }
  .titleDate {
    padding: 5px;
    margin: 0px 10px;
    border: 1px #fff solid;
  }
  .genderValue {
    background-color: #1f7fdf;
    padding: 5px;
  }
  p {
    display: inline-block;
    width: 100%;
    font-size: 18px;
    margin-bottom: 20px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: "Roboto", sans-serif;
    color: #cecfd1;
    line-height: 2;
  }
  .collomnDetails {
    margin-top: 15px;
    .tit {
      color: #e40916;
    }
    .details {
      font-family: "Jost", sans-serif;

      line-height: 0.5;
    }
  }
  .movieTeaser {
    width: 40%;
    height: 50%;
    margin-top: 150px;
  }
`;

export default Accueil;
