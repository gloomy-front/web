import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Span } from '@/components/atoms';
import { useCalcRegisterDate } from '@/hooks/index';
import { NOTIFICATION_DESCRIPTION, NOTIFICATION_LIST } from '@/constants/index';
import { Layout } from '@/styles/theme';
import { INotification } from '@/api/notification/interface';

const NotificationItemContainer = styled.li`
  ${Layout.flexRowStartEnd}
  padding: 16px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
  height: 70px;
  cursor: pointer;
`;

const TypeContainer = styled.div`
  margin-right: 8px;
`;

const ContentContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ContentTitle = styled.p`
  font-size: 16px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.div`
  ${Layout.flexRowBetweenEnd}
  font-size: 12px;
  margin-bottom: 4px;
`;

const StyledSpan = styled(Span)`
  color: ${({ theme }) => theme.GRAY05};
  font-size: 12px;
  line-height: 1.1;
`;

interface NotificationItemProps {
  notification: INotification;
}

const NotificationItem = ({ notification }: NotificationItemProps) => {
  const [registerDate] = useCalcRegisterDate(notification.createdAt);
  const router = useRouter();

  return (
    <NotificationItemContainer onClick={() => router.push(`/community/detail/${notification.pk}`)}>
      <TypeContainer>{NOTIFICATION_LIST[notification.type]}</TypeContainer>
      <ContentContainer>
        <Description>
          <StyledSpan>{NOTIFICATION_DESCRIPTION[notification.type]}</StyledSpan>
          <StyledSpan>{registerDate}</StyledSpan>
        </Description>

        <ContentTitle>{notification.title}</ContentTitle>
      </ContentContainer>
    </NotificationItemContainer>
  );
};

export default NotificationItem;
