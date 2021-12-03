import useCalcRegisterDate from '@/hooks/useCalcRegisterDate';
import { COLOR } from '@/styles/color';
import { Layout } from '@/styles/theme';
import router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { Icon, Span, Title } from '../atoms';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 56px;
`;
const HeaderContainer = styled.section`
  /* 여기 flex 중첩 필요한가요? */
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
  padding: 0 5px; // 직장/이직 으로 해봤더니 overflow되길래 수정했습니다
  border-radius: 2px;
  font-size: 11px;
  color: ${({ theme }) => theme.GRAY05};
  background-color: ${({ theme }) => theme.GRAY02};
  margin-bottom: 8px;
`;
const ImageSection = styled.section`
  ${Layout.flexRowCenter};
  height: 306px;
  padding-top: 16px;
`;
const ContentSection = styled.section`
  padding: 16px;
  word-break: keep-all;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.BLACK};
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
  background-color: ${({ theme }) => theme.PURPLE};
  border-radius: 10px;
  border: none;
`;
const CommentSection = styled.section`
  width: 100%;
  height: 152px;
  border-top: 6px solid ${({ theme }) => theme.GRAY02};
`;
const FooterContainer = styled.section`
  ${Layout.flexRowCenter};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 56px;
  padding: 10px 16px;
  box-sizing: border-box;
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
      <ImageSection>{post.thumbnail && <img src={'https://picsum.photos/360/306'} />}</ImageSection>
      <ContentSection>{post.content}</ContentSection>
      <ButtonArea>
        <LikeButton>❤️ 공감 {post.likeCount}</LikeButton>
      </ButtonArea>
      <CommentSection></CommentSection>
      <FooterContainer>
        <FooterSection>
          <CommentInput type="text" placeholder="💬 댓글을 남겨주세요." />
          <CommentPostButton>등록</CommentPostButton>
        </FooterSection>
      </FooterContainer>
    </MainContainer>
  );
};
export default DetailPostTemplate;

const post = {
  pk: 5,
  title: '나 아까 노티드 도넛먹고 우울한게 좀 나아졌어',
  content:
    '아까 안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코 푸딩도넛 품절 아니길래 잽싸게 사먹었다 휴 역시 달달한게 우울에는 직빵인듯 힘내자 내자신아 너네들도 힘내라',
  likeCount: 4,
  commentCount: 4,
  createdAt: '2021-10-30 17:32',
  thumbnail: 'https://picsum.photos/360/306', // https://picsum.photos/width/height
  color: 'purple',
  category: '직장/이직',
};
