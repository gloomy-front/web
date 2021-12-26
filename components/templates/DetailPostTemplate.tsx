import { Icon, Span, Title } from '@/components/atoms';
import useCalcRegisterDate from '@/hooks/useCalcRegisterDate';
import { COLOR } from '@/styles/color';
import { Layout } from '@/styles/theme';
import { Comment } from '@/components/molcules';
import router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { CommentItemProps } from '../molcules/Comment';
import Modal from '../molcules/Modal';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 56px;
`;
const HeaderContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px 8px 11px;
`;
const HeaderNav = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
`;
const TitleSection = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
  padding: 8px 16px 16px 16px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;
const CategoryBox = styled.section`
  ${Layout.flexRowCenter};
  height: 20px;
  padding: 0 5px;
  border-radius: 2px;
  font-size: 11px;
  color: ${({ theme }) => theme.GRAY05};
  background-color: ${({ theme }) => theme.GRAY02};
  margin-bottom: 8px;
`;
const ImageSection = styled.section`
  ${Layout.flexRowCenter};
  width: 100%;
  height: 306px;
  padding-top: 16px;
`;
const ContentSection = styled.section`
  padding: 16px;
  color: ${({ theme }) => theme.BLACK};
  font-size: 15px;
  word-break: keep-all;
  white-space: pre-line;
  line-height: 22px;
`;
const ButtonArea = styled.section`
  ${Layout.flexRowStartCenter};
  width: 100%;
  box-sizing: border-box;
  padding: 11px 16px 32px 16px;
`;
const LikeButton = styled.button`
  color: ${({ theme }) => theme.WHITE};
  width: 82px;
  height: 32px;
  background-color: ${({ theme }) => theme.PRIMARY};
  border-radius: 10px;
  border: none;
`;
const CommentSection = styled.section`
  width: 100%;
  min-height: 152px;
  box-sizing: content-box;
  border-top: 6px solid ${({ theme }) => theme.GRAY02};
`;
const CommentSectionHeader = styled.div`
  ${Layout.flexRowStartCenter}
  width:100%;
  height: 44px;
  padding: 16px 16px 6px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.GRAY02};
`;
const CommentList = styled.ul`
  ${Layout.flexColStartCenter}
  width:100%;
  height: min-content;
  min-height: 108px;
  margin: 7px 0;
  padding: 0;
  list-style-type: none;
`;
const FooterContainer = styled.section`
  ${Layout.flexRowCenter};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.WHITE};
  padding: 10px 16px;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
`;
const FooterSection = styled.section`
  ${Layout.flexRowCenter};
  width: 100%;
`;
const CommentInput = styled.input`
  box-sizing: border-box;
  color: ${({ theme }) => theme.GRAY04};
  height: 36px;
  flex-basis: 100%;
  padding: 7px 8px;
  border: 1px solid ${({ theme }) => theme.GRAY10};
`;
const CommentPostButton = styled.button`
  color: ${({ theme }) => theme.GRAY04};
  box-sizing: border-box;
  width: fit-content;
  height: 36px;
  word-break: keep-all;
  padding: 10px 0 10px 8px;
  border: 0;
  background-color: ${({ theme }) => theme.WHITE}; ;
`;

const DetailPostTemplate = (): JSX.Element => {
  const [registerDate] = useCalcRegisterDate(post.createdAt ?? '');
  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderNav>
          <Icon.Back onClick={() => router.back()} style={{ cursor: 'pointer' }} />
          <Icon.More onClick={() => console.log(alert('more'))} style={{ cursor: 'pointer' }} />
        </HeaderNav>
      </HeaderContainer>
      <TitleSection>
        <CategoryBox>{post.category}</CategoryBox>
        <Title style={{ wordBreak: 'keep-all', paddingBottom: '8px' }}>{post.title}</Title>
        <Span style={{ fontSize: '10px', color: COLOR.GRAY05 }}>{registerDate}</Span>
      </TitleSection>
      <ImageSection>
        {post.thumbnail && (
          <img
            src={'https://picsum.photos/360/306'}
            alt={'contentImage'}
            style={{ width: '100%', height: '306px', objectFit: 'cover' }}
          />
        )}
      </ImageSection>
      <ContentSection>{post.content}</ContentSection>
      <ButtonArea>
        <LikeButton>❤️ 공감 {post.likeCount}</LikeButton>
      </ButtonArea>
      <CommentSection>
        <CommentSectionHeader>댓글 {0}</CommentSectionHeader>
        <CommentList>
          {Object.keys(comment)
            .sort()
            .map((key) => (
              <Comment key={key} {...comment[key]} />
            ))}
        </CommentList>
      </CommentSection>
      <FooterContainer>
        <FooterSection>
          <CommentInput type="text" placeholder="💬 댓글을 남겨주세요." />
          <CommentPostButton>등록</CommentPostButton>
        </FooterSection>
      </FooterContainer>
      {/* <Modal
        title={'이 게시글에 대해'}
        type={'normal-list'}
        content={['게시글 수정', '게시글 삭제']}
        cb={(idx: number) => alert(idx)}
      /> */}
      {/* <Modal
        title={'신고 사유를 선택하세요'}
        type={'normal-list'}
        content={[
          '광고 · 홍보성 내용',
          '욕설 · 외설적 언어 사용',
          '선정적 · 폭력적인 내용',
          '도배성 내용',
          '정치적 · 사회적 의견 표출',
        ]}
        cb={(idx: number) => alert(idx)}
      /> */}
    </MainContainer>
  );
};
export default DetailPostTemplate;

const post = {
  pk: 5,
  title: '나 아까 노티드 도넛먹고 우울한게 좀 나아졌어',
  content: `아까 안국역쪽 들렀는데 거기 웨이팅이 별로 없대?
    그래서 들어가니까 초코 푸딩도넛 품절 아니길래 잽싸게 사먹었다
    휴 역시 달달한게 우울에는 직빵인듯
    힘내자 내자신아
    너네들도 힘내라`,
  likeCount: 4,
  commentCount: 4,
  createdAt: '2021-10-30 17:32',
  thumbnail: 'https://picsum.photos/240/306',
  color: 'purple',
  category: '직장/이직',
};

const comment: { [id: string]: CommentItemProps } = {
  '1': {
    id: '1',
    writer: '익명 친구1',
    createdAt: '15:31',
    content: '오 노티드 맛있겠다',
  },
  '2': {
    id: '2',
    writer: '익명 친구2',
    createdAt: '15:31',
    content: '나도 다음주에 노티드 갈까 하는데 달달한거 먹고 기분 풀렸다니 다행이야. 힘내자',
  },
  '3': {
    id: '3',
    writer: '익명 친구3',
    createdAt: '15:31',
    content: '나도 다음주에 노티드 갈까 하는데 달달한거 먹고 기분 풀렸다니 다행이야. 힘내자',
  },
  '4': {
    id: '4',
    writer: '익명 친구4',
    createdAt: '15:31',
    content: '나도 다음주에 노티드 갈까 하는데 달달한거 먹고 기분 풀렸다니 다행이야. 힘내자',
  },
};
