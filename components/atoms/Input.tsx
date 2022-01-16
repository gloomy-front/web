import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.WHITE};
  font-size: 14px;
  line-height: 1.57;
  font-weight: 400;
  color: ${({ theme }) => theme.BLACK};
  resize: none;
  border: none;
  padding: 12px;
  overflow: hidden;
  box-sizing: border-box;
  outline: none;

  fontFamily: "Noto Sans KR", sans-serif;
  lineHeight: 1.33;
  
  &::placeholder {
    color: ${({ theme }) => theme.GRAY04};
  }
`;

export default Input;