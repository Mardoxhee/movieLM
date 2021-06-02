import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200;
  margin-left: 20px;

  .imgContenair {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .details {
    margin-bottom: 20px;
    color: white;
    width: 300px;
    height: auto;
    background-color: none;
    h3 {
      margin: 20px 0px;
    }
    span {
      color: #e40815;
    }
  }
`;
export default CardStyle;
