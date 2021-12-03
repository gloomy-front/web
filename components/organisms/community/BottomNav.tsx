import styled from 'styled-components';
import { Layout } from '@/styles/index';
import { Icon } from '@/components/atoms';

const BottomContainer = styled.section`
  ${Layout.flexColStartStart};
  position: fixed;
  bottom: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background-color: #ffffff;
`;

const Button = styled.button`
  border: none;
  margin: 0;
  padding: 16px 0;
  color: ${({ theme }) => theme.WHITE};
  cursor: pointer;
`;

const MyPageButtonArea = styled.div`
  ${Layout.flexRowCenter};
  position: fixed;
  bottom: 30px;
  left: 65%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const WriteButtonArea = styled.div`
  ${Layout.flexRowCenter};
  position: fixed;
  bottom: 32px;
  left: 38%;
  transform: translateX(-50%);
  cursor: pointer;
`;

export default function BottomNav(): JSX.Element {
  return (
    <BottomContainer>
      <WriteButtonArea>
        <Icon.WriteButton style={{ position: 'absolute', left: '18px' }} height={'32px'} />
      </WriteButtonArea>

      <MyPageButtonArea>
        <Icon.Mypage style={{ position: 'absolute', left: '18px' }} height={'24px'} />
      </MyPageButtonArea>
    </BottomContainer>
  );
}
