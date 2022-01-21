import { Span } from '@/components/atoms';
import { useCalcRegisterDate } from '@/hooks/index';
import { NOTIFICATION_LIST } from '@/constants/index';
import styled from 'styled-components';
import { Layout } from '@/styles/theme';
import { COLOR } from '@/styles/color';
import { useRouter } from 'next/router';

const Container = styled.div`
  ${Layout.flexRowStartEnd}
  padding: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLOR.GRAY02};
  height: 70px;
`;

const TypeContainer = styled.div`
  margin-right: 8px;
`;
const ContentContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Title = styled.p`
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
  color: ${COLOR.GRAY05};
  font-size: 12px;
  line-height: 1.1;
`;

const NotificationItem = ({ notification }: any) => {
  const [registerDate] = useCalcRegisterDate(notification.createdAt);
  const router = useRouter();
  const getDescription = (notificationType: string) => {
    switch (notificationType) {
      case 'like':
        return `${notification.count}명의 익명 친구가 내 글을 공감합니다.`;
      case 'comment':
        return `${notification.count}개의 댓글이 달렸습니다.`;
      case 'nestedComment':
        return `${notification.count}개의 답댓글이 달렸습니다.`;
    }
  };
  return (
    <Container onClick={() => router.push(`/community/detail/${notification.pk}`)}>
      <TypeContainer>{NOTIFICATION_LIST[notification.type]}</TypeContainer>
      <ContentContainer>
        <Description>
          <StyledSpan>{getDescription(notification.type)}</StyledSpan>
          <StyledSpan>{registerDate}</StyledSpan>
        </Description>

        <Title>{notification.title}</Title>
      </ContentContainer>
    </Container>
  );
};

export default NotificationItem;
