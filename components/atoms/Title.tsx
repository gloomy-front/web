import styled from 'styled-components';

const Title = styled.p`
  font-weight: 400;
  line-height: 1.27;
  color: ${({ theme }) => theme.WHITE};
  margin: 0;
  ${({ size }: { size?: string }) => { 
    if (size === 'h1') {
      return 'font-size: 28px';
    } else if (size === 'h2') {
      return 'font-size: 22px';
    } else if (size === 'h3') {
      return 'font-size: 20px';
    } else if (size === 'h4') {
      return 'font-size: 18px';
    } else if (size === 'h5') {
      return 'font-size: 16px';
    } else if (size === 'h6') {
      return 'font-size: 14px';
    }
    return 'font-size: 16px'; 
  }};
`;

export default Title;