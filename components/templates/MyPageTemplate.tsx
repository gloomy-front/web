import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLOR, Layout } from '@/styles/index';
import { Title, Span, Icon } from '@/components/atoms';
import { AsyncBoundary, BoardLoading, CheerList } from '@/components/organisms';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.BLACK};
`;

const HeaderContainer = styled.header`
  ${Layout.flexColStartCenter};
  width: 100%;
  box-sizing: border-box;
  height: 182px;
  background-color: #051248;
  padding: 11px 14px 0 11px;
`;

const HeaderNav = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
  height: 40px;
`;

const HeaderButtonArea = styled.div`
  ${Layout.flexRowCenter}
`;

const ContentContainer = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
`;

const HeaderMain = styled.section`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 85px;
  margin-top: 5px;
  padding-left: 3px;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 47px;
  height: 47px;
  background-color: #0047ff;
`;

const NameSection = styled.section`
  ${Layout.flexColCenterStart};
  width: 100%;
  margin-left: 10px;
`;

const TabMenu = styled.div`
  ${Layout.flexRowCenter};
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  height: 61px;
  list-style-type: none;
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid gray;
  .submenu {
    width: 30% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
  .focused {
    border-bottom: 3px solid blue;
    font-weight: bold;
  }
`;

export default function MyPageTemplate(): JSX.Element {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: '게시물', content: <CheerList /> },
    { name: '응원한 게시물', content: <CheerList /> },
  ];

  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderNav>
          <Title>{'Grooming'}</Title>
          <HeaderButtonArea>
            <Icon.MyProfile height={'24px'} style={{ marginRight: '10px' }} />
            <Icon.Search height={'28px'} />
          </HeaderButtonArea>
        </HeaderNav>
        <HeaderMain>
          <div>
            <Circle />
          </div>
          <NameSection>
            <Span style={{ color: COLOR.WHITE, fontWeight: 500 }}>{'욕심많은 바람은 그림자속에'}</Span>
          </NameSection>
        </HeaderMain>
      </HeaderContainer>
      <ContentContainer>
        <AsyncBoundary pendingFallback={<BoardLoading />} isRefresh={true} style={{ height: 'calc(100vh - 140px)' }}>
          <TabMenu>
            {menuArr.map((ele, index) => {
              return (
                <li
                  key={index}
                  className={currentTab === index ? 'submenu focused ' : 'submenu'}
                  onClick={() => selectMenuHandler(index)}
                >
                  {ele.name}
                </li>
              );
            })}
          </TabMenu>
          <>{menuArr[currentTab].content}</>
        </AsyncBoundary>
      </ContentContainer>
    </MainContainer>
  );
}
