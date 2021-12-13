import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Layout } from '@/styles/index';
import { Icon } from '@/components/atoms';
import { Tooltip } from '@/components/molcules';

const BottomContainer = styled.section`
  ${Layout.flexColStartStart};
  position: fixed;
  bottom: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background-color: #ffffff;
  border-top: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

const MyPageButtonArea = styled.div`
  ${Layout.flexRowCenter};
  position: fixed;
  margin-left: 77%;
  margin-top: 12px;
  transform: translateX(-50%);
  cursor: pointer;
`;

const WriteButtonArea = styled.div`
  ${Layout.flexRowCenter};
  position: relative;
  left: 38%;
  margin-top: 8px;
  transform: translateX(-50%);
  cursor: pointer;
`;

export default function BottomNav(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <BottomContainer>
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
