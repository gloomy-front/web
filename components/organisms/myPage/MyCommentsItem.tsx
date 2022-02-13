import { Span, Title } from '@/components/atoms';
import { useCalcRegisterDate } from '@/hooks/index';
import { COLOR, Layout } from '@/styles/index';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ItemSection = styled.section`
  ${Layout.flexColStartStart};
  width: 100vw;
  padding: 16px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

const CategoryBox = styled.div`
  ${Layout.flexRowStartCenter};
  height: 20px;
  white-space: nowrap;
  padding: 0 5px;
  border-radius: 2px;
  font-size: 8px;
  color: ${({ theme }) => theme.GRAY05};
  background-color: ${({ theme }) => theme.GRAY02};
`;

const ContentSection = styled.div`
  ${Layout.flexRowCenter};
  width: 100%;
`;

const ContentSpan = styled(Span)`
  color: ${({ theme }) => theme.GRAY05};
  padding: 0 10px;
  width: 100%;
  display: -webkit-box;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: pre-wrap;
`;

const FooterSection = styled.section`
  ${Layout.flexColStartEnd};
  width: 100%;
`;

export default function MyCommentsItem({ post }: { post: any }): JSX.Element {
  const router = useRouter();
  const [registerDate] = useCalcRegisterDate(post.createdAt ?? '');

  return (
    <>
      {/* 피드 상세 진입점 */}
      <ItemSection onClick={() => router.push(`/community/detail/${post.pk}`)}>
        <Title style={{ marginBottom: '8px', fontWeight: 400 }}>
          {'💬 '}
          {post.comments}
        </Title>
        <ContentSection>
          <CategoryBox>{post.category}</CategoryBox>
          <ContentSpan>{post.title}</ContentSpan>
          <FooterSection>
            <Span style={{ fontSize: '10px', color: COLOR.GRAY05 }}>{registerDate}</Span>
          </FooterSection>
        </ContentSection>
      </ItemSection>
    </>
  );
}
