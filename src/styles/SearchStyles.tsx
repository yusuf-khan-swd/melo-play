import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-left: 220px;
  background-color: #2e2c2c;
  min-height: 100vh;

  @media (max-width: 640px) {
    margin-left: 60px;
  }
`;

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
  padding: 0 35px;
  outline: none;
  border: none;
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
