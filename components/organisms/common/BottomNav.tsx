import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Layout } from '@/styles/index';
import { Icon } from '@/components/atoms';
import { Tooltip } from '@/components/molcules';

const BottomContainer = styled.div`
  ${Layout.flexRowCenter};
  position: fixed;
  bottom: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-around;
  border-top: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

const MyPageButtonArea = styled.div`
  position: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const WriteButtonArea = styled.div`
  position: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default function BottomNav(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <BottomContainer>
        <MyPageButtonArea>
          <Icon.Mypage />
        </MyPageButtonArea>

        <WriteButtonArea onClick={() => router.push('/community/new')}>
          <Tooltip position={'top'} content="🔮나누고 싶은 생각이 있나요?">
            <Icon.WriteIcon height={'32px'} />
          </Tooltip>
        </WriteButtonArea>

        <MyPageButtonArea>
          <Icon.Mypage />
        </MyPageButtonArea>
      </BottomContainer>
    </>
  );
}
