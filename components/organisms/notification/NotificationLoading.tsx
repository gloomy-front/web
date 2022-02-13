import styled from 'styled-components';

import { Layout } from '@/styles/theme';
import { Skeleton } from '@/components/molcules';
import { NOTIFICATION_LOADING_SIZE } from '@/constants/index';

const LoadingContainer = styled.div`
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
      {Array.from({ length: NOTIFICATION_LOADING_SIZE }, (v, i) => i).map((item) => (
        <LoadingContainer key={item}>
          <Skeleton circle width={17} height={17} style={{ marginRight: '8px' }} />
          <ContentContainer>
            <Description>
              <Skeleton width={180} height={10} />
              <Skeleton width={30} height={10} />
            </Description>
            <Skeleton width={'100%'} height={24} />
          </ContentContainer>
        </LoadingContainer>
      ))}
    </>
  );
};

export default NotificationLoading;
