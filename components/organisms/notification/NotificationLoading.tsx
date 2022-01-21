import styled from 'styled-components';
import { Layout } from '@/styles/theme';
import { Skeleton } from '@/components/molcules';

const Container = styled.div`
  ${Layout.flexRowStartEnd}
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
  height: 70px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 38px;
`;

const Description = styled.div`
  ${Layout.flexRowBetweenEnd}
  margin-bottom: 4px;
`;

const NotificationLoading = () => {
  return (
    <>
      {Array.from({ length: 5 }, (v, i) => i).map((item) => (
        <Container>
          <Skeleton circle width={17} height={17} style={{ marginRight: '8px' }} />
          <ContentContainer>
            <Description>
              <Skeleton width={180} height={10} />
              <Skeleton width={30} height={10} />
            </Description>
            <Skeleton width={'100%'} height={24} />
          </ContentContainer>
        </Container>
      ))}
    </>
  );
};

export default NotificationLoading;
