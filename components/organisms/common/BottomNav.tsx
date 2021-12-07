import styled, { keyframes } from 'styled-components';
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
    <>
      <BottomContainer>
        <WriteButtonArea>
          <Tooltip position={'top'} text="나누고 싶은 생각이 있나요?" styleMe="">
            <Icon.WriteIcon style={{ position: 'absolute', left: '18px' }} height={'32px'} />
          </Tooltip>
        </WriteButtonArea>

        <MyPageButtonArea>
          <Icon.MypageIcon style={{ position: 'absolute', left: '18px' }} height={'24px'} />
        </MyPageButtonArea>
      </BottomContainer>
    </>
  );
}
