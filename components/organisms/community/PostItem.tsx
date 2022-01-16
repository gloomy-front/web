import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Span, Title } from '@/components/atoms';
import { useCalcRegisterDate } from '@/hooks/index';
import { COLOR, Layout } from '@/styles/index';
import { stackRouterPush } from '@/utils/index';

const ItemSection = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

const CategoryBox = styled.div`
  ${Layout.flexRowCenter};
  height: 20px;
  padding: 0 5px;
  border-radius: 2px;
  font-size: 11px;
  color: ${({ theme }) => theme.GRAY05};
  background-color: ${({ theme }) => theme.GRAY02};
  margin-bottom: 12px;
`;

const TextSection = styled.section`
  ${Layout.flexColCenterStart};
  width: 100%;
`;

const ContentSection = styled.div`
  ${Layout.flexRowCenter};
  width: 100%;
`;

const ContentSpan = styled(Span)`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.GRAY05};

  display: -webkit-box;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: pre-wrap;
`;

const FooterSection = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
`;

const ButtonSection = styled.section`
  ${Layout.flexRowStartCenter};
`;

const ButtonArea = styled.div`
  ${Layout.flexRowStartCenter};
  cursor: pointer;
`;

export default function PostItem({ post }: { post: any }): JSX.Element {
  const router = useRouter();
  const [registerDate] = useCalcRegisterDate(post.createdAt ?? '');

  return (
    <>
      {/* 피드 상세 진입점 */}
      <ItemSection onClick={() => stackRouterPush(router, `/community/detail/${post.pk}`)}>
        <CategoryBox>{post.category}</CategoryBox>
        <ContentSection>
          <TextSection>
            <Title style={{ marginBottom: '8px', fontWeight: 400 }}>{post.title}</Title>
            <ContentSpan>{post.content}</ContentSpan>
          </TextSection>
          {post.thumbnail && (
            <img
              src={post.thumbnail}
              alt={'thumnail'}
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '12px',
                marginLeft: '20px',
              }}
            />
          )}
        </ContentSection>
        <FooterSection>
          <ButtonSection>
            <ButtonArea>
              <Span style={{ fontSize: '10px', marginRight: '3px', color: COLOR.GRAY05 }}>
                {`❤️ 공감 ${post.likeCount} ·`}
              </Span>
            </ButtonArea>
            <ButtonArea>
              <Span style={{ fontSize: '10px', color: COLOR.GRAY05 }}>{`💬 댓글 ${post.commentCount}`}</Span>
            </ButtonArea>
          </ButtonSection>
          <Span style={{ fontSize: '10px', color: COLOR.GRAY05 }}>{registerDate}</Span>
        </FooterSection>
      </ItemSection>
    </>
  );
}
