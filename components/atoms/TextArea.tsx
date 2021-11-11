import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.BLACK};
  font-size: 12px;
  line-height: 1.57;
  font-weight: 400;
  color: ${({ theme }) => theme.WHITE};
  resize: none;
  border: none;
  padding: 12px;
  overflow: hidden;
  box-sizing: border-box;
  outline: none;

  fontFamily: "Noto Sans KR", sans-serif;
  lineHeight: 1.33;
  
  &::placeholder {
    color: ${({ theme }) => theme.GRAY08};
  }
`;

export default TextArea;