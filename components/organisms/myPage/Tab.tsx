import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AsyncBoundary, BoardLoading, MyContents } from '@/components/organisms';
import { Layout } from '@/styles/index';
import { MYPAGE_TAB } from '@/constants/index';
import { COLOR_TYPE } from '@/types/index';

const TabContainer = styled.section`
  ${Layout.flexRowCenter};
  width: 100%;
  height: 57px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.GRAY02};
`;

const TabWrapper = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: auto;
  scrollbar-width: none;
`;

const TabItem = styled.div`
  ${Layout.flexRowCenter};
  height: 100%;
  width: 50%;
  background-color: ${({ theme }) => theme.WHITE};
  font-size: 12px;
  cursor: pointer;

  ${({ isActive, theme }: { isActive: boolean; theme: COLOR_TYPE }) => {
    if (!isActive) {
      return { 'background-color': theme.WHITE, color: theme.GRAY06 };
    }
    return;
  }};
`;

export default function Tab({ initTab = 'myContents' }: { initTab?: string }): JSX.Element {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<string>(initTab);

  const selectTab = useCallback(
    (tab, e) => {
      setSelectedTab(tab);
      router.replace(`/myPage/${tab}`, undefined, { shallow: true }).then();
    },
    [router],
  );

  return (
    <>
      <TabContainer>
        {Object.keys(MYPAGE_TAB).map((tab: string) => (
          <TabItem key={tab} onClick={(e) => selectTab(tab, e)} isActive={selectedTab === tab}>
            {MYPAGE_TAB[tab]}
          </TabItem>
        ))}
      </TabContainer>
    </>
  );
}
