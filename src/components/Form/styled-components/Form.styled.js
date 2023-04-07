import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`;

const WrapBtnsForm = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export { Form, WrapBtnsForm };
