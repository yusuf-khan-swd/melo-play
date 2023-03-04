import styled from "styled-components";

export const SearchForm = styled.form`
  padding: 30px 15px;
  display: flex;
  justify-content: center;
`;

export const SearchGroup = styled.div`
  display: flex;
  background-color: white;
  border-radius: 25px;
  margin-bottom: 10px;
  padding: 10px 20px;
`;

export const SearchInput = styled.input`
  padding: 0 5px;
  outline: none;
  border: none;
  min-width: 350px;

  @media (max-width: 640px) {
    min-width: 200px;
  }
`;

export const SearchIcon = styled.img`
  max-width: 24px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font: 500 18px "Poppins";
  padding: 8px 15px;
`;
