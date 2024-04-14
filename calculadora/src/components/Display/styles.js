import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  outline-color: #1f1f1f;
  border: 1px solid #1f1f1f;
  text-align: right;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 6px;

  &:disabled {
    background-color: white;
  }
`