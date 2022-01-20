import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout } from '@/styles/index';
import { Icon } from '@/components/atoms';

import { stackRouterBack } from '@/utils/index';
import { BottomNav } from '../organisms';

const MainContainer = styled.main`
  ${Layout.flexColStartStart};
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  margin: 0 auto;
`;

const HeaderSection = styled.section`
  ${Layout.flexRowBetweenEnd};
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.WHITE};
  height: 56px;
  padding: 0 17px 9px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

export default function NotificationTemplate(): JSX.Element {
  const router = useRouter();

  return (
    <MainContainer>
      <HeaderSection>
        <div
          style={{ cursor: 'pointer', marginBottom: '3px', width: '30px', height: '40px', lineHeight: '70px' }}
          onClick={() => stackRouterBack(router)}
        >
          <Icon.Back height={'14px'} />
        </div>
        알림
      </HeaderSection>
      <BottomNav />
    </MainContainer>
  );
}
