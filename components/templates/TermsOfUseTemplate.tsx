import router from 'next/router';
import styled from 'styled-components';
import { Layout } from '@/styles/index';
import { Title, Icon } from '@/components/atoms';
import { stackRouterBack } from '@/utils/index';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.WHITE};
`;

const HeaderContainer = styled.header`
  ${Layout.flexColStartCenter};
  width: 100%;
  background-color: ${({ theme }) => theme.WHITE};
  box-sizing: border-box;
`;

const HeaderNav = styled.section`
  ${Layout.flexRowBetweenCenter};
  background-color: ${({ theme }) => theme.WHITE};
  width: 100%;
  height: 56px;
`;

const ContentSection = styled.section`
  ${Layout.flexColStartEnd};
  width: 100%;
  background-color: ${({ theme }) => theme.WHITE};
  margin-top: 1px;
`;

const ContentContainer = styled.div`
  padding: 16px 16px 16px 16px;
  color: ${({ theme }) => theme.GRAY07};
  font-size: 15px;
`;

export default function TermsOfUseTemplate(): JSX.Element {
  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <HeaderNav>
            <Icon.Back onClick={() => stackRouterBack(router)} style={{ cursor: 'pointer', marginLeft: '16px' }} />
            <Title style={{ fontWeight: 'bold', position: 'absolute', left: '50%', transform: 'translate(-50%)' }}>
              {'이용약관'}
            </Title>
          </HeaderNav>
        </HeaderContainer>
        <ContentSection>
          <ContentContainer>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac. Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate enim. Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu. Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum dolor sit.'
            }
          </ContentContainer>
        </ContentSection>
      </MainContainer>
    </>
  );
}
