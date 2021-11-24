import styled from "styled-components";

export const SearchBarContainer = styled.div`
    font-family: "Poppins", sans-serif;
    width: 100%;
    
`;

export const SearchForm = styled.form`
    height: 50px;
    overflow: hidden;
    border-radius:5px;
    box-sizing:border-box;
    display: flex;
    width: 100%;
    background-color: #262626;
`;

export const SearchInput = styled.input`
  height: 100%;
  width:100%;
  border:none;
  padding: 0px 20px;
  outline:none;
  background-color: transparent;
  color:  white;
  font-family: "Poppins", sans-serif;
`;

export const SearchButton = styled.button`
  height: 100%;
  width: 100px;
  border:none;
  transition: 0.3s all ease;
  background-color:#5EAA7A;
  display: grid;
  place-items: center;
  transition: 0.3s ease;
  font-weight: 600;
  border: 1px solid #5EAA7A;
  color:white;

  &:disabled{
    background-color: #aaaaaa;
    border: 1px solid #aaaaaa;
  }

  &:hover{
    color: #5EAA7A;
    background-color: transparent;
    
    
  }

`;



