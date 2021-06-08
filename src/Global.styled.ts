import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 20%;
  padding: 20px;
  font-family: "Bebas Neue", cursive;
`;

export const InputBar = styled.input`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 1px solid #2d9fd9;
  color: #a0d18c;
  width: 40vw;
  height: 30px;
  padding-left: 10px;

  &:focus {
    outline: none;
    border: 1px solid #a0d18c;
    color: #2d9fd9;
  }
`;

export const Button = styled.button`
  padding: 8px;
  margin: 10px;
  background-color: #a0d18c;
  border-radius: 8px;
`;

export const TodoItem = styled.div`
  padding: 10px;
  margin: 5px;
  width: 50vw;
  border: 1px solid #a0d18c;
  font-family: "Comfortaa", cursive;
`;
